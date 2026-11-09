# Threat modeling and security architecture review

## Lightweight threat model workflow
1. Define system purpose, deployment context, scope, and exclusions.
2. Inventory assets: accounts, personal data, credentials, payment state, source code, models, prompts, tools, backups, and availability.
3. Identify actors: anonymous users, authenticated users, administrators, tenants, operators, vendors, automated agents, and attackers.
4. Draw trust boundaries and data flows: browser, API, database, storage, queue, payment provider, AI provider, CI/CD, cloud control plane.
5. Enumerate entry points and privileged operations.
6. Identify threats using STRIDE or another documented method where suitable.
7. Evaluate likelihood, impact, exploitability, exposure, and existing controls.
8. Select mitigations and verification evidence.
9. Record assumptions, accepted risks, owners, and review triggers.

## AI-specific trust boundaries
Include model providers, retrieval/indexing systems, external documents, tool servers, skills/plugins, agent memory, human approvals, and downstream execution systems.

## Review questions
- Can an unauthenticated user reach a privileged operation?
- Can one tenant read or alter another tenant's data?
- Can a client manipulate prices, roles, ownership, or payment status?
- Can untrusted input reach SQL, shell, templates, file paths, or outbound HTTP?
- Can a retrieved document cause an agent to invoke tools or disclose secrets?
- Can a compromised dependency or CI workflow alter a release?
- Can a backup, log, source map, or debug endpoint expose sensitive data?
- What happens if a provider, queue, webhook, or model is unavailable or compromised?

## Deliverable
Create a diagram or structured data-flow description, threat register, prioritized mitigations, and verification plan. Revisit after material changes.
