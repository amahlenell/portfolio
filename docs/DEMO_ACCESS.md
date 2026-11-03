# Recruiter demos — 3 November 2026

Both project cards and case studies provide immediate, account-free sample experiences:

- [The Narrow Path](https://narrow-path-recruiter-demo.vercel.app/demo)
- [Our Table](https://our-table-recruiter-demo.vercel.app/)

These are separate Vercel projects. The original applications and their authentication remain unchanged. No production database, AI-provider credentials, real accounts, or personal information are attached to either demo. A visible sample banner distinguishes each experience. The demo-only server configuration rejects `/api/*` with HTTP 403.

## The Narrow Path

Fictional Alex and Jordan start on a fixed sample day with 13 shared days completed. Visitors can confirm both check-ins, advance the sample day, explore milestones and reward preferences, review history, and add, answer, or remove sample prayers. The real Pathway component and pure date/streak helpers are reused. State lives in React memory: Reset demo or reloading restores the fixture. The sample screen does not import production server actions or Supabase/Realtime clients.

Demo project environment: `RECRUITER_DEMO_ONLY=true`. Other pages redirect to `/demo`; cloud API routes are blocked. The daily-use production middleware remains behind this explicit environment guard.

## Our Table

The existing browser-local demo mode now has one-click reset controls in the shell, settings, and cooking experience. It contains the fictional Alex/Jamie household and eight sample recipes. Visitors can explore recipes, favorites, notes, manual editing, cooking steps, and local meal planning. Demo changes use `prepbook-demo-v1` in this visitor's browser. Reset restores the original sample data and removes only that demo's cooking progress.

Demo project environment: `NEXT_PUBLIC_DEMO_MODE=true` and `RECRUITER_DEMO_ONLY=true`. A fail-closed configuration check prevents attaching Supabase to this demo-only deployment. Cloud AI generation, provider lookups/imports, and invitations are unavailable; these are not simulated as successful cloud operations.

## Verification

- Both Vercel deployments reported READY; public sample pages returned 200 and sampled cloud API routes returned 403.
- Narrow Path: TypeScript and production build passed; 37 unit tests passed. Browser checks covered two-person confirmations, duplicate prevention, advancing the sample day, prayer editing, and reset.
- Our Table: TypeScript and production build passed; 37 tests passed and one live-database test was skipped. Browser checks covered favorites and reset, saving notes, cooking step navigation, ingredient checkboxes, and reset from cooking mode.
- The portfolio uses screenshots captured from these fictional-data demos. Real signed-in account screens are not published.

## Source and future maintenance

The connected GitHub integration could update the portfolio but returned 403 for writes to the two application repositories. Consequently, these demo improvements were deployed directly from the reviewed local source to separate Vercel projects; they have not been committed to the application repositories. Source archives accompany this handoff for synchronization when repository write access is available.

The demo projects build with `node scripts/prepare-demo-assets.mjs && npm run build`. The asset-preparation script fetches original public binary assets from immutable commits and verifies SHA-256 hashes. Dependency installs use the included lockfiles. The ignore-build command `test ! -f scripts/prepare-demo-assets.mjs` prevents an unmodified application-main push from replacing these demo-specific deployments. Keep the demo-only flags and never add production credentials to these projects.

The AI medical application remains planned and has no fabricated demo or implementation claims.
