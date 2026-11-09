# Standards, frameworks, and source map

This skill uses standards as reference points, not as a claim of certification. Pin the edition used in each assessment and check the official source for updates.

## Primary application security references

| Source | Use in this skill | Official resource |
|---|---|---|
| OWASP ASVS 5.0.0 | Verifiable application and service security requirements; architecture, auth, sessions, access control, validation, crypto, logging, data protection, communications, files, APIs, configuration | https://asvs.owasp.org/ |
| OWASP Top 10:2025 | Awareness taxonomy for major web application risks | https://top10.owasp.org/2025/ |
| OWASP API Security Top 10 | API-specific risks such as object-level authorization, authentication, resource consumption, and unsafe API consumption | https://api-security.owasp.org/ |
| OWASP Cheat Sheet Series | Practical implementation guidance for secrets, password storage, sessions, authorization, SQLi, XSS, CSRF, CSP, uploads, SSRF, TLS, logging, and more | https://cheatsheetseries.owasp.org/ |
| OWASP Developer Guide | Secure development and verification lifecycle | https://devguide.owasp.org/ |
| MITRE CWE | Weakness taxonomy and root-cause classification | https://cwe.mitre.org/ |

### OWASP Top 10:2025 categories

Use the 2025 edition as the current awareness taxonomy at the time this package was prepared:
1. A01 Broken Access Control
2. A02 Security Misconfiguration
3. A03 Software Supply Chain Failures
4. A04 Cryptographic Failures
5. A05 Injection
6. A06 Insecure Design
7. A07 Authentication Failures
8. A08 Software or Data Integrity Failures
9. A09 Security Logging and Alerting Failures
10. A10 Mishandling of Exceptional Conditions

The Top 10 is an awareness document, not a complete verification standard. Use ASVS and application-specific threat modeling for deeper assessment.

## Secure software development and AI

| Source | Use | Official resource |
|---|---|---|
| NIST SP 800-218 SSDF 1.1 | Secure development lifecycle practices: prepare, protect, produce, respond | https://csrc.nist.gov/pubs/sp/800/218/final |
| NIST SP 800-218 Rev. 1 / SSDF 1.2 | At preparation time this was an initial public draft; do not treat it as final | https://csrc.nist.gov/pubs/sp/800/218/r1/ipd |
| NIST AI RMF | AI risk governance, mapping, measurement, and management | https://www.nist.gov/itl/ai-risk-management-framework |
| NIST AI 600-1 GenAI Profile | Generative AI-specific risk considerations | https://doi.org/10.6028/NIST.AI.600-1 |
| OWASP Top 10 for Agentic Applications 2026 | Risks in autonomous agents and agentic workflows | https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ |
| OWASP Agentic Skills Top 10 | Risks in AI agent skills and their execution layer | https://owasp.org/projects/agentic-skills-top-10 |
| Agent Skills specification | Portable `SKILL.md` format, metadata, directory layout, progressive disclosure | https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx |

NIST SP 800-218 Rev. 1 was listed as an initial public draft at the time of preparation. Do not cite a draft as a final requirement. Confirm its status before relying on it.

## Accessibility, payments, and licensing

| Source | Use | Official resource |
|---|---|---|
| W3C WCAG 2.2 | Accessibility criteria for web content; use a suitable conformance target and manual testing | https://www.w3.org/TR/WCAG22/ |
| PCI Security Standards Council | Payment-card data security; scope and obligations depend on payment architecture | https://www.pcisecuritystandards.org/document_library/ |
| Agent Skills specification | Skill packaging and metadata | https://agentskills.io/specification |

## Mapping guide

- Authentication, session cookies, MFA, password reset: ASVS authentication/session chapters; OWASP Password Storage, Authentication, Session Management cheat sheets.
- Authorization, RLS, record ownership, field tampering: ASVS access control; OWASP API Security Top 10; Authorization and IDOR cheat sheets.
- XSS, SQL injection, validation, output encoding: ASVS validation/encoding; OWASP Injection and XSS cheat sheets; CWE.
- Secrets, crypto, TLS, cookies, CSP, CORS, CSRF: ASVS cryptography, communications, configuration; OWASP Cheat Sheet Series.
- Uploads, SSRF, path traversal, redirects: ASVS files/resources and API; OWASP File Upload, SSRF, Path Traversal, Unvalidated Redirects cheat sheets.
- Dependencies, SBOM, CI/CD, containers, provenance: NIST SSDF; OWASP Top 10:2025 software supply chain failures; relevant ecosystem/vendor security guidance.
- Logging, alerting, incident response: ASVS logging/error handling; NIST SSDF Respond to Vulnerabilities; OWASP Logging cheat sheet.
- AI data governance, prompt injection, tool misuse, skill supply chain: NIST AI RMF and GenAI Profile; OWASP Agentic Applications and Agentic Skills Top 10.
- Accessibility: WCAG 2.2 plus manual assistive-technology testing.
- Payment processing: PCI SSC material and the selected payment provider's current integration/security documentation.
- Legal/privacy/consent: applicable primary legislation, regulator guidance, contracts, and qualified counsel for the relevant jurisdictions.

## Referencing requirements in reports

- Record standard name, version, URL, and access date.
- Use stable versioned identifiers where possible (for example, ASVS v5.0.0 requirement IDs).
- Do not invent requirement IDs or imply a control is mandated by a standard unless verified.
- Distinguish normative requirements, guidance, and recommendations.
- A mapping is a navigation aid, not proof of conformance.
