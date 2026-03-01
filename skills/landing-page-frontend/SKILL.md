---
name: landing-page-frontend
description: Create high-converting, visually distinctive landing pages. Use when building marketing pages, product launches, SaaS homepages, or any single-page conversion-focused website. Guides section-by-section composition with anti-AI-slop principles and Vibe Discovery for unique aesthetics every time.
---

# Landing Page Design

## Overview
Build landing pages that convert AND captivate. This skill combines conversion-focused structure with distinctive visual design to create pages that stand out in an AI-saturated world. The goal: pages worth $50–100 that you'd be proud to sell.

---

## STEP 1: Design Thinking (Before Anything Else)

Before writing a single line of code — even before Vibe Discovery — understand the context:

- **Purpose**: What problem does this page solve? What action should the visitor take?
- **Audience**: Who lands here? What do they already know, want, or fear?
- **Tone**: Commit to an extreme. Brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian. Use these as starting points — design something true to the direction, not a copy of it.
- **Differentiation**: What's the ONE thing someone will remember about this page?
- **Constraints**: Framework, performance, accessibility, existing brand elements.

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

---

## STEP 2: Vibe Discovery (Mandatory — Run This Before Coding)

**No two landing pages should look alike, even for similar products.**

### Gather Context (Ask These Four Questions)

**Q1: What's one real-world place or object this brand would be?**
> Not "what industry" — an actual specific thing. A Tokyo convenience store at 2am. A grandmother's kitchen. A brutalist parking garage. A coral reef. The cockpit of a 747. A flea market in Marrakech. A 1970s recording studio.

**Q2: What's the ONE emotion someone should feel in the first 3 seconds?**
> Pick ONE: Calm. Energized. Curious. Trusted. Delighted. Impressed. Rebellious. Nostalgic. Inspired. Amused. Sophisticated. Welcomed. Intrigued. Confident.

**Q3: Pick TWO unexpected influences to collide:**
> Examples: "medical packaging + skateboard graphics", "spreadsheets + street art", "luxury hotel + punk zine", "NASA mission control + kindergarten", "Japanese convenience store + Victorian library"

**Q4: What should this page NEVER be mistaken for?**
> Name 2–3 specific things to actively avoid. "A crypto project", "A wellness app", "Something made by a bank", "Anything with purple gradients"

### Invent the Aesthetic (Don't Look Up — Create)

**COLOR INVENTION** — Derive from the place/object, don't recall "my usual blue":
- What colors exist in that real-world place/object from Q1?
- Extract 3–4 colors that feel authentic to that reference
- Invent specific hex codes fresh — don't reuse codes from previous projects
- Name your palette something evocative ("Midnight Bodega", "Rust Belt Morning")

**TYPOGRAPHY INVENTION** — Match the voice to the collision:
- What would text sound like in that place?
- Find a display font that embodies the Q3 collision
- Don't default to comfortable choices — browse Google Fonts with fresh eyes
- Consider: weight, width, contrast, quirks

**LAYOUT INVENTION** — Derive from the physical space:
- Is that space cramped or expansive? Grid-like or organic? Vertical or horizontal?
- What unexpected layout choice would embody the Q3 collision?

**MOTION INVENTION** — Match the emotion:
- Calm = barely perceptible. Energized = kinetic. Sophisticated = slow and deliberate.
- What's ONE signature motion that defines this page?

### Write the Vibe Spec (Before Coding)

```
VIBE NAME: [Invent a 2–3 word name]
REFERENCE: [The place/object from Q1]
EMOTION: [From Q2]
COLLISION: [From Q3]
ANTI-PATTERNS: [From Q4]

COLORS:
- Primary: [hex] — [why this color]
- Secondary: [hex] — [why]
- Background: [hex] — [why]
- Accent: [hex] — [why]
- Palette name: [evocative name]

TYPOGRAPHY:
- Display: [specific font name] — [why it fits]
- Body: [specific font name] — [why]
- Character: [describe the voice]

LAYOUT:
- Density: [sparse/balanced/dense]
- Shapes: [sharp/rounded/organic/mixed]
- Signature element: [one unusual layout choice]

MOTION:
- Level: [still/subtle/moderate/dynamic/chaotic]
- Signature animation: [one specific animation that defines this]

WILDCARD:
- One unexpected detail that doesn't "match" but makes it memorable
```

### Freshness Check (Before Proceeding)

- [ ] Did NOT reuse hex codes from previous projects
- [ ] Did NOT default to Inter, Nunito, or Space Grotesk — if yes, pick something else
- [ ] The Q3 collision is actually visible in the choices
- [ ] Someone could NOT mistake this for a previous page
- [ ] A wildcard is present that surprises even me

### Vibe Discovery Example

**Q1 – Place:** A Japanese train station at rush hour
**Q2 – Emotion:** Confident
**Q3 – Collision:** Transit signage + haute couture
**Q4 – Never mistaken for:** A meditation app, anything whimsical, startup-bro tech

