# The Ice Box Copilot Instructions

This repository is a static storefront and ordering site for an ice cream shop. Keep changes lightweight, browser-friendly, and easy to maintain.

## Project context
- Site is mostly plain HTML, CSS, and JavaScript files at the repo root.
- There is no framework build pipeline; changes should work directly in the browser.
- The project includes a Stripe-based payment flow using files like `create-payment.js`, `client.js`, and `webhooks.js`.
- The UI contains multiple menu pages and a shopping cart flow.

## Coding expectations
- Prefer simple, readable vanilla JavaScript over framework-heavy patterns.
- Preserve the existing static-file architecture unless there is a clear need to refactor.
- Keep HTML semantics clean and accessible; avoid unnecessary dependencies.
- Use relative paths consistently for assets and scripts.
- Match the established visual style of the site and avoid introducing large CSS resets or framework styles.

## Payment and cart behavior
- Any new checkout or cart logic should remain compatible with the existing Stripe session flow.
- If touching payment-related code, be careful with environment variables and serverless Netlify functions.
- Keep success, cancel, and error-flow handling consistent with the current checkout UX.

## Editing guidance
- Be conservative with changes to shared stylesheets and layout files because multiple pages depend on them.
- Prefer small, targeted updates instead of broad rewrites.
- For UI changes, verify that they still render cleanly across desktop and mobile widths.
- When adding scripts, prefer unobtrusive DOM selection and avoid heavy abstractions.

## Validation
- Since this is a static site, validate with a browser preview or local static server when possible.
- Check for broken relative links, missing assets, and JS runtime errors after UI or checkout changes.

## Preferred conventions
- Use descriptive class names and IDs that match the current structure.
- Keep forms and cart interactions accessible and keyboard friendly.
- Avoid introducing TypeScript or build tooling unless explicitly requested.
