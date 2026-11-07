# CodeKids rendered responsive audit

Local preflight and live GitHub Pages verification completed 7 November 2026 in headless Chrome against the rendered DOM at `https://ahasanulkarimkhan-uiux.github.io/codekids-design/`.

## Critical defect and correction

The first small-width image capture exposed clipped hero text and a badge that competed with the page boundary. This was treated as a **Critical Layout Defect**. Exact fix: mobile `.hero-copy` received `width:100%`, `max-width` and `overflow-wrap`; `.pill` became full-width with wrapping 11 px text; hero type was capped at 46 px and 36 px at the narrowest breakpoint. The corrected 390 and 320 px renders show the complete heading, badge, buttons and mobile menu.

## Live six-point results

| Viewport | Header/action stacking | Text wrap/orphans | Proportions/touch | Page overflow | Long-text stress | Visual render |
| --- | --- | --- | --- | --- | --- | --- |
| 1440 | Pass, horizontal header | Pass | Pass, 1200 px container | `1425 = 1425` after the 15 px browser scrollbar | Pass | Live screenshot checked |
| 834 | Pass, compact header | Pass | Pass, balanced two-column hero and course grid | `819 = 819` after the 15 px browser scrollbar | Pass | Live screenshot checked |
| 390 | Pass, 48 px menu and stacked actions | Pass after fix | Pass, all measured controls at least 44 px | `390 = 390` | Pass | Screenshot checked |
| 360 | Pass | Pass after fix | Pass | `360 = 360` | Pass | Screenshot checked |
| 320 | Pass | Pass, hero is three balanced lines | Pass | `320 = 320` | Pass | Screenshot checked |

The 760 px comparison table intentionally overflows only inside its keyboard-focusable `.comparison` region. The page itself does not scroll horizontally. Stress fixtures used a long parent name, a 68-character course title and a long form note; page, card and form overflow checks were all false. Blank submit produced three invalid fields and a summary; valid submit hid the form and showed local success. Mobile measurements found no visible control below 44 px. Two compact desktop footer links are narrower than 44 px but retain 44 px height; the mobile touch-target requirement passes.

Local and live screenshots were visually inspected and remain excluded from the public repository; they are browser renders, not device photographs. The live render matched the deployed `main` branch at the time of audit. No post-deployment Critical Layout Defect remained.

