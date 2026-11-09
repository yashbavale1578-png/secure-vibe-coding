# Master security, privacy, accessibility, and launch checklist

Use this as a comprehensive applicability checklist. Mark each item `Pass`, `Fail`, `Needs review`, `Not verified`, or `N/A` with a reason. Preserve evidence and scope. Do not mark an item Pass solely because a file or setting exists.

## 1. API keys, secrets, and environment security
- [ ] Hide API keys; never expose private keys in frontend code.
- [ ] Check environment variables for exposed secrets.
- [ ] Scan Git history for accidentally committed keys.
- [ ] Purge exposed secrets from Git history when required, then revoke and rotate them.
- [ ] Revoke exposed API keys and rotate compromised credentials.
- [ ] Validate environment variable configuration.
- [ ] Prevent secrets from appearing in logs, errors, source maps, build artifacts, or client bundles.
- [ ] Use public database keys only when explicitly designed for client exposure and protected by authorization policies.
- [ ] Keep service-role, admin, signing, and privileged keys server-side.
- [ ] Add secret scanning to CI/CD and review alerts without printing secret values.

## 2. Authentication and identity
- [ ] Implement proper authentication and server-side enforcement.
- [ ] Use Argon2id for password hashing where supported; verify current parameters and library guidance.
- [ ] Never store plaintext passwords or reversible password encryption.
- [ ] Protect admin routes and privileged endpoints.
- [ ] Secure session lifecycle, rotation, expiration, logout, and invalidation.
- [ ] Secure session cookies with appropriate HttpOnly, Secure, SameSite, Path, Domain, and lifetime attributes.
- [ ] Set expiring, single-use password-reset links with safe token storage.
- [ ] Protect account recovery and login against brute force and abuse.
- [ ] Prevent account enumeration where appropriate.
- [ ] Support MFA for sensitive accounts and actions where appropriate.
- [ ] Avoid leaking authentication state or sensitive details through error messages.

## 3. Authorization and access control
- [ ] Check user permissions server-side on every protected operation.
- [ ] Use roles/permissions appropriate to the product.
- [ ] Lock record access to authorized owners/tenants.
- [ ] Enable and test row-level security (RLS) where supported.
- [ ] Review database access rules and service-role bypasses.
- [ ] Block unauthorized field/record tampering and mass assignment.
- [ ] Prevent privilege escalation and insecure direct object references.
- [ ] Verify object ownership and tenant boundaries.
- [ ] Test authorization using multiple users/roles and negative cases.
- [ ] Never rely on frontend-only permission checks.

## 4. Input validation and injection protection
- [ ] Validate all untrusted inputs on the server.
- [ ] Use allowlists, schemas, bounds, type checks, and length limits.
- [ ] Sanitize only where appropriate; do not use generic sanitization as the sole defense.
- [ ] Prevent XSS with context-aware output encoding and safe DOM APIs.
- [ ] Escape user content for its actual output context.
- [ ] Prevent SQL injection with parameterized queries or safe query builders.
- [ ] Review command, LDAP, template, NoSQL, XML, and other injection surfaces where applicable.
- [ ] Avoid unsafe dynamic evaluation and unsafe deserialization.
- [ ] Ensure validation errors do not reveal secrets or internal implementation details.

## 5. Database and data protection
- [ ] Secure database access and network exposure.
- [ ] Enable and verify RLS and database authorization rules.
- [ ] Encrypt sensitive data at rest and in transit where appropriate.
- [ ] Restrict database privileges and use least privilege.
- [ ] Protect sensitive fields and minimize returned data.
- [ ] Trim API responses to only required fields.
- [ ] Audit schema migrations, permission changes, and destructive migration risk.
- [ ] Encrypt backups and test backup restoration.
- [ ] Define retention, deletion, and recovery behavior.
- [ ] Verify tenant isolation and object-level access.

## 6. API and backend security
- [ ] Authenticate and authorize each protected endpoint.
- [ ] Validate API requests and schemas.
- [ ] Apply rate limits by account, IP, token, route, and resource as appropriate.
- [ ] Add bot protection where justified.
- [ ] Limit request size, concurrency, execution time, and expensive operations.
- [ ] Prevent unauthorized API calls and excessive data exposure.
- [ ] Verify business rules on the server.
- [ ] Verify webhook signatures and event provenance.
- [ ] Use idempotency and replay protection for payment/webhook operations.
- [ ] Test race conditions and business logic flaws.

