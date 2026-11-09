# Web, API, and database security

## Validation and injection
- Validate on the server using explicit schemas, allowlists, type/length/range constraints, and business rules.
- Use parameterized database queries. Never concatenate untrusted data into SQL.
- Encode output for the exact context: HTML text, attributes, JavaScript, CSS, and URLs have different rules.
- Prefer safe DOM APIs and framework auto-escaping; avoid unsafe HTML injection APIs unless content is rigorously sanitized for the exact use.
- Review NoSQL, LDAP, XML/XXE, template, OS command, and header injection where relevant.
- Do not rely on input filtering as the primary XSS or SQLi defense.

## CSRF, CORS, CSP, and headers
- For cookie-authenticated state-changing requests, use a suitable CSRF defense and validate origin where appropriate.
- CORS is a browser sharing policy, not authentication. Allow only intended origins, methods, and headers; never use wildcard origins with credentials.
- Build CSP from actual application needs. Start restrictive, use nonces/hashes where supported, avoid unsafe-inline/unsafe-eval unless justified, and test in report-only mode before enforcement where appropriate.
- Set headers appropriate to the app: HSTS, frame-ancestors, nosniff, Referrer-Policy, and a carefully selected Permissions-Policy.
- Do not blindly copy header snippets without checking framework, CDN, proxy, and deployment behavior.

## API design
- Authenticate and authorize every protected operation.
- Prevent object-level and function-level authorization flaws.
- Limit response fields, pagination, request size, concurrency, and expensive operations.
- Apply route-specific rate limits and abuse controls.
- Validate content types and schemas.
- Avoid leaking stack traces, internal IDs, tokens, or sensitive fields.
- Verify external API responses before trusting them.

## Database
- Use least-privileged roles and separate runtime, migration, and administrative credentials.
- Enable RLS where supported; test policies as real user roles, not only as an owner/service role.
- Keep privileged keys off clients.
- Review stored procedures, views, functions, triggers, search paths, grants, and migration scripts.
- Use encryption and managed key lifecycle for sensitive data.
- Keep API responses minimal.

## References
- OWASP SQL Injection Prevention: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
- OWASP XSS Prevention: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- OWASP CSRF Prevention: https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
- OWASP CSP: https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
- OWASP REST Security: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
- OWASP Database Security: https://cheatsheetseries.owasp.org/cheatsheets/Database_Security_Cheat_Sheet.html
