#!/usr/bin/env node
/**
 * Lightweight, local-only heuristic repository audit.
 * No network access. Candidate secrets are redacted. Not a substitute for SAST,
 * secret-history scanning, dependency scanning, DAST, or a professional review.
 */
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const targetArg = args.find(a => !a.startsWith("--")) || ".";
const format = args.includes("--format") ? args[args.indexOf("--format") + 1] : "text";
const out = args.includes("--out") ? args[args.indexOf("--out") + 1] : null;
const root = path.resolve(targetArg);
const MAX_FILE = 1_000_000;
const MAX_FILES = 20_000;
const skipDirs = new Set([".git","node_modules","dist","build",".next",".nuxt","coverage","vendor",".venv","venv","target"]);
const skipExt = new Set([".png",".jpg",".jpeg",".gif",".webp",".ico",".pdf",".zip",".gz",".woff",".woff2",".ttf",".mp4",".mp3",".sqlite",".db",".class",".jar",".exe",".dll"]);
const rules = [
  {id:"SEC-SECRET-001", severity:"High", label:"Possible hard-coded credential", re:/\b(api[_-]?key|secret|token|password|passwd|client_secret)\b\s*[:=]\s*["'`][^"'`\s]{8,}["'`]/ig, redact:true},
  {id:"SEC-SECRET-002", severity:"High", label:"Possible private key material", re:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g, redact:true},
  {id:"SEC-WEB-001", severity:"Medium", label:"Potentially unsafe HTML insertion API", re:/\b(dangerouslySetInnerHTML|innerHTML\s*=|outerHTML\s*=)\b/g},
  {id:"SEC-WEB-002", severity:"Medium", label:"Potential wildcard CORS configuration", re:/Access-Control-Allow-Origin\s*[:=]\s*["'`]?\*/ig},
  {id:"SEC-WEB-003", severity:"Medium", label:"Potential disabled TLS certificate verification", re:/rejectUnauthorized\s*:\s*false|NODE_TLS_REJECT_UNAUTHORIZED\s*=?\s*["']?0/ig},
  {id:"SEC-CONFIG-001", severity:"Medium", label:"Potential debug mode enabled", re:/DEBUG\s*[:=]\s*(?:true|1)|debug\s*[:=]\s*true/ig},
  {id:"SEC-DB-001", severity:"Medium", label:"Potential SQL string concatenation", re:/(?:SELECT|INSERT|UPDATE|DELETE)[^\n]{0,120}\+\s*[A-Za-z_$]/ig},
  {id:"SEC-HTTP-001", severity:"Low", label:"Hard-coded HTTP URL (review whether HTTPS is required)", re:/http:\/\/(?!localhost|127\.0\.0\.1)[^\s"'`]+/g}
];

function walk(dir, list=[]) {
  let entries;
  try { entries = fs.readdirSync(dir, {withFileTypes:true}); } catch { return list; }
  for (const ent of entries) {
    if (list.length >= MAX_FILES) break;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (!skipDirs.has(ent.name)) walk(p, list);
    } else if (ent.isFile() && !skipExt.has(path.extname(ent.name).toLowerCase())) {
      try {
        const st = fs.statSync(p);
        if (st.size <= MAX_FILE) list.push(p);
      } catch {}
    }
  }
  return list;
}
function redact(line, match) {
  if (!match) return line.slice(0, 180);
  return line.replace(match, "[REDACTED CANDIDATE SECRET]").slice(0, 180);
}
if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
  console.error("Target must be an existing directory.");
  process.exit(2);
}
const findings = [];
const scanned = walk(root);
for (const file of scanned) {
  let content;
  try { content = fs.readFileSync(file, "utf8"); } catch { continue; }
  if (content.includes("\u0000")) continue;
  const lines = content.split(/\r?\n/);
  lines.forEach((line, idx) => {
    for (const rule of rules) {
      // The scanner necessarily contains the sink names it searches for; avoid self-matching this signature.
      if (file.endsWith(path.join("scripts", "audit-repo.mjs")) && rule.id === "SEC-WEB-001") continue;
      rule.re.lastIndex = 0;
      const match = rule.re.exec(line);
      if (match) {
        findings.push({
          id: rule.id, severity: rule.severity, title: rule.label,
          path: path.relative(root, file).split(path.sep).join("/"),
          line: idx + 1,
          evidence: rule.redact ? redact(line, match[0]) : line.trim().slice(0,180),
          status: "Needs validation",
          note: "Heuristic match only; manually validate context. This tool does not prove exploitability."
        });
      }
    }
  });
}
const result = {
  target: root,
  scannedFileCount: scanned.length,
  fileLimitReached: scanned.length >= MAX_FILES,
  findingsCount: findings.length,
  limitations: ["Local heuristic scan only","Does not inspect Git history","Does not query vulnerability databases","Does not run code or contact network targets","False positives and false negatives are expected"],
  findings
};
let rendered;
if (format === "json") rendered = JSON.stringify(result, null, 2);
else if (format === "markdown") {
  rendered = `# Local repository audit\n\n- Target: \`${root}\`\n- Files scanned: ${scanned.length}\n- Findings: ${findings.length}\n\n> Heuristic only; not a security certification.\n\n`;
  rendered += findings.length ? findings.map((f,i)=>`## ${i+1}. ${f.title}\n- ID: ${f.id}\n- Severity: ${f.severity}\n- Status: ${f.status}\n- File: \`${f.path}:${f.line}\`\n- Evidence: \`${f.evidence.replace(/`/g,"'")}\`\n- Note: ${f.note}\n`).join("\n") : "No heuristic matches found. This does not prove the repository is secure.\n";
} else {
  rendered = `Target: ${root}\nFiles scanned: ${scanned.length}\nFindings: ${findings.length}\n`;
  for (const f of findings) rendered += `\n[${f.severity}] ${f.id} ${f.title}\n  ${f.path}:${f.line}\n  ${f.evidence}\n`;
  rendered += "\nHeuristic only. Review false positives and use dedicated tools.\n";
}
if (out) {
  const outPath = path.resolve(out);
  fs.writeFileSync(outPath, rendered, {mode:0o600});
  console.log(`Report written to ${outPath}`);
} else console.log(rendered);
