# Tooling and script limitations

## Requirements
- Node.js 18 or later.
- No third-party package is required for the bundled scripts.

## Commands
```bash
node scripts/audit-repo.mjs .
node scripts/audit-repo.mjs . --format json --out audit.json
node scripts/audit-repo.mjs . --format markdown --out audit.md
node scripts/check-skill.mjs .
node scripts/check-markdown-links.mjs .
```

## What the repository audit does
- Reads files in the selected local repository (bounded file size and known binary exclusions).
- Uses heuristic patterns to identify possible secrets and risky configuration/code patterns.
- Redacts matched candidate values.
- Reports file path, line number, rule ID, and severity.
- Does not transmit repository data over the network.

## What it does not do
- Does not inspect all Git history.
- Does not verify whether a candidate credential is live.
- Does not query vulnerability databases.
- Does not perform full language-aware static analysis.
- Does not run dynamic tests, exploit vulnerabilities, or test remote systems.
- Does not prove compliance or security.
- Does not parse every framework or infrastructure format.

Use dedicated tools such as Gitleaks, TruffleHog, Semgrep, CodeQL, OSV-Scanner, Trivy, Checkov, Hadolint, and ecosystem-native audit tools where appropriate. Review official documentation, permissions, versions, and output before running them.
