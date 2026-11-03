# Recruiter demo access — repository review

Read-only review of `amahlenell/our-table` and `amahlenell/narrow-path`, 3 November 2026. No accounts, environments, databases, permissions, or repositories were changed. Current linked deployments were previously observed at their public sign-in screens. This review verified current source; it did not authenticate or test live household isolation.

## Our Table

**Practical now: a separate browser-local demo deployment.** The current source already implements sample data and local-only mutations. No public demo deployment URL was found or verified, so the portfolio must keep `Explore live app` labelled as requiring sign-in until a demo is actually deployed and checked.

Verified source:

- `src/app/layout.tsx`: `configured` requires both public Supabase variables; demo is `NEXT_PUBLIC_DEMO_MODE === "true" && !configured`. Supplying Supabase configuration automatically disables demo mode.
- `src/features/demo.ts`: fictional Alex/Jamie household, eight sample recipes, deterministic IDs and initial empty plans/food links. Sample photographs are illustrative. No database seeding occurs.
- `src/features/app-provider.tsx`: browser storage key `prepbook-demo-v1`; demo recipe/plan/profile mutations update browser state instead of calling the cloud APIs. Cloud refresh is skipped. Missing storage falls back to `demoData()`.
- `src/components/layout/app-shell.tsx`: visible LOCAL DEMO banner explains sample data, browser-local changes, and unlinked nutrition.
- `src/proxy.ts`: configured production requires a verified Supabase user for protected pages; no `/demo` exception exists.
- `src/app/auth/[mode]/page.tsx`: no demo-login button exists. It runs real Auth or disables account controls when unconfigured.
- `src/app/settings/page.tsx`: demo label and manual reset instructions (clear browser site data), but no one-click reset control.
- `src/app/api/[...path]/route.ts`: service-backed API operations require a user/household. Local demo is not an unauthenticated route to those APIs.

Minimum deployment work, outside the portfolio repository:

1. Create a **separate demo deployment** from the Our Table repository, not a change to the daily-use production deployment.
2. Build it with `NEXT_PUBLIC_DEMO_MODE=true`; leave both Supabase variables absent. Do not attach a production database or provider secrets. This does not modify production authentication.
3. Do not configure AI, imports, food-lookup or invitation services for that demo. The UI must communicate these limitations rather than imply local functionality includes provider calls.
4. Recommended small source enhancement: expose `resetDemo()` from `src/features/app-provider.tsx`, clearing only `prepbook-demo-v1`, restoring `demoData()`, and cancelling cooking-step storage as appropriate. Add a labelled reset button in `src/components/layout/app-shell.tsx` or `src/app/settings/page.tsx`. Add cases to `tests/e2e/kitchen.spec.ts` or a new `tests/e2e/demo.spec.ts`.
5. Verify in two fresh browser contexts that recipes/notes stay isolated; delete/edit samples and reset; ensure no Supabase writes or privileged/API secrets occur; verify missing service operations report unavailable. Existing tests in `tests/e2e/kitchen.spec.ts` cover local recipe editing, nutrition labels, cooking and meal planning but were not rerun in this review.
6. Only after deployment and verification, add its real URL to the portfolio as `Try demo — sample data`.

If a `/demo` route on the same production origin is preferred, that is a larger application change: route-specific AppProvider and shell, route-prefix-aware navigation, public routing isolated from protected production data, and explicit API guards. Simply adding `?demo=true` or skipping auth is not supported and is not appropriate.

## The Narrow Path

**No demo mode exists in the current source.** There is no fixture provider, public sample route, or demo-login button. Posting public credentials to an everyday couple account is not suitable.

Verified source:

- `src/lib/data.ts`: `loadApp()` calls `auth.getUser()`, redirects to `/login` without a user, optionally enforces the PIN, requires couple membership, then reads couple-scoped data.
- `src/lib/supabase/middleware.ts`: public prefixes are `/login`, `/auth`, `/offline`, `/api/cron`; every other page requires a verified user. `/demo` is absent.
- `src/app/page.tsx`: dashboard directly calls `loadApp()` and mounts `LiveRefresh`.
- `src/app/actions.ts`: check-ins, rewards, prayers, resets, PIN and notification actions call real Supabase/RPC functions; there is no sample mode.
- `src/components/CheckInCard.tsx`: imports `checkIn` directly from server actions.
- `src/components/PrayerList.tsx`: imports real prayer mutation actions directly.
- `src/components/LiveRefresh.tsx`: creates real Supabase Realtime subscriptions.
- `src/components/Shell.tsx`: navigation is rooted at production paths; sign-out calls the real action.
- `src/components/Pathway.tsx`: presentational, prop-driven pathway; it can be reused with fictional data without contacting Supabase.
- `src/app/login/page.tsx`: normal AuthForm only.
- `public/sw.js`: deliberately does not cache authenticated data. Keep it that way.

Recommended bounded implementation in Narrow Path, not the portfolio:

1. Add `src/app/demo/page.tsx`, `src/components/demo/DemoExperience.tsx`, and a fictional fixture module such as `src/lib/demo.ts`. Use invented names, prayers and dates only. Provide a clear sample-mode banner and reset action. Scope state to this visitor's browser/session.
2. Reuse the real `Pathway` and pure date/streak modules. Extract a prop-driven dashboard/presentational check-in component from `src/app/page.tsx` and `src/components/CheckInCard.tsx` so demo handlers update local state while production continues calling its existing server actions. Do not call `loadApp()` for sample screens.
3. Give the sample experience its own local tabs/routes. If reusing `Shell.tsx`, add explicit demo navigation destinations. Do not route demo users to production paths or mount `LiveRefresh`/real prayer, reset, notification or account actions.
4. In `src/lib/supabase/middleware.ts`, allow **only the explicit demo route subtree**, with an early path check before instantiating Supabase when serving the standalone fixture screen. Production pages, server actions, and auth remain protected. This is a separate public sample screen, not an auth bypass to real application data.
5. Add a `Try sample demo` link to `src/app/login/page.tsx` only once the screen exists. Keep real sign-in separate.
6. Add unit tests for fixture/streak behavior and browser tests for both check-ins, next milestone, reset, keyboard/mobile use and absence of Supabase writes, Realtime, notifications, private data or production actions. Recheck existing unauthenticated production routes still redirect and authenticated users remain scoped by RLS.
7. Deploy Narrow Path, verify the real URL, then enable a portfolio demo link. Until then the portfolio should say `Explore live app — sign-in required` and offer the actual case study/screenshots.

An authenticated public demo is also possible but would require a separate Supabase demo project, restricted fake accounts/households, provider limits and a controlled reset process. That is more operational work than either application's browser-local sample experience and was not provisioned here.

## Source links

- https://github.com/amahlenell/our-table/blob/main/src/app/layout.tsx
- https://github.com/amahlenell/our-table/blob/main/src/features/demo.ts
- https://github.com/amahlenell/our-table/blob/main/src/features/app-provider.tsx
- https://github.com/amahlenell/our-table/blob/main/src/proxy.ts
- https://github.com/amahlenell/our-table/blob/main/docs/DEPLOYMENT.md
- https://github.com/amahlenell/narrow-path/blob/main/src/lib/data.ts
- https://github.com/amahlenell/narrow-path/blob/main/src/lib/supabase/middleware.ts
- https://github.com/amahlenell/narrow-path/blob/main/src/app/actions.ts
- https://github.com/amahlenell/narrow-path/blob/main/src/components/Pathway.tsx
