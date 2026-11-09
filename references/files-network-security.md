# File, network, and browser security

## File uploads and downloads
- Validate allowlisted file types and inspect file signatures/content; client MIME types and extensions are untrusted.
- Apply strict size, count, and decompression limits. Consider archive bombs and parser vulnerabilities.
- Generate server-side filenames. Normalize paths and prevent traversal.
- Store outside executable web roots or in private object storage. Use signed, short-lived download URLs only when appropriate.
- Authorize upload, read, update, preview, and delete independently.
- Serve untrusted content with safe content types and Content-Disposition; prevent inline execution where possible.
- Consider malware scanning and quarantine for user-provided documents.

## SSRF
- Avoid arbitrary server-side URL fetching. Prefer allowlisted destinations and protocols.
- Resolve and validate IP addresses, including IPv4/IPv6 and redirects; block loopback, link-local, private, metadata, and internal ranges unless explicitly required.
- Re-check every redirect and DNS resolution to reduce rebinding and redirect bypasses.
- Enforce egress network controls outside application code.
- Apply timeouts, response-size limits, and content-type restrictions.
- Do not fetch user-supplied URLs from privileged network contexts without a clear design.

## Redirects and DNS rebinding
- Use relative destinations or allowlisted hostnames for redirects.
- Do not accept arbitrary redirect URLs.
- Validate Host headers and trusted proxy configuration.
- Bind development services to loopback by default; do not expose local admin/debug services publicly.
- Use network segmentation and egress filtering. DNS rebinding defenses depend on application and infrastructure context.

## TLS and headers
- Enforce HTTPS, configure certificates and renewal, and use HSTS only when the domain/subdomain rollout is understood.
- Set security headers through the correct application/proxy/CDN layer and verify the effective response.
- Use secure cookies and avoid mixed content.

## References
- OWASP File Upload: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
- OWASP SSRF: https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html
- OWASP Path Traversal: https://owasp.org/www-community/attacks/Path_Traversal
- OWASP Unvalidated Redirects: https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html
- OWASP TLS: https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html
