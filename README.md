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

## Installation

Install `secure-vibe-coding` into your AI agent's skills directory. Keep the folder name as `secure-vibe-coding` to match the skill metadata.

### Option 1: Project-Level Installation (Recommended for Teams)

Install directly into your repository so anyone collaborating with an AI agent inherits the security skill:

```bash
# For Claude Code
mkdir -p .claude/skills
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git .claude/skills/secure-vibe-coding

# For Google Antigravity / Gemini CLI
mkdir -p .gemini/skills
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git .gemini/skills/secure-vibe-coding

# For Cursor / Codex / Custom Agents
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git .skills/secure-vibe-coding
```

*(Windows PowerShell)*:
```powershell
# Claude Code
New-Item -ItemType Directory -Force -Path ".claude\skills"
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git .claude\skills\secure-vibe-coding

# Google Antigravity / Gemini CLI
New-Item -ItemType Directory -Force -Path ".gemini\skills"
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git .gemini\skills\secure-vibe-coding
```

---

### Option 2: Global Installation (Available Across All Projects)

Install globally in your user home directory so the skill is available in every project you work on:

#### macOS / Linux
```bash
# Claude Code (global)
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git ~/.claude/skills/secure-vibe-coding

# Google Antigravity (global)
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git ~/.gemini/antigravity/skills/secure-vibe-coding
```

#### Windows (PowerShell)
```powershell
# Claude Code (global)
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git "$HOME\.claude\skills\secure-vibe-coding"

# Google Antigravity (global)
git clone https://github.com/yashbavale1578-png/secure-vibe-coding.git "$HOME\.gemini\antigravity\skills\secure-vibe-coding"
```

---

## Ready-to-Use Prompts

Copy and paste these prompts directly into your AI agent chat:

### 🛡️ 1. Full Security Audit (Safe & Read-Only)
> *"Use `secure-vibe-coding` in `AUDIT` mode on this repository. Perform a complete passive security review across authentication, authorization, data validation, and secrets. Do not modify any files, and output a prioritized findings report."*

### 🚀 2. Pre-Launch Readiness & Attack Surface Review
> *"We are preparing to launch to production. Activate `secure-vibe-coding` in `AUDIT` mode to review our public attack surface, CORS, CSP headers, rate-limiting, and error-handling leakage. Give me a launch readiness scorecard."*

### 🔐 3. Authentication, RBAC & Database Security (e.g. Supabase / Postgres / Firebase)
> *"Use `secure-vibe-coding` to audit our database access layer, Row Level Security (RLS) policies, session management, and server-side authorization checks. Flag any multi-tenant leaks or missing tenant filters."*

### 🤖 4. AI / LLM Integration & Prompt Injection Defense
> *"Use `secure-vibe-coding` to threat-model our LLM integrations and agent tool definitions. Check for prompt injection vectors, untrusted input feeding into system prompts, model data leakage, and excessive tool permissions."*

### 💳 5. Payments, Webhooks & Idempotency Audit (e.g. Stripe / Razorpay)
> *"Audit our payment and webhook implementation with `secure-vibe-coding`. Specifically verify webhook signature validation, idempotency key handling, replay protection, and race conditions in fulfillment."*

### 📦 6. Secret Leakage & Supply-Chain Scan
> *"Run `secure-vibe-coding` local audit utilities on this codebase to inspect dependencies, detect exposed API keys or tokens, and verify that all production secrets are loaded securely from environment variables."*

### 🛠️ 7. Targeted Fix Mode (Remediation)
> *"Use `secure-vibe-coding` in `FIX` mode to remediate finding `SEC-002` (missing CSRF validation on API routes). Present the implementation plan and diff for approval before making file changes."*

### ✅ 8. Verification & Retesting
> *"Use `secure-vibe-coding` in `VERIFY` mode to test and confirm the security patches applied for `SEC-002`. Verify that the attack vector is closed and no functional regressions were introduced."*

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
