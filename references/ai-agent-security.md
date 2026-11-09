# AI, LLM, and agent security

AI-assisted development introduces risks beyond ordinary web application security. Review the model, prompt/context pipeline, retrieval sources, tools, skill/plugin packages, agent runtime, and human approval boundaries.

## Prompt injection and untrusted content
- Treat user prompts, retrieved pages, repository files, comments, tickets, PDFs, tool output, and third-party skill instructions as untrusted data.
- Do not let content retrieved from the web or repository change the agent's governing instructions or authorize a tool action.
- Separate instructions from data; label provenance and trust level.
- Use structured extraction and constrained tool schemas instead of asking a model to infer arbitrary commands from untrusted text.
- Do not assume a prompt-only defense is sufficient. Enforce authorization and policy in application code and tool gateways.

## Tool and agent permissions
- Apply least privilege to shell, filesystem, browser, network, cloud, database, and messaging tools.
- Scope tools to a project directory and allowlisted destinations where possible.
- Use sandboxing, process isolation, resource limits, timeouts, and network egress controls.
- Require human approval for deletion, credential access/rotation, deployment, production writes, payments, external messages, and privilege changes.
- Log tool identity, arguments (redacted), approvals, results, and policy decisions.
- Validate tool arguments with strict schemas and reject unexpected fields.
- Never pass model-generated shell fragments into a shell without safe argument handling and validation.

## Data leakage and model providers
- Inventory prompts, context, retrieval stores, logs, traces, telemetry, and provider-side retention.
- Review provider terms and settings for training, abuse monitoring, retention, data residency, and deletion.
- Do not assume API usage means no retention or no training.
- Minimize sensitive data sent to models; redact secrets and personal data where feasible.
- Protect embeddings/vector stores with tenant isolation and access control.
- Avoid logging full prompts/responses when they contain secrets or sensitive data.

## Output validation
- Treat model output as untrusted.
- Validate generated SQL, shell, code, HTML, URLs, JSON, and financial decisions before use.
- Use prepared statements, safe APIs, escaping, schemas, policy checks, and human review.
- Do not allow model output to directly determine access control, payment amount, or privileged identity.

## Skills and plugins as supply-chain components
- Inspect skill source, metadata, scripts, permissions, network behavior, dependencies, and provenance before installation.
- Review update mechanisms and pin versions/hashes when practical.
- Watch for hidden instructions, data exfiltration, obfuscated scripts, broad filesystem access, and credential collection.
- Keep secrets out of skill files and example fixtures.
- Validate Agent Skills metadata and keep instructions concise with progressive disclosure.

## Evaluation
- Test direct and indirect prompt injection, tool misuse, data exfiltration, unauthorized file access, cross-tenant retrieval, unsafe output execution, and refusal/approval boundaries.
- Use synthetic data and isolated environments.
- Record test coverage and limitations; do not claim prompt injection is solved.

## References
- NIST AI RMF: https://www.nist.gov/itl/ai-risk-management-framework
- NIST AI 600-1: https://doi.org/10.6028/NIST.AI.600-1
- OWASP Top 10 for Agentic Applications 2026: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
- OWASP Agentic Skills Top 10: https://owasp.org/projects/agentic-skills-top-10
- OWASP GenAI Security Project: https://genai.owasp.org/
- Agent Skills specification: https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx
