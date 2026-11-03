# Engineering portfolio refinement

## Implemented

The original portfolio's large typography, off-white background, violet accent, portrait, three project slots, native case-study dialog and galleries remain. The public profile now identifies Amy as an AI-focused full-stack developer pursuing software engineering and AI roles. The former creator/marketing positioning and the two phrases specifically identified in the brief are removed from the current homepage and case-study code.

The page runs Home → Technical Skills → Featured Projects → How I Build → Contact. The About introduction is part of the hero. Availability is a contact link with a restrained green pulse. Hero actions lead to projects, GitHub and contact. Claude/Codex are categorised as development tools; project integrations and future automation interests are separate. No employment history, credentials, proficiency scores or production-agent experience have been invented.

Desktop sections overlap with complementary paper, sage, warm neutral, charcoal and lilac surfaces. A panel only pins once its full content has been traversed. Heights are observed on resize. Native wheel/touch/keyboard scrolling is retained. Anchor navigation uses normal-flow positions rather than pinned positions, and moves keyboard focus to the destination heading. At tablet/phone widths the panels use ordinary scrolling. Reduced-motion CSS disables pinning, pulse and transitions.

Narrow Path uses a licensed lifestyle composition and a detailed CSS phone chassis containing the real public sign-in interface. Our Table uses laptop and phone chassis with real desktop/mobile sign-in screens. Media are not invented signed-in interfaces. The stock photograph depicts models; no claim is made that they are users, endorsers or members of a religion. Faith context is provided by the app text and subtle cross graphic. The planned medical project remains explicitly unbuilt.

Case-study metadata now states Amy's role, and The Build panels include diagrams separating frontend, application logic and data/services. Existing technical narratives, GitHub/live links, story tabs, gallery navigation, expand controls, direct links and keyboard controls remain functional. Live application links explicitly require sign-in. No unimplemented Try Demo links are shown.

Stars, arrows, copy, expand, close, navigation and category icons now use an external SVG symbol sheet with `currentColor` styling. Text-based icons that could render as emoji are removed from the current interface and dynamically generated dialogs. Metadata, the canonical URL, Open Graph fields and the previously placeholder sitemap are updated.

## Files

- `index.html`: recruitment-focused structure, copy, semantic sections, actions, device compositions, SVG instances and metadata.
- `app.js`: role and architecture data, real gallery media, SVG controls, existing interactions, measured panel pinning, normal-flow anchor navigation and focus handling.
- `refinements.css`: scoped layout additions and responsive/reduced-motion rules. The original `style.css` remains the shared base.
- `assets/icons.svg`: consistent symbol sheet.
- `assets/narrow-path-lifestyle.jpg`, `assets/narrow-path-mobile.png`, `assets/our-table-mobile.png`: new media.
- `robots.txt`, `sitemap.xml`, `README.md`: metadata and maintenance guidance.
- `docs/DEMO_ACCESS.md`: exact application-repository work for safe demos.

No new dependencies or build step were added. Portrait, CV, existing screenshots, Manrope font/OFL license and prior project pages/assets remain. The CV document itself has not been rewritten.

## Media provenance

Lifestyle photo: Gustavo Fring, [Couple looking at a Phone](https://www.pexels.com/photo/couple-looking-at-a-phone-7155730/), under the [Pexels License](https://www.pexels.com/license/). Downloaded at 1400px, approximately 150 KB. It is presented as a composition with clear credit and stock-model disclosure.

Our Table mobile capture: its public live `/auth/login` interface at 390 × 844. Narrow Path mobile capture: its actual unauthenticated `/login` server response and application stylesheet, rendered locally at 390 × 844. This avoided capturing a browser's private signed-in progress. No real household activity is included in published images. Existing desktop public captures remain. Added raster media totals approximately 196 KB. The hardware mockups are CSS, not large raster downloads.

## Checks actually performed

- JavaScript syntax check passed (`node --check`).
- Static checks passed for unique homepage IDs, local asset references, SVG symbol references, anchor targets, removed positioning/text icons, canonical origin, reduced-motion overrides and honest demo labels.
- Browser viewport checks at 360 × 800, 390 × 844, 768 × 1024 and 1440 × 1000: no horizontal page overflow and no broken loaded images. Mobile/tablet panels were verified `relative`; desktop panels were verified `sticky` with height-dependent offsets.
- Desktop and mobile hero/project compositions inspected visually. The duplicated decorative lifestyle tagline is hidden on mobile after inspection, keeping the photograph and phone clear. The SVG icon system was checked in the rendered DOM with no emoji icon characters present.
- Narrow Path and Our Table dialogs opened; real galleries, next/previous, expand/fit and architecture panels worked. Arrow-key tab selection moved to Reflections; Escape closed the dialog. The next-project control opened the planned medical project with no fake live/demo link. Copy-email announced success.
- At 390px, the case-study width was checked against its scroll width with no overflow. Gallery media loaded. Browser console inspection returned no warnings/errors during those checks.
- Desktop anchor destinations and the overlap boundary were inspected; natural-flow anchor calculations corrected sticky positioning errors found in the first test pass.
- Representative small-copy contrast calculations were performed; low-contrast credits/access notes were darkened. Other checked body/skill/contact/process pairs exceeded 4.5:1. This is targeted checking, not a complete automated accessibility audit.

## Verification limits and remaining input

These are browser viewport checks, not physical iPhone/Android/Safari hardware tests. Reduced-motion disabling rules were inspected in source; an operating-system preference toggle was not exercised. No claim is made that the applications' signed-in flows, provider calls or production account isolation were tested as part of this portfolio task.

To show more of the actual products, supply publishable signed-in screens or implement isolated sample-data deployments. No walkthrough videos were supplied. Our Table's existing browser-local demo can be deployed separately; Narrow Path needs a dedicated fictional-data experience. Exact files, proposed changes, environment boundaries and validation steps are documented in `DEMO_ACCESS.md`. No app repositories, authentication, databases, private accounts or production policies were modified.
