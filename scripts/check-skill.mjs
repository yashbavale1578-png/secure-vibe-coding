#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(process.argv[2] || ".");
const skill = path.join(root, "SKILL.md");
const errors = [];
if (!fs.existsSync(skill)) errors.push("Missing SKILL.md");
else {
  const text = fs.readFileSync(skill, "utf8");
  const lines = text.split(/\r?\n/);
  if (lines[0] !== "---") errors.push("SKILL.md must start with YAML frontmatter.");
  const end = lines.indexOf("---", 1);
  if (end < 0) errors.push("Missing closing frontmatter delimiter.");
  else {
    const front = lines.slice(1,end).join("\n");
    const name = front.match(/^name:\s*([a-z0-9-]+)\s*$/m)?.[1];
    const desc = front.match(/^description:\s*(.+)$/m)?.[1];
    if (!name) errors.push("Missing or invalid lowercase name field.");
    if (name && name.length > 64) errors.push("Skill name exceeds 64 characters.");
    if (name && name !== path.basename(root)) errors.push(`Skill name '${name}' must match directory '${path.basename(root)}'.`);
    if (!desc) errors.push("Missing one-line description field.");
    if (desc && desc.length > 1024) errors.push("Description exceeds 1024 characters.");
  }
  if (lines.length > 500) errors.push("SKILL.md exceeds the recommended 500-line limit; move details into references.");
}
for (const rel of ["README.md","references/master-checklist.md","references/standards-and-mappings.md"]) {
  if (!fs.existsSync(path.join(root,rel))) errors.push(`Missing required file: ${rel}`);
}
if (errors.length) {
  console.error("Skill validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("Basic skill structure validation passed. Run the official skills-ref validator as an additional check when available.");