```
VIBE NAME: Shinjuku Runway
REFERENCE: Japanese train station at rush hour
EMOTION: Confident
COLLISION: Transit signage + haute couture
ANTI-PATTERNS: No soft gradients, no playful illustrations, no rounded friendly shapes

COLORS:
- Primary: #1a1a1a — the black of train doors
- Secondary: #f5f5f0 — platform concrete, worn smooth
- Background: #fafaf8 — fluorescent-lit white
- Accent: #e60012 — JR line red, commanding attention
- Palette name: "Platform Edge"

TYPOGRAPHY:
- Display: Darker Grotesque — confident, slightly condensed, European edge
- Body: Noto Sans JP — clean utility, transit-inspired
- Character: Authoritative but not cold. Clear. Directional.

LAYOUT:
- Density: Rich but organized — like a station map
- Shapes: Sharp with intentional rounded exceptions (like train windows)
- Signature element: Strong horizontal bands dividing sections like train schedules

MOTION:
- Level: Subtle but precise
- Signature animation: Elements slide in from the side like arriving trains — horizontal, smooth, exact timing

WILDCARD:
- One element uses a fabric-like texture overlay — the haute couture collision
```

### Inspiration Starters (When Stuck on Q1)

**Spaces:** Night market in Bangkok | Empty museum at closing | Airport lounge at 4am | Vintage record store | Hospital waiting room | Casino floor | Greenhouse in winter | Observatory dome | Abandoned factory | Luxury yacht interior | 24-hour laundromat | Rare books room | Auto body shop | Space station module

**Objects:** 1980s synthesizer | Surgical instruments | Vintage luggage | Racing motorcycle | Antique compass | Industrial loom | Neon sign | Typewriter | Scientific glassware | Leather-bound book | Circuit board | Porcelain dishware

**Eras/Movements:** Soviet constructivism | Memphis design | Swiss international | Art nouveau | Bauhaus | De Stijl | Googie architecture | Streamline moderne | Brutalism | Japanese metabolism | Scandinavian modernism | Italian futurism

### Minimal Version (When User Says "Just Make a Landing Page")

Ask only:
1. "What's one place or object that captures this brand's energy?"
2. "What emotion should dominate?"
3. "What should this NEVER look like?"

Then synthesize a vibe from those three answers.

---

## STEP 3: Frontend Aesthetics

Apply these throughout implementation:

**Typography** — Choose fonts that are beautiful, unique, and interesting. Avoid Arial, Inter, and Roboto. Pair a distinctive display font with a refined body font. Let the voice match the Vibe Spec.

**Color & Theme** — Commit to the palette from Vibe Discovery. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

**Motion** — Prioritize CSS-only animations for HTML. Use Motion library for React. Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions. Scroll-triggered entrances, hover states that surprise.

**Spatial Composition** — Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density — never undecided middle ground.

**Backgrounds & Visual Details** — Create atmosphere and depth. Apply gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, or grain overlays to match the aesthetic.

**Match complexity to vision** — Maximalist designs need elaborate code with extensive animations. Minimalist designs need restraint, precision, careful spacing. Elegance comes from executing the vision well, not from adding more.

---

## STEP 4: Section Composition

**The 50% Rule** — Spend 50% of your time on the hero. It's the cover image, the hook, the first impression. Everything else flows from getting the hero right.

### 1. Hero (Primary Focus)
Must contain: headline, subheadline, primary CTA (+ optional secondary), social proof element (logos, testimonials, or trust badges), visual element.

Variations: split layout (text left, visual right) | centered with floating elements | full-bleed background with overlay text | asymmetric with decorative elements

### 2. Features / Benefits
Show what the product does:
- **Bento Grid**: Cards in asymmetric layout
- **Alternating Rows**: Image + text, flipping sides
- **Icon Grid**: Simple icons with short descriptions
- **Interactive Cards**: Hover states, micro-animations

### 3. Social Proof
- Logo carousel (marquee animation)
- Testimonial cards with photos
- Stats/metrics with animated counters
- Case study snippets

### 4. How It Works
- Numbered steps (01, 02, 03 pattern adds sophistication)
- Sticky scrolling with progressive reveal
- Timeline or flowchart visualization

### 5. Pricing (if applicable)
- 2–3 tier comparison
- Highlighted "recommended" tier
- Feature comparison table
- FAQ accordion below

### 6. Final CTA
- Repeat value proposition
- Strong headline
- Single focused action
- Urgency elements (if authentic)

### 7. Footer
- Navigation links, social icons, legal links
- Optional newsletter signup

---

## Animation Vocabulary

**Entrance Animations**
- `fade-in` — simple opacity transition
- `blur-in` — starts blurred, sharpens into view
- `slide-in` — direction-based entrance
- `scale-in` — grows from small to full size
- `stagger` — sequential reveal of child elements

**Continuous Animations**
- `marquee` — infinite horizontal scroll (logos, testimonials)
- `beam` — light traveling along a path or border
- `pulse` — subtle scale/opacity breathing
- `float` — gentle up/down movement
- `rotate` — continuous spin (icons, decorations)

**Interactive Animations**
- `hover-lift` — subtle Y translation + shadow
- `hover-glow` — border/shadow color change on hover
- `hover-reveal` — hidden element appears on hover
- `click-ripple` — material-style feedback

