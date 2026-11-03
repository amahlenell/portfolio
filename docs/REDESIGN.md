# Portfolio design improvements — 3 November 2026

The existing static site and original address are preserved. The homepage again centers a large Portfolio wordmark with Amy Nell above it. The professional title, interactive portrait, short introduction, availability, and actions surround it. Mobile keeps the same hierarchy with a compact title/portrait composition.

The Connected Stack is a five-card carousel numbered 01–05, with lavender, sage, apricot, blue, and charcoal surfaces. Front faces list tools; reverse faces explain their use in actual projects. Controls include previous/next, numbered selection, flip, arrow/Home/End keys, mouse dragging, and native touch scroll snapping. Only the active slide and visible card face are interactive. Card announcements and pressed/disabled states support keyboard and assistive technology use.

Touch users can tilt project covers with a horizontal drag and swipe case-study gallery images. Vertical scrolling stays native. Reduced-motion preferences remove the new hero/flip/tilt transitions and use immediate carousel movement; existing reduced-motion panel and status behavior remains.

The two requested visitor-facing developer notes are removed. Stock-photo credit and licensing are retained in README; the existing font license stays with the assets. New project frames contain screenshots of the actual fictional-data demos. The AI medical project remains explicitly planned.

Both implemented projects now have working Try Live Demo links on their cards and in their case studies. The separate demo deployments contain sample data and reset controls, with no production database or provider credentials. Original application links remain available. See DEMO_ACCESS.md for implementation, checks, and source-maintenance details.

Existing case-study stories, technology stacks, architecture diagrams, galleries, keyboard tabs, dialog focus handling, direct links, contact links, CV, SVG icons, panel styling, and deployment approach remain in place. No new portfolio dependency or build step was introduced.

Checks covered desktop, tablet, and 360/390px phone layouts, local image/anchor references, carousel selection/flip/end controls and dragging, portrait toggle, and the case-study navigation. Browser emulation was used; physical-device touch performance was not measured. The implementation provides native swipe handling rather than hover-only access.

Publishing uses a new commit on the original portfolio repository, based on its existing tree so legacy pages/assets are preserved. The previous state is backed up under backup/portfolio-before-carousel-demos-2026-11-03.
