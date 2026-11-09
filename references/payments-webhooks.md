# Payment, subscription, and webhook security

- Never trust a client-supplied amount, price, discount, currency, tax, payment status, or entitlement.
- Resolve product and price identifiers on the server using trusted catalog data.
- Verify payment status directly with the provider or through cryptographically verified provider webhooks.
- Verify webhook signatures using the provider's official SDK and raw request body requirements.
- Validate timestamp/replay windows where supported.
- Persist provider event IDs and process idempotently. Duplicate delivery must not create duplicate charges, credits, orders, or entitlements.
- Treat webhook delivery as at-least-once unless the provider documents otherwise.
- Bind order, customer, currency, amount, and subscription to server-side records.
- Handle asynchronous states, refunds, disputes, chargebacks, cancellations, renewals, and failed payments.
- Do not store card data unless the architecture and compliance program explicitly require it. Prefer provider-hosted/tokenized collection.
- Define rate limits, fraud controls, spending alerts, and operational reconciliation.
- Make renewal, cancellation, refund, and fee disclosures accurate and understandable.
- Test in provider sandbox/test mode. Never send live transactions without explicit approval.

## PCI DSS
PCI DSS scope depends on how payment data is collected, processed, transmitted, and stored. Do not infer scope or claim compliance from using a payment provider. Confirm the applicable requirements with the provider, acquirer, and qualified assessor.

## References
- PCI SSC Document Library: https://www.pcisecuritystandards.org/document_library/
- OWASP Transaction Authorization: https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html
- OWASP REST Security: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
- Use the selected payment provider's current official webhook and idempotency documentation.
