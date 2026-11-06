# CodeKids critique notes

Source artifacts: owner-approved brief dated 7 November 2026; Figma `Page 1 / 1:2`, 1440 × 7242, 383 nodes; implementation in this repository.

## Raw three-lens findings

### Parent comparing courses

- The source shows three age bands but some proof claims and pricing lack public provenance. Unsupported proof could make a parent trust the wrong thing.
- A trial action is repeated, but a static design does not explain whether it books a class or starts a callback.
- Course cards need comparable attributes so a parent does not have to remember details across sections.

### Implementing builder

- The source is a fixed 1440 px composition. Cards, navigation, headings and the long form require explicit responsive rules.
- Photography cannot be copied into a public repository without a rights record.
- Form behavior, mobile navigation, focus, validation, reduced motion and success recovery are not specified by the static frame.

### Portfolio and product reviewer

- A polished concept can overstate a real service if ratings, counts, testimonials or outcomes appear without evidence.
- The executable artifact must distinguish a request demonstration from a real conversion.
- Responsiveness and state coverage need rendered evidence, not device mockups alone.

## Prioritized corrections

1. **Critical trust correction:** remove unsupported production proof, prices and testimonials from the executable version. Keep the concept limitation visible.
2. **High interaction correction:** implement local default, error and confirmation states with explicit no-transmission copy.
3. **High responsive correction:** use explicit grid-to-stack rules, balanced headings and full-width mobile actions.
4. **High rights correction:** replace unverified photography with CSS-built educational visuals.
5. **Medium comparison correction:** add a scroll-safe comparison table with the same attributes for every path.

## Blind spot and exception

Visual polish alone would miss the risk of presenting a portfolio concept as a functioning school. The combined lenses changed proof, form wording and asset strategy. The raised shadow style is a responsive implementation addition for floating navigation and form surfaces; it is not claimed as an exact source-frame effect, because the inspected frame contains no effects.
