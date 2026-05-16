# HELIOS — Orbital Intelligence for a Connected World

> **Elevator Pitch (Tagline)**
> *"Where global data meets spatial intuition — HELIOS transforms raw economic and geopolitical intelligence into an immersive 3D orbital experience, turning complexity into clarity with a single click."*

---

## Project Story

### What Inspired Me

The idea for HELIOS was born from a simple frustration: ** dashboards are boring, and the world is not flat. ** Every time I opened a traditional analytics tool to research international markets or compare countries, I was met with endless tables, static charts, and overwhelming rows of numbers. The data was there, but the *context* was missing. Geography matters. Proximity matters. The relationship between a policy shift in Germany and a market ripple in Brazil is not best understood through a spreadsheet — it is understood through space.

I imagined a tool that felt less like a spreadsheet and more like a **satellite command center** — something cinematic, intuitive, and alive. I wanted to build an interface where clicking on a country didn't just open a pop-up, but triggered a **tactical intelligence briefing**. Where the globe itself breathed with data. Where exploring the world felt like piloting a futuristic reconnaissance system.

That vision became HELIOS.

### What I Learned

Building HELIOS taught me that **frontend engineering is an art form**, not just a utility. I learned that the difference between a good application and a great one lives in the details no user consciously notices — the $ 0.3 $-second spring animation on a panel slide, the subtle opacity shift on a hover state, the way a scan-line moves across the screen at exactly the right speed to feel cinematic but not distracting.

I deepened my understanding of **SVG coordinate systems and orthographic projections**. Mapping real-world latitude and longitude onto a 3D sphere that rotates smoothly in response to mouse drag is deceptively complex. The math behind it — calculating rotation vectors, handling drag-to-rotation sensitivity, and managing state across `requestAnimationFrame` loops — was a rewarding challenge.

I also learned the value of **iterative design**. HELIOS did not emerge fully formed. It started as a simple light-themed globe. Then it became darker, more cinematic. Then it gained orbital rings. Then holographic HUD overlays. Then floating data nodes. Each version was a conversation — a decision to push the aesthetic further without sacrificing performance or usability. This taught me that the best products are **sculpted**, not assembled.

### How I Built This Project

The architecture of HELIOS is built around three core pillars: **the Globe**, **the Data Layer**, and **the Intelligence Panel**.

**The Globe** is rendered using `react-simple-maps` with an orthographic projection. It is not a true 3D WebGL model — it is a mathematically projected 2D SVG that *feels* three-dimensional. I wrote custom mouse-drag handlers that map pixel movement to rotational displacement:

$$ \Delta\lambda = \text{drag}_x \times \text{sensitivity} $$
$$ \Delta\phi = \text{drag}_y \times \text{sensitivity} $$

Auto-rotation is handled via a `requestAnimationFrame` loop that continuously increments the longitude, giving the globe its gentle, living spin. The landmasses and oceans are styled with carefully tuned color palettes — deep greens (`#064e3b`) for continents, dark blues (`#0f172a`) for oceans — with SVG gradients and blur filters creating an atmospheric depth effect.

**The Data Layer** is a TypeScript-typed mock database of 10 countries (India, USA, Japan, Germany, Brazil, UK, France, China, Australia, Canada). Each country object contains nested structures for economy, education, technology, tourism, and startup ecosystems. This allows the panel to dynamically render specialized intelligence based on which country is selected, without requiring a backend API.

**The Intelligence Panel** uses `framer-motion` for its spring-physics slide-in animation. It features a tab-based navigation system that switches between five data modes. The "Synthesize Tactical Brief" feature simulates an AI analysis: it triggers a loading state, waits $ 1.5 $ seconds, and then generates a structured markdown-style summary combining GDP trajectory, education policy focus, R&D intensity, and startup ecosystem status — all dynamically interpolated from the selected country's data.

