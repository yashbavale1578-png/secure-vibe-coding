# Operating modes and workflow

## AUDIT
Read-only. Discover project, threat model, inspect relevant controls, run safe local checks, classify findings, and report. Do not modify files.

## FIX
Implement only named/approved findings. Before edits, explain scope and side effects. For risky changes, create a branch/backup and ask for approval. After changes, run relevant tests.

## VERIFY
Verify specified controls and fixes. Re-run relevant tests and negative cases. Do not assume code changes are effective because they compile.

## FULL
Run discovery → threat model → audit → risk ranking → remediation plan → approved changes → verification → report. `FULL` does not bypass approval gates.

## Approval required
External/production active tests, data deletion, migrations, IAM/security policy changes, credential rotation/revocation, payment actions, deployments, external messages, and potentially expensive operations.
