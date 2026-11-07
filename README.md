# Amy Nell — Portfolio

Interactive portfolio published at https://amahlenell.github.io/portfolio/.

## Editing

- `index.html`: engineering-focused introduction, two completed product showcases, skills, development approach and recruitment contact details.
- `app.js`: case-study content, technology stacks, galleries and interactions.
- `style.css`: layout, mobile styles and reduced-motion support.
- `refinements.css`: layered panels, recruitment layout, realistic device frames, responsive overrides and consistent SVG styling.
- `interactions.css` and `interactions.js`: centered Portfolio hero, five-card stack carousel, flips, keyboard controls, pointer dragging, portrait toggle, touch cover movement and gallery swipes.
- `portfolio-update.css`: compact hero, project highlights, visible skills summary, optional stack details, responsive layouts and normal section scrolling.
- `assets/icons.svg`: shared SVG symbols; no emoji-based stars or arrows.
- `assets/`: portrait, CV, project screenshots, original illustrations and the licensed font.

This is a static website. GitHub Pages serves the repository root; no build or dependencies are required. All site asset paths are relative to support the `/portfolio/` address. `.nojekyll` keeps publishing buildless.

The AI medical application is explicitly marked as planned and not yet built. The leading project previews show the separate fictional-data demos; no real private account activity is published. Additional case-study gallery images include the original public sign-in screens. Illustrations are labelled; no project metrics or walkthrough videos have been fabricated.

## Scrolling and accessibility

All layouts use normal document scrolling with rounded section boundaries, keeping expanded skills and project actions accessible. The skills summary is always visible; the native details disclosure reveals the existing carousel. Reduced-motion preferences disable status pulsing and transitions. The native case-study dialog retains focus management, Escape, keyboard story tabs, gallery controls and direct-link support.

## Engineering evidence

Completed projects lead the page. Each card highlights a concrete engineering decision and distinguishes demo access from live verification. Case studies link directly to test files and document remaining checks. Repository-reported results are attributed; adding an evidence link does not claim a new test run. The planned healthcare project appears separately under Currently exploring.

## Assets and credit

The Narrow Path lifestyle composition uses [Gustavo Fring's stock photograph](https://www.pexels.com/photo/couple-looking-at-a-phone-7155730/) under the [Pexels License](https://www.pexels.com/license/). Models are illustrative, not application users or endorsers. No religion is attributed to the stock models. The faith context comes from the application itself. Credit is retained here instead of a visitor-facing developer note. CSS frames provide the phone/laptop hardware. The self-hosted Manrope font and its existing OFL license remain unchanged. No new portfolio packages are needed.

## Recruiter demos

Both project cards and case studies include verified Try Live Demo links. [Narrow Path](https://narrow-path-recruiter-demo.vercel.app/demo) uses session-only fictional data; [Our Table](https://our-table-recruiter-demo.vercel.app/) uses browser-local fictional data. Both have reset controls and separate deployments without production credentials. Cloud AI and provider operations are unavailable in the sample experiences. See `docs/DEMO_ACCESS.md` for behavior, checks, and maintenance. Application source changes were deployed directly to Vercel; GitHub write access to those two repositories was unavailable, so their main branches have not been modified.

Previous portfolio assets and project pages remain available for existing links. The design before this update is preserved in the backup branch and commit history.