The landing page was crafted separately as a narrative experience. It features an interactive colored waveform graphic, holographic HUD rings, floating glassmorphism data nodes, and cinematic scroll-triggered animations — all designed to sell the "Orbital Intelligence" concept before the user even launches the app.

### The Challenges I Faced

**Challenge 1: Country Click Matching**
The initial version of HELIOS could not reliably match clicked countries to the data layer. The TopoJSON geography file uses varying property names (`name`, `NAME`, `iso_a3`, `ISO_A3`) and numeric IDs that don't cleanly map to alpha-3 codes. I solved this by implementing a **fuzzy matching strategy** that checks multiple fields and even supports alternate country names, ensuring robust detection across different map datasets.

**Challenge 2: Globe Rotation & Drag Conflict**
Early versions had a critical bug: the rotation coordinates were stuck when dragging, and the globe felt unresponsive. The issue was that the rotation state was being updated both by the auto-rotation loop and the drag handler simultaneously, causing conflicting state mutations. I fixed this by introducing a `hasMoved` flag and carefully separating the drag-start baseline from the live rotation state, so mouse movement calculates a **delta** from the initial grab point rather than overriding absolute coordinates.

**Challenge 3: Preserving the Aesthetic During Enhancements**
One of the most difficult creative challenges was adding heatmap overlays, orbital rings, and particle effects **without destroying the original green HELIOS aesthetic**. The user explicitly requested that the deep green landmasses remain dominant. I solved this by using **low-opacity additive blending** (`mix-blend-screen`), soft radial gradients with high transparency, and glow filters that enhance rather than replace the base colors. Secondary colors (cyan, orange, red) appear as subtle accents — pulse rings, HUD markers, and scan waves — rather than solid overlays.

**Challenge 4: Performance with Particles and Animations**
Adding 40 floating particles, spinning orbital rings, and a moving scan wave raised concerns about frame rate drops. I optimized by using CSS keyframe animations for simple loops (spinning rings, scan waves) and reserving `framer-motion` for complex, state-driven animations (panel slides, hover effects). This hybrid approach keeps the app running at a smooth 60 FPS.

---

## Technology Stack

### Languages
- **TypeScript** — Type-safe frontend development with strict interfaces for country data structures
- **CSS / Tailwind CSS** — Utility-first styling with custom animations, grid patterns, and glassmorphism effects

### Frameworks & Libraries
- **React 18** — Component-based UI architecture with hooks (`useState`, `useEffect`, `useCallback`, `useMemo`)
- **Vite** — Lightning-fast development build tool and bundler
- **react-simple-maps** — SVG-based geographic visualization with orthographic projection support
- **framer-motion** — Physics-based animations, spring transitions, and AnimatePresence for mount/unmount effects
- **lucide-react** — Consistent, lightweight icon system
- **shadcn/ui** — Headless UI component primitives built on Radix UI, styled with Tailwind

### Design & Styling
- **Tailwind CSS** — Core styling engine with custom `tailwind.config.js` extensions
- **Radix UI** — Accessible, unstyled primitives for Tabs, Dialogs, and Buttons
- **Custom SVG Filters** — `feGaussianBlur` glow filters and radial gradients for atmospheric effects

### Data & State
- **Mock Data Architecture** — TypeScript interfaces and static JSON-like objects for 10 countries across 5 intelligence dimensions
- **React Hooks** — Local state management for globe rotation, country selection, currency conversion, and AI brief generation

### Infrastructure
- **Supabase Client (`@supabase/supabase-js`)** — Integrated into the project scaffold for future backend/database connectivity
- **Biome** — Linting and code formatting
- **pnpm** — Package management

### Animation Techniques
- **CSS Keyframes** — For infinite loops (spinning rings, scan waves, ping pulses)
- **Framer Motion Variants** — For orchestrated enter/exit animations and gesture-based interactions
- **SVG SMIL (`<animate>`)** — For native pulse effects on tactical markers within the SVG globe

---

> *"HELIOS doesn't just display data — it orbits it."*
