# CodeKids design tokens

Source of truth recorded 7 November 2026 from Figma file `E8ePWD1BEhuQRROFmyvBf0`, frame `Page 1 / 1:2` (1440 × 7242). The frame contains 383 nodes. Cravo collections were inspected and left unchanged.

## Figma foundation

Created and structurally verified:

- `CodeKids · Primitives`: 14 colors, one Value mode, hidden primitive scopes.
- `CodeKids · Semantic Color`: 21 Light-mode aliases, no raw semantic values.
- `CodeKids · Dimensions`: 28 spacing, radius, size and motion variables.
- `CodeKids · Typography`: 41 family, weight, size and line-height variables.
- 10 `CodeKids/*` text styles and `CodeKids/Shadow/Raised` effect style.

All 104 variables have `var(--codekids-…)` WEB syntax. Semantic colors alias primitives. No CodeKids variable uses `ALL_SCOPES`; broken aliases and missing code syntax both equal zero.

## Exact source colors

| Role | CSS variable | Value |
| --- | --- | --- |
| Primary text | `--codekids-color-text-primary` | `#1E1B4B` |
| Secondary text | `--codekids-color-text-secondary` | `#3B3A5C` |
| Surface | `--codekids-color-background-surface` | `#FFFFFF` |
| Page | `--codekids-color-background-page` | `#FFF9F0` |
| Primary action | `--codekids-color-action-primary` | `#7C3AED` |
| Pink accent | `--codekids-color-accent-pink` | `#FF6B8B` |
| Yellow accent | `--codekids-color-accent-yellow` | `#FFC93C` |
| Sky accent | `--codekids-color-accent-sky` | `#4CC9F0` |
| Mint and focus | `--codekids-color-accent-mint` | `#2EC4B6` |
| Border | `--codekids-color-border-default` | `#E6DCF7` |

Functional error (`#B42318`, `#FEE4E2`) and success (`#087A68`, `#DFF8F3`) pairs are implementation additions because the static source frame does not define form feedback colors.

## Typography

Source families are Fredoka for display and headings and Nunito for body and controls. Public code loads licensed Google Fonts and supplies system fallbacks. Key exact source styles include hero `68/76`, section heading `48/56`, large heading `44/52`, card heading `28/34`, body large `20/30`, and body base `16/24`.

## Spacing, radius, dimensions and motion

The implementation uses the source's 4 px progression: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96 and 120 px. Source radii are 12, 24, 28, 32, 48 and pill/full. Minimum controls are 44 px, recommended controls are 48 px and the content container is 1200 px.

Motion is limited to 120, 180 and 240 ms; reduced motion resolves effectively to zero. The source frame contains no effects. `CodeKids/Shadow/Raised` is a disclosed responsive addition for the mobile menu, illustration and form surface: `0 12px 32px -8px rgb(30 27 75 / 12%)` plus `0 2px 6px rgb(30 27 75 / 8%)`.

## One Rule: Purple Means Action

Purple is reserved for primary actions, active/focus-adjacent emphasis and small navigational labels. Pink, yellow, sky and mint support course distinction and educational playfulness; they do not compete as primary action colors.

## Source synchronization

Figma variables/styles and CSS share the `--codekids-*` naming model. The latest source frame is not destructively rebound to the new variables in this scope. Implementation-only status colors and the raised effect are explicit exceptions, not claimed source values.
