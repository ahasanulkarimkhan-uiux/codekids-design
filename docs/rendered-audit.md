# CodeKids rendered responsive audit

Local preflight completed 7 November 2026 in headless Chrome against the rendered DOM. Live GitHub Pages verification remains required after deployment.

## Critical defect and correction

The first small-width image capture exposed clipped hero text and a badge that competed with the page boundary. This was treated as a **Critical Layout Defect**. Exact fix: mobile `.hero-copy` received `width:100%`, `max-width` and `overflow-wrap`; `.pill` became full-width with wrapping 11 px text; hero type was capped at 46 px and 36 px at the narrowest breakpoint. The corrected 390 and 320 px renders show the complete heading, badge, buttons and mobile menu.

## Local six-point results

| Viewport | Header/action stacking | Text wrap/orphans | Proportions/touch | Page overflow | Long-text stress | Visual render |
| --- | --- | --- | --- | --- | --- | --- |
| 1440 | Pass, horizontal header | Pass | Pass, 1200 px container | `scrollWidth = clientWidth` | Pass | Screenshot checked |
| 834 | Pass, compact header | Pass | Pass, balanced two-column hero and course grid | `scrollWidth = clientWidth` | Pass | Screenshot checked |
| 390 | Pass, 48 px menu and stacked actions | Pass after fix | Pass, all measured controls at least 44 px | `390 = 390` | Pass | Screenshot checked |
| 360 | Pass | Pass after fix | Pass | `360 = 360` | Pass | Screenshot checked |
| 320 | Pass | Pass, hero is three balanced lines | Pass | `320 = 320` | Pass | Screenshot checked |

The 760 px comparison table intentionally overflows only inside its keyboard-focusable `.comparison` region. The page itself does not scroll horizontally. Stress fixtures used a long parent name, a 68-character course title and a long form note; page, card and form overflow checks were all false. Blank submit produced three invalid fields and a summary; valid submit hid the form and showed local success.

Local screenshots were visually inspected and remain excluded from the public repository; they are browser renders, not device photographs. Live deployed results will be recorded below after publication.