**Decorative Elements**
- Vertical grid lines (container-size based)
- Noodles/curved SVG connectors between elements
- Gradient orbs/blobs in background
- Grain/noise texture overlay
- Geometric shapes (circles, rectangles with rounded corners)

---

## Anti-AI-Slop Principles

### Icons — Avoid Lucide (Overused)
Use instead:
- **Iconify Solar**: Multiple styles (outline, broken, duotone)
- **Heroicons**: When you need Apple-like simplicity
- **Phosphor**: Flexible weight system
- **Custom SVGs**: For brand differentiation

### Fonts — Kill Inter/Roboto
Distinctive alternatives:
- **Display**: Newsreader, Playfair Display, Clash Display, Darker Grotesque
- **Body**: Outfit, Plus Jakarta Sans, Manrope, Satoshi
- **Mono**: JetBrains Mono, IBM Plex Mono, Fira Code

### Colors — No Purple Gradients
Bold alternatives:
- Deep navy + electric accent
- Warm neutrals + single pop color
- Monochromatic with tonal depth
- Dark mode with neon accents
- Earthy/organic palettes

### Layouts — Break the Grid
- Overlapping elements
- Diagonal sections
- Asymmetric spacing
- Container-breaking hero elements
- Negative space as design element

### Anti-Convergence Rules
1. **No hex code memory** — Generate colors fresh from the reference
2. **Font rotation required** — Cannot use the same display font in consecutive projects
3. **Collision must show** — If someone can't see BOTH influences from Q3, push harder
4. **Wildcard is mandatory** — Every vibe needs one element that doesn't "fit" but makes it unique
5. **Name it** — An unnamed vibe becomes generic. A named vibe has identity.

---

## Design Resources

**Hero Inspiration**
- Superhero (superhero.design) — curated hero sections
- Dribbble — search "hero section", "landing page"
- Awwwards — award-winning designs

**Section Patterns**
- Mobin — real websites with section breakdowns
- Bento Grids — card layout inspiration
- CTA Gallery — call-to-action patterns

**Typography**
- Google Fonts — free, accessible
- Fontshare — free quality fonts
- H1 Gallery — headline inspiration

**Icons & Logos**
- Iconify — unified icon API (Solar, Heroicons, Phosphor, etc.)
- Simple Icons — brand logos (SVG)
- Heroicons — Tailwind's icon set

---

## Prompt Patterns

### Hero Generation
```
Create a hero section for [PRODUCT TYPE].
Change text, names, and numbers to fit [BRAND].
Use Iconify Solar icons (duotone style).
Use [FONT] for headlines.
Add vertical container-size grid lines.
Add 01, 02, 03 step indicators for sophistication.
Use [COLOR] as primary, dark mode.
```

### Section Addition
```
Adapt a new [SECTION TYPE] section.
Match the hero's color scheme and typography.
Use marquee animation for logos.
Add fade-in blur-in entrance animation.
Keep the hero exactly as is.
```

### Animation Enhancement
```
Add beam animation to the primary button border.
The beam should be 1px, continuously traveling around the pill shape.
Add a subtle hover-lift effect to feature cards.
```

### Negative Prompts (Protect What's Working)
```
Don't change the hero section.
Keep the navbar exactly as is.
Don't modify the existing animations.
```

---

## Implementation Workflow

**Phase 1 — Research & Collect**
Run Vibe Discovery. Gather 5–10 hero references as wireframe inspiration. Choose icon set and font pairing. Define color palette via the Vibe Spec.

**Phase 2 — Hero Development**
Build the hero first. Iterate on colors, fonts, layouts. Add animations (beam, fade-in, etc.). Add decorative elements (noodles, grids, numbered steps). Refine until distinctive.

**Phase 3 — Section Build-Out**
Add sections one at a time — not all at once. Reference specific patterns per section. Maintain color/font consistency from hero. Add section-specific animations.

**Phase 4 — Polish**
Fix responsive breakpoints (mobile, tablet, desktop). Replace placeholder images. Optimize animations for performance. Test all interactive elements.

**Phase 5 — Presentation**
Create cover screenshot with infinity canvas layout. Show hero prominently. Include mobile and desktop views. Add subtle background (blurred gradient, pattern).

---

## Quality Checklist

### Visual Distinction
- [ ] No generic purple gradients
- [ ] Non-default icon set (not Lucide)
- [ ] Distinctive font pairing (not Inter, Roboto, Space Grotesk)
- [ ] Vibe Spec was written before coding
- [ ] At least one "memorable" wildcard element
- [ ] Consistent color system via CSS variables
- [ ] Collision from Q3 is visible in the final design

### Technical Quality
- [ ] Mobile responsive (no horizontal scroll)
- [ ] All images loading (no broken placeholders)
- [ ] Animations performant (no jank)
- [ ] Accessible color contrast
- [ ] Fast initial load

### Conversion Optimization
- [ ] Clear value proposition above the fold
- [ ] Single primary CTA visible without scrolling
- [ ] Social proof present
- [ ] Logical information hierarchy
- [ ] No friction to the main action
