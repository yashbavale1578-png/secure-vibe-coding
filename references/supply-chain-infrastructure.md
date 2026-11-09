# Supply chain, CI/CD, containers, and infrastructure

## Dependencies
- Review lockfiles, direct/transitive dependencies, advisories, maintainers, release cadence, provenance, and package source.
- Pin or constrain versions according to ecosystem guidance; keep lockfiles consistent.
- Prefer minimal dependencies and remove unused packages.
- Use trusted registries and integrity verification.
- Generate an SBOM (for example, CycloneDX or SPDX) when useful for the project.
- Review licenses and obligations; do not assume a dependency is permissively licensed.

## CI/CD
- Use least-privileged workflow tokens and short-lived credentials where supported.
- Pin third-party actions/plugins to immutable versions or commits where practical.
- Protect build workflows, release branches, artifacts, and deployment environments.
- Separate untrusted pull-request workflows from privileged deployment workflows.
- Avoid exposing secrets to untrusted code.
- Require review and protected environments for production releases.
- Record provenance and verify artifacts before deployment.

## Containers
- Use minimal trusted base images, update them, scan them, and avoid unnecessary packages.
- Run as non-root; drop capabilities; use read-only filesystems and resource limits where feasible.
- Do not bake secrets into images or layers.
- Pin image digests for reproducible production builds where appropriate.
- Review exposed ports, mounts, Docker socket access, and runtime privileges.

## Cloud and infrastructure
- Review IAM permissions, public storage, network rules, metadata services, logs, key management, backup access, and secrets.
- Use private networking and egress restrictions where appropriate.
- Review infrastructure-as-code before applying it.
- Require approval for production IAM, DNS, firewall, and resource changes.
- Test restore procedures, not just backup job success.

## References
- NIST SSDF: https://csrc.nist.gov/pubs/sp/800/218/final
- OWASP Top 10:2025: https://top10.owasp.org/2025/
- SLSA: https://slsa.dev/
- SPDX: https://spdx.dev/
- CycloneDX: https://cyclonedx.org/
- OpenSSF Scorecard: https://scorecard.dev/
