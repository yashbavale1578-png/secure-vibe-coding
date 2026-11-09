# Security testing and verification

## Testing layers
- Static review: source, configuration, secrets, infrastructure-as-code, workflows, and dependency manifests.
- Unit tests: validation, authorization decisions, payment calculations, and security-sensitive helpers.
- Integration tests: identity provider, database policies, storage, webhooks, and third-party boundaries.
- Dynamic tests: only in local or explicitly authorized staging environments.
- Regression tests: preserve tests for each fixed vulnerability.
- Manual review: business logic, authorization, consent, accessibility, and agent behavior.

## Safe test discipline
- Obtain explicit scope and authorization before active testing.
- Use synthetic data and test credentials.
- Set request limits and stop conditions.
- Avoid denial-of-service, destructive payloads, persistence, credential harvesting, or testing outside scope.
- Do not run scanners against third-party infrastructure without written permission.
- Use payment provider sandbox mode; never send live transactions without approval.

## Verification record
For each check record:
- Tool/command and version
- Target and environment
- Time/date
- Scope and exclusions
- Actual output/result
- Evidence location
- False-positive review
- Limitations
- Reviewer and approval where relevant

## Status semantics
- `Pass`: checked and evidence supports the control.
- `Fail`: evidence confirms the control is absent or defective.
- `Needs review`: evidence is ambiguous or design-specific.
- `Not verified`: not tested or insufficient access.
- `N/A`: not applicable, with reason.
- `Accepted risk`: explicitly accepted by an authorized owner; not equivalent to Pass.

## Release recommendation
Do not release when unresolved findings create unacceptable risk under the project's risk policy. If checks were incomplete, say so explicitly. Never equate a clean scanner result with security assurance.
