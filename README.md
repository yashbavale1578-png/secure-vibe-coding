# Secure Vibe Coding

A security-first Agent Skill for AI-assisted development and conventional software engineering. It helps an agent inspect, harden, test, and prepare web applications, APIs, SaaS products, infrastructure, and AI integrations for release.

This is **not** a generic coding assistant and it is **not** an automated penetration-testing framework. It combines secure engineering guidance, practical review workflows, a broad launch checklist, and small local repository-audit utilities.

## Author and credits

**Created and maintained by [Yash Arun Bavale](https://github.com/yashbavale1578-png).**

GitHub: [@yashbavale1578-png](https://github.com/yashbavale1578-png)

This project consolidates the security, privacy, accessibility, compliance, and website-quality requirements provided by its creator, with additional defensive engineering guidance and references to the standards listed in `references/standards-and-mappings.md`.

## What it covers

- Secrets, authentication, sessions, authorization, database access, input validation, XSS, SQL injection, CSRF, CORS, CSP, HTTPS, cookies, uploads, SSRF, path traversal, redirects, clickjacking, DNS rebinding considerations.
- API security, rate limiting, abuse prevention, payment integrity, webhook signatures, replay/idempotency, race conditions, business logic.
- Dependency and supply-chain security, SBOM, CI/CD, containers, infrastructure, backups, logging, incident response.
- AI/LLM/agent security: prompt injection, tool permissions, untrusted retrieved content, data leakage, model-provider retention/training, skill/plugin supply chain.
- Privacy, data rights, consent, legal-readiness questions, accessibility, ethical design, website quality, SEO metadata, and launch readiness.
- Four modes: `AUDIT`, `FIX`, `VERIFY`, and `FULL`.

## Quick start

1. Extract the ZIP.
2. Install the skill folder into a supported Agent Skills location for your agent.
3. Ask your agent to use `secure-vibe-coding` in `AUDIT` mode first.
4. Review the scope and findings.
5. Approve specific changes before using `FIX` or `FULL`.

Example prompts:

- "Use secure-vibe-coding in AUDIT mode on this repository. Do not modify files."
- "Threat-model the authentication, payment, and AI tool flows."
- "Review the Supabase RLS policies and verify server-side authorization."
- "Use FIX mode to remediate finding SEC-004 only. Show the plan first."
- "Use VERIFY mode to retest the fixes from the last report."

## Install

The Agent Skills format is designed to be portable, but host discovery and installation paths vary. Follow the current installation instructions for your agent.

Common approaches:
- **Claude Code:** place the skill directory in the project's `.claude/skills/` directory or the user-level skills directory supported by your installed version.
- **Codex:** place the skill in the skills directory supported by your Codex environment; check the current Codex documentation for discovery paths.
- **Gemini CLI / Antigravity / Cursor / other clients:** use the host's current Agent Skills support and configured skill directory. Do not assume every client supports every optional feature identically.

Keep the directory name `secure-vibe-coding` to match the `name` field in `SKILL.md`.

## Repository layout

```text
secure-vibe-coding/
├── SKILL.md
├── README.md
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── references/       # Detailed domain guidance and full checklist
├── scripts/          # Safe local Node.js utilities
├── evals/            # Scenario-based skill evaluation cases
├── assets/           # Report template and structured schemas
└── docs/             # Installation, modes, tooling, framework adaptation
```

## Local utilities

Requires Node.js 18+; no third-party packages are required.

```bash
node scripts/audit-repo.mjs .
node scripts/check-skill.mjs .
node scripts/check-markdown-links.mjs .
```

The repository audit is a lightweight heuristic scanner. It can flag suspicious patterns, but it is not a secrets-management product, SAST engine, dependency vulnerability database, DAST tool, penetration test, or compliance assessment. It redacts candidate secret values and writes reports only when explicitly requested.

```bash
node scripts/audit-repo.mjs . --format json --out audit.json
node scripts/audit-repo.mjs . --format markdown --out audit.md
```

Do not run scanners against repositories or systems you are not authorized to inspect. Review false positives and validate findings manually.

## Standards and references

The skill maps its guidance to authoritative resources including OWASP ASVS 5.0.0, OWASP Top 10:2025, OWASP API Security Top 10, OWASP Cheat Sheet Series, NIST SSDF, NIST AI RMF and GenAI Profile, OWASP Top 10 for Agentic Applications 2026, OWASP Agentic Skills Top 10, MITRE CWE, W3C WCAG 2.2, and PCI DSS 4.0.1 where applicable. See [`references/standards-and-mappings.md`](references/standards-and-mappings.md).

Standards evolve. Verify the current edition and official requirements before using a mapping for a formal assessment.

## Important limitations

- The skill does not certify applications or guarantee absence of vulnerabilities.
- A static repository scan cannot establish runtime security.
- Legal and regulatory requirements depend on jurisdiction and facts; qualified counsel must review legal conclusions and policy text.
- PCI DSS scope and obligations must be determined with the appropriate payment stakeholders or qualified assessor.
- Accessibility checks require both automated and manual evaluation.
- Active testing requires explicit authorization and a defined scope.
- No production change, destructive action, credential rotation, payment action, deployment, or external notification is permitted without explicit approval.

## License

Original project content is released under the MIT License. Referenced standards and linked resources remain subject to their respective owners' licenses and terms. This repository links to sources and summarizes concepts; it does not redistribute full standards.
