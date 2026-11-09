# Framework adaptation guide

The skill is framework-independent. It must first detect the stack, then load current official framework/provider guidance rather than forcing one implementation pattern.

## Common stacks to recognize
- Frontend: React, Next.js, Vite, Vue, Angular, Svelte, static HTML.
- Backend: Node.js, Express, Fastify, NestJS, Python frameworks, Java/Spring, .NET, PHP/Laravel, Go.
- Data: PostgreSQL, MySQL, SQLite, MongoDB, Redis, Firebase, Supabase, managed cloud databases.
- Hosting: serverless, containers, VMs, managed PaaS, cloud infrastructure.
- AI: model APIs, retrieval/vector databases, agent frameworks, tool servers, skills/plugins.

## Adaptation rules
- Confirm versions from manifests and lockfiles.
- Prefer framework-native authentication, CSRF, escaping, validation, and security middleware.
- Review framework-specific deployment and proxy behavior.
- Do not copy configuration from another framework.
- For database platforms, inspect actual grants, policies, service-role behavior, RPC/functions, and client SDK access.
- For serverless platforms, inspect invocation identity, environment variables, logs, concurrency, timeout, and egress.
- For AI integrations, inspect provider retention/training terms and tool permissions.
- Cite current official documentation in project-specific recommendations.
