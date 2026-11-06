# CodeKids post-build design and usability review

Reviewed against the owner-approved brief and local rendered DOM on 7 November 2026.

## Five-dimension design review

1. **Layout: Pass.** Primary comparison and local trial actions remain visible; explicit breakpoints stack competing rows. The first mobile render exposed clipped hero content and was corrected with bounded copy width, a wrapping badge and smaller narrow-screen type.
2. **Accessibility: Pass.** Body text is 16 px. Primary text on cream is 15.27:1, secondary text is 10.31:1, white on purple is 5.70:1 and purple on cream is 5.44:1. Focus is visible, semantic labels exist and mobile interactive controls measured at least 44 px.
3. **Responsiveness: Pass.** DOM widths 1440, 834, 390, 360 and 320 show no page-level horizontal overflow. The comparison table scrolls inside its labelled region by design.
4. **Dark-mode readiness: Pass for architecture, N/A for delivery.** Semantic CSS variables isolate theme values; no dark theme was requested or added.
5. **Edge cases: Pass.** Blank submit produces three field errors, valid submit produces local success, long parent name, long course title and long note do not overflow. Loading is N/A because the form performs no network work.

Summary: 5 Pass, 0 Needs work, 0 Fail after the mobile correction.

## Nielsen heuristic evaluation

| Heuristic | Rating | Evidence and fix status |
| --- | --- | --- |
| Visibility of status | Pass | Live region, field errors and local success state identify the current state. |
| Match with real world | Pass | Parent-facing course, age, duration and request language replace implementation jargon. |
| User control and freedom | Pass | Navigation links, native disclosure controls and “Try the form again” provide recovery. |
| Consistency and standards | Pass | Buttons, links, labels and required markers behave consistently. |
| Error prevention | Pass | Required fields are visible before submit and contact syntax is checked. |
| Recognition over recall | Pass | Course details and comparison attributes remain visible; “Not sure yet” prevents forced guessing. |
| Flexibility and efficiency | Pass | Course cards preselect the corresponding form option without removing manual selection. |
| Aesthetic and minimalist design | Pass | Unsupported proof, pricing and redistributed photography were removed. |
| Error diagnosis and recovery | Pass | Each error names the field action and focus moves to the first invalid field. |
| Help and documentation | Pass | FAQ and persistent concept limits explain what the prototype does and does not do. |

Summary: 10 Pass, 0 Needs work, 0 Fail. Biggest residual risk is that a visitor may still mistake the concept for a real provider if they ignore the repeated limitation copy.

## Persona acid test

- **First-time parent: Passes.** The page first states the course purpose, then exposes comparable paths and a single local trial route.
- **Skeptical engineer: Ready for development as a prototype.** Tokens, state coverage, responsive rules and evidence are explicit; real API and data contracts are intentionally absent.
- **Impatient product reviewer: Approve for portfolio publication.** The artifact demonstrates the intended decision journey without claiming a real conversion metric.

Consensus: transparency around evidence and form behavior is the central issue. Repeated concept boundaries, local-state copy and removal of unsupported proof address all three lenses.
