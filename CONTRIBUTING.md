# Contributing

## Principles

- Keep the skill security-specific and evidence-led.
- Prefer official, maintained sources.
- Do not copy substantial copyrighted standards or vendor documentation; link and summarize instead.
- Keep instructions portable across Agent Skills-compatible hosts.
- Make scripts safe by default, local-only, dependency-light, and explicit about their limitations.
- Include tests or evaluation cases for new behavior.
- Do not add exploit automation or instructions for unauthorized testing.

## Changes

1. Explain the security problem and affected domain.
2. Cite the authoritative source and version/date.
3. Describe expected behavior and limitations.
4. Add or update a reference, checklist item, and evaluation case.
5. Run all local validators.
6. Update `CHANGELOG.md`.

## Review checklist

- Does the change preserve the user's original scope?
- Does it distinguish a verified finding from a hypothesis?
- Does it require approval for sensitive operations?
- Does it avoid leaking secrets?
- Is the guidance framework-appropriate and current?
- Does it avoid presenting legal advice or certification claims?
