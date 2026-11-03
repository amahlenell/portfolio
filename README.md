# Amy Nell — Portfolio

Interactive portfolio published at https://amahlenell.github.io/portfolio/.

## Editing

- `index.html`: engineering-focused introduction, skills, product showcases, development approach and recruitment contact details.
- `app.js`: case-study content, technology stacks, galleries and interactions.
- `style.css`: layout, mobile styles and reduced-motion support.
- `refinements.css`: layered panels, recruitment layout, realistic device frames, responsive overrides and consistent SVG styling.
- `assets/icons.svg`: shared SVG symbols; no emoji-based stars or arrows.
- `assets/`: portrait, CV, project screenshots, original illustrations and the licensed font.

This is a static website. GitHub Pages serves the repository root; no build or dependencies are required. All site asset paths are relative to support the `/portfolio/` address. `.nojekyll` keeps publishing buildless.

The AI medical application is explicitly marked as planned and not yet built. Project captures show public sign-in interfaces; no real private account activity is published. The Narrow Path mobile image renders actual unauthenticated server markup at mobile size, using the application's stylesheet. It was captured locally to avoid using a browser's signed-in account. Illustrations are labelled; no project metrics or walkthrough videos have been fabricated.

## Scrolling and accessibility

Desktop panels pin after their final content is reached, calculated from their measured height. Later panels overlap earlier ones. Navigation computes normal-flow positions so sticky offsets do not break anchor links. Tablet and phone layouts use normal scrolling with rounded section boundaries. Reduced-motion preferences disable pinning, status pulsing and transitions. The native case-study dialog retains focus management, Escape, keyboard story tabs, gallery controls and direct-link support.

## Assets and credit

The Narrow Path lifestyle composition uses [Gustavo Fring's stock photograph](https://www.pexels.com/photo/couple-looking-at-a-phone-7155730/) under the [Pexels License](https://www.pexels.com/license/). Models are illustrative, not application users or endorsers. No religion is attributed to the stock models. The faith context comes from the application itself. CSS frames provide the phone/laptop hardware; interfaces are real public screens. The self-hosted Manrope font and its existing OFL license remain unchanged. No new packages are needed.

## Recruiter demos

Both current application links require sign-in. Neither is advertised as a public demo. See `docs/DEMO_ACCESS.md` for verified source findings and the exact work needed in the application repositories. Our Table already supports an isolated local sample mode suitable for a separate deployment; Narrow Path needs a dedicated fictional-data experience. No production accounts, authentication, database policies or application repositories were changed by this portfolio refinement.

Previous portfolio assets and project pages remain available for existing links. The design before this update is preserved in the backup branch and commit history.
