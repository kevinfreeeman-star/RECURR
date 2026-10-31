# RECURR

Retention-first agency website built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Development

Requires Node.js 22 or newer and npm.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

## Validation and production

```sh
npm run build
npm run typecheck
npm start
```

## Before launch

- Sales and booking buttons link to https://calendly.com/recurrmarketing. The link opens the Calendly profile; configure and publish your strategy-call event there.
- Add the agency email. Founder names are Kevin Freeman (strategy) and Marcus Griffin (creative); confirm the role assignment before launch. No LinkedIn destination is configured.
- Add verified founder experience and case studies when available. All creative and reporting examples are labeled illustrative.
- Finalize the privacy policy for the chosen hosting, contact, and analytics providers before enabling data collection.
- Set the production canonical URL and social sharing assets once the domain is chosen.

Copy and pricing live in `components/content.ts`; layout and interactions in `components/site.tsx`; responsive styles in `app/globals.css`.