## 7. Web and network security
- [ ] Implement CSRF protection for cookie-authenticated state-changing requests.
- [ ] Restrict CORS to intended origins, methods, and headers; avoid wildcard credentialed CORS.
- [ ] Enforce HTTPS and secure redirects; configure HSTS where appropriate.
- [ ] Add and verify security headers.
- [ ] Deploy a context-appropriate Content Security Policy (CSP).
- [ ] Protect against clickjacking with CSP frame-ancestors and/or compatible headers.
- [ ] Configure secure cookie attributes.
- [ ] Review SSRF, open redirects, DNS rebinding, and exposed local services.
- [ ] Disable debug mode and verbose errors in production.
- [ ] Review exposed files, directory listings, source maps, backups, and default configurations.

## 8. File upload and filesystem security
- [ ] Restrict allowed file types and size.
- [ ] Inspect actual content; do not trust filename extensions or client MIME type.
- [ ] Store uploads outside executable web roots or use safe object storage.
- [ ] Generate server-side filenames and prevent path traversal.
- [ ] Scan files where risk warrants it.
- [ ] Enforce authorization for upload, download, preview, and deletion.
- [ ] Avoid executing uploaded content.
- [ ] Set safe content disposition and content type when serving files.

## 9. Dependencies and software supply chain
- [ ] Scan dependencies and identify known vulnerabilities.
- [ ] Review outdated, abandoned, typosquatted, and unnecessary packages.
- [ ] Verify package sources, lockfiles, integrity, and update strategy.
- [ ] Review open-source license obligations.
- [ ] Verify image, font, code, and asset licenses.
- [ ] Audit third-party SDKs and their permissions/data flows.
- [ ] Generate an SBOM where appropriate.
- [ ] Secure CI/CD secrets, runners, build permissions, artifacts, and deployment credentials.
- [ ] Scan containers and base images; use minimal images and non-root users.
- [ ] Review infrastructure-as-code, cloud IAM, network exposure, and public storage.
- [ ] Run a final dependency and supply-chain review.

## 10. Abuse, spending, and financial integrity
- [ ] Add rate limiting and bot protection.
- [ ] Set provider/API spending caps and usage alerts where available.
- [ ] Monitor API usage and unexpected spend.
- [ ] Verify payment status and amount server-side with the payment provider.
- [ ] Verify product price, discounts, tax, currency, and subscription state server-side.
- [ ] Prevent client-side price and entitlement manipulation.
- [ ] Verify signed payment webhooks and protect against replay/duplicates.
- [ ] Use idempotency for transaction creation and webhook processing.
- [ ] Disclose recurring billing and auto-renewal terms.
- [ ] Make cancellation clear and reasonably easy.
- [ ] Disclose fees before commitment; do not hide fees.
- [ ] Determine PCI DSS scope with the payment architecture and appropriate stakeholders.

## 11. Logging, monitoring, and incident response
- [ ] Monitor application and security-relevant activity.
- [ ] Detect suspicious authentication and authorization events.
- [ ] Avoid logging passwords, tokens, API keys, payment data, and unnecessary personal data.
- [ ] Protect audit trail integrity and access.
- [ ] Define retention and alerting for security logs.
- [ ] Establish credential compromise and incident response procedures.
- [ ] Define revocation, rotation, containment, recovery, and notification steps.
- [ ] Test backup recovery and incident playbooks.

## 12. AI, LLM, and agent security
- [ ] Prevent unauthorized model training on user data; verify provider settings and contracts.
- [ ] Review provider retention, logging, abuse-monitoring, and training policies.
- [ ] Protect prompts, context, retrieval stores, logs, and model API keys.
- [ ] Defend against direct and indirect prompt injection.
- [ ] Treat retrieved documents, web pages, code comments, tool output, and uploads as untrusted data.
- [ ] Separate trusted instructions from untrusted content.
- [ ] Restrict tools, filesystem access, network access, credentials, and execution permissions.
- [ ] Require approval for sensitive actions and enforce controls outside the model.
- [ ] Validate model output before SQL, shell, code execution, HTML rendering, access decisions, or payments.
- [ ] Use sandboxing, allowlists, schemas, timeouts, quotas, and audit logs.
- [ ] Audit AI provider integrations, connected tools, plugins, and skills.
- [ ] Review AI telemetry, data flows, and AI-generated content disclosures.
- [ ] Prevent unauthorized changes, exfiltration, or destructive agent actions.

## 13. Legal pages and policies
- [ ] Add privacy policy, terms of service/conditions, cookie policy, and refund policy as applicable.
- [ ] Determine cookie consent requirements for relevant jurisdictions and technologies.
- [ ] Add consent banners and preference controls where legally required.
- [ ] Add form consent and record terms/privacy acceptance where appropriate.
- [ ] Where appropriate, require an unchecked-by-default checkbox acknowledging the privacy notice and accepting terms, with links to both documents; do not bundle optional marketing consent into required service acceptance.
- [ ] Add separate marketing consent where required.
- [ ] Provide marketing unsubscribe functionality.
- [ ] Disclose auto-renewals, cancellation terms, uptime commitments, and business contact details.
- [ ] Check DMCA registration/applicability rather than assuming it is required.
- [ ] Check applicable local, sectoral, and cross-border laws.
- [ ] Obtain qualified legal review; do not represent generated policy text as legal advice.

