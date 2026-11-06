# CodeKids build notes

## Protective UX

| Hidden failure | Evidence | Intervention | Verification |
| --- | --- | --- | --- |
| Trial action implies a real booking | Static source uses booking language; scope forbids submission | Use “request” language and repeat local-only limitation before and after submit | Confirmed in hero, form and success copy |
| Invalid contact data appears accepted | Static frame has no validation behavior | Validate required name, email/phone and course; focus first invalid field | JavaScript interaction test required in rendered audit |
| Long course names crush card or select layout | Responsive requirement and stress checklist | `minmax(0,1fr)`, wrapping text and full-width controls | Required at all live viewports |
| Mobile navigation covers or traps content | Desktop-only source | Explicit menu button, expanded state, stacked 48 px links and auto-close after selection | Required at 390, 360 and 320 px |
| Photography is republished without rights | No redistribution record | Use CSS illustrations only in executable page | Repository asset audit confirms no new source photography |
| Motion causes discomfort | Hover movement and smooth scroll | `prefers-reduced-motion` removes smooth scroll and transitions | CSS inspection and browser emulation |
| Comparison table leaks horizontally | Four-column table at narrow widths | Keep overflow inside a labelled, keyboard-focusable region | Page itself must retain zero horizontal overflow |

## State coverage

| Screen or component | Default | Empty | Loading | Error | Success |
| --- | --- | --- | --- | --- | --- |
| Landing content | Implemented | N/A, content is authored and static | N/A, no remote data | N/A, no remote data | N/A, browsing has no completion state |
| Mobile navigation | Closed | N/A, authored links always exist | N/A | N/A | Open/closed state implemented |
| Trial form | Implemented | Initial blank fields are the relevant empty state | N/A, no network request | Implemented per field and summary | Implemented locally with reset |
| Course comparison | Implemented | N/A, three authored courses are the concept content | N/A | N/A | N/A |

## Implementation boundaries

No storage API, analytics, fetch, backend or external form action exists. Google Fonts are the only runtime external dependency; system fallbacks preserve legibility if they fail. Source claims and prices are not treated as verified production facts.
