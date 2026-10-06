## Round 10 (revised) - new colour theme + live animation layer (presentation only)
**Theme: Midnight Navy & Electric Cyan** (replaces the blue / teal-cyan scheme everywhere).
| Role | Old | New |
|---|---|---|
| Page / soft surfaces | `#F8FCFD` / `#EAF6F9` | `#F7FBFF` / `#EAF4FC` |
| Primary accent | `#087F98` | `#0A68A8` deep ocean blue |
| Bright accent | `#18A6BE` | `#0EA5E0` electric cyan |
| Highlight / lines on dark | `#91D6E3` | `#8FD3EC` ice cyan |
| Dark sections | `#073746` / `#102B3B` / `#06242E` | `#0A2A52` / `#061833` / `#04122A` |
| Text / secondary / border | `#152C39` / `#627784` / `#DFEAF0` | `#0B1F3A` / `#55708A` / `#DCE8F2` |
Done once in the `@theme` ramps in `index.css` (blue/sky/cyan/teal/indigo/slate classes) and by remapping every hardcoded hex/rgba in `src/*.css`, `src/**/*.tsx`, `index.html`. LinkedIn brand blue kept.

**Live layer (new, additive):** `src/live.css` + `src/lib/live.ts`, loaded last in `main.tsx`.
- Text: focus-pull (blur to sharp) on scroll reveal; light-sweep across plain h1/h2 headlines; breathing signal dots; slowly drifting cyan-blue gradient on primary buttons; ticker text slides in on change.
- Images: blur-to-sharp entrance; gentle float on large product "contain" artwork; periodic light glide across large image frames.
- Hero slider: on every slide change the new image un-blurs + settles, a light sweep crosses it, and the blurred backdrop drifts.
- Sections: divider line draws in on scroll.
- Animations pause when off-screen; all of it is skipped under `prefers-reduced-motion`. Only classes / CSS variables are added - no text, images, routes or layout are changed.
- Validation: `live.ts` loads under Node type-stripping; all CSS braces balanced. `vite build` / browser not run here (bundled node_modules are Windows-only). Run `npm install && npm run build`, then check Home, one product page and one inner page.

Revision: first pass was violet, which clashed with the blue/cyan banner artwork. Re-mapped to navy + cyan with a small amber accent (`#FFB347`, from the sunset in the artwork) on the slider progress dot.