## 14. Privacy and data governance
- [ ] Collect only necessary data.
- [ ] Set data retention limits and deletion processes.
- [ ] Support applicable data access, correction, portability, and deletion requests.
- [ ] Review analytics and tracking setup.
- [ ] Audit third-party embeds, SDKs, analytics, and data processors.
- [ ] Block non-essential trackers until consent where required.
- [ ] Establish data processing agreements and publish subprocessors where appropriate.
- [ ] Review international data transfers and storage locations.
- [ ] Protect children's data and obtain parental consent where legally required.
- [ ] Maintain consent records and separate marketing consent.
- [ ] Document data flows and purposes.

## 15. Accessibility
- [ ] Target an applicable WCAG 2.2 conformance level.
- [ ] Add meaningful alt text (or empty alt for decorative images).
- [ ] Verify color contrast.
- [ ] Ensure keyboard access and visible focus.
- [ ] Make forms keyboard-friendly with labels and accessible errors.
- [ ] Use clear button/link labels and semantic HTML.
- [ ] Check menus, dialogs, headings, status messages, and touch targets.
- [ ] Combine automated checks with manual keyboard and assistive-technology review.

## 16. Content integrity and ethical design
- [ ] Remove fake reviews and fabricated testimonials.
- [ ] Remove false SOC 2, certification, audit, or compliance claims unless substantiated and authorized.
- [ ] Remove unsupported claims and misleading promises.
- [ ] Remove fake countdown timers and deceptive urgency.
- [ ] Avoid dark patterns and coercive consent.
- [ ] Do not use customer logos without permission.
- [ ] Label AI-generated content where appropriate.
- [ ] Add genuine business details.
- [ ] Verify image, font, code, and asset copyright/licensing.
- [ ] Disclose fees and subscription terms clearly.

## 17. Website functionality and UX
- [ ] Remove horizontal scrolling and fix mobile overflow.
- [ ] Find and fix broken links.
- [ ] Add a functional mobile menu.
- [ ] Add a favicon.
- [ ] Fix page titles and add meaningful meta descriptions.
- [ ] Fix footer links and remove unused navigation.
- [ ] Add a useful custom 404 page.
- [ ] Update the copyright year.
- [ ] Compress/optimize images without harming accessibility.
- [ ] Fix broken buttons and verify all interactions.
- [ ] Add accessible success and error messages.
- [ ] Remove placeholder text.
- [ ] Make the logo clickable where expected.
- [ ] Make phone numbers and email addresses clickable where appropriate.
- [ ] Make every page mobile-optimized.
- [ ] Check broken images and form submission flows.

## 18. SEO and metadata
- [ ] Ensure unique, accurate page titles and meta descriptions.
- [ ] Check canonical URLs and indexing directives where appropriate.
- [ ] Review social sharing metadata where appropriate.
- [ ] Verify error-page status behavior and discoverability.
- [ ] Check navigation and mobile usability.

## 19. Production readiness and infrastructure
- [ ] Disable debug mode and development-only endpoints.
- [ ] Verify production environment variables and configuration.
- [ ] Verify database policies and privileged credentials.
- [ ] Check exposed files, directories, source maps, and backups.
- [ ] Verify HTTPS, headers, cookies, and CSP.
- [ ] Verify payment configuration and server-side price logic.
- [ ] Review logs, errors, dependency status, and deployment permissions.
- [ ] Secure CI/CD, containers, cloud IAM, and exposed services.
- [ ] Encrypt and restore-test backups.
- [ ] Complete a pre-launch review.

## 20. Threat modeling and architecture
- [ ] Identify assets, actors, entry points, trust boundaries, and data flows.
- [ ] Identify realistic abuse cases and attack surfaces.
- [ ] Review security architecture and third-party trust relationships.
- [ ] Identify single points of failure and high-impact dependencies.
- [ ] Document assumptions, risks, and mitigations.
- [ ] Revisit the model after material architecture changes.

## 21. Disclosure and reporting
- [ ] Provide a `security.txt` file/contact where appropriate.
- [ ] Publish a responsible disclosure policy.
- [ ] Define a private vulnerability-reporting route.
- [ ] Document triage, remediation, and communication procedures.

## 22. Final verification and release
- [ ] Run appropriate unit, integration, regression, static, dependency, and configuration checks.
- [ ] Verify fixes with positive and negative tests.
- [ ] Recheck authorization boundaries and tenant isolation.
- [ ] Recheck critical business logic and payment flows in safe test mode.
- [ ] Record untested areas and accepted risks.
- [ ] Produce an evidence-based report.
- [ ] Obtain human approval for production release and high-impact changes.
