#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(process.argv[2] || ".");
const skip = new Set([".git","node_modules"]);
const md = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir,{withFileTypes:true})) {
    if (ent.isDirectory()) { if (!skip.has(ent.name)) walk(path.join(dir,ent.name)); }
    else if (ent.isFile() && ent.name.toLowerCase().endsWith(".md")) md.push(path.join(dir,ent.name));
  }
}
walk(root);
const issues = [];
for (const file of md) {
  const body = fs.readFileSync(file,"utf8");
  const re = /\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(body))) {
    const raw = m[1].trim().replace(/^<|>$/g,"");
    if (!raw || /^(https?:|mailto:|tel:|#)/i.test(raw)) continue;
    const clean = raw.split("#")[0].split("?")[0];
    if (!clean) continue;
    const dest = path.resolve(path.dirname(file), clean);
    if (!fs.existsSync(dest)) issues.push(`${path.relative(root,file)}: missing ${raw}`);
  }
}
if (issues.length) {
  console.error("Broken local Markdown links:\n- " + issues.join("\n- "));
  process.exit(1);
}
console.log(`Checked ${md.length} Markdown files. No broken local Markdown links found. External URLs were not checked.`);
