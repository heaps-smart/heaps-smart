---
name: Edgy Interactive Redesign
overview: Transform the site with an abstract, interactive homepage featuring morphing "H" and "S" letters (inspired by 3sidedsquare), and create a minimal, stripped-down projects page.
todos:
  - id: create-abstract-letters
    content: Create AbstractLetters component with interactive H & S letterforms using Three.js or Canvas
    status: pending
  - id: redesign-homepage
    content: Redesign homepage with full-screen interactive letters, minimal layout, and centered typography
    status: pending
    dependencies:
      - create-abstract-letters
  - id: minimal-projects-page
    content: Strip down projects page to simple title list with hover reveals, remove card layout
    status: pending
  - id: update-design-tokens
    content: Update Tailwind config with edgier color palette and typography settings if needed
    status: pending
---

# Edgy Interactive Site Redesign

## Homepage Transformation

### Interactive H & S Component
Create a new abstract, interactive component featuring the letters "H" and "S" that responds to user interaction:

- **File**: `src/app/_components/animations/AbstractLetters.tsx`
  - Use Three.js or Canvas API to create morphing, interactive letterforms
  - Letters should respond to mouse/touch movement (distortion, rotation, scale)
  - Abstract aesthetic - wireframe, particles, or geometric decomposition
  - Smooth animations and transitions
  - Performance optimized with requestAnimationFrame

### Homepage Layout (`src/app/page.tsx`)
- Replace current content-heavy layout with minimal, centered design
- Full-screen interactive H & S component as hero
- Minimal typography overlay (tagline, CTA)
- Remove or drastically simplify sections (keep only essential navigation)
- Dark or high-contrast background to make letters pop
- Smooth scroll reveals for any remaining content

## Projects Page Minimalism

### Stripped Down Projects Page (`src/app/projects/page.tsx`)
- Remove card-based layout
- Simple vertical list or grid of project titles only
- Hover reveals minimal details (one-line description)
- Click navigates to project detail
- Remove images/videos from list view
- Minimal typography, maximum whitespace
- Consider monospace or bold sans-serif for titles

### Simplified Project Card Component
- Update `InnovationProjectCard.tsx` or create new minimal variant
- Text-only, no images
- Hover states with subtle animations
- Clean, minimal styling

## Design System Updates

### Color Palette (`tailwind.config.ts`)
- Consider darker, edgier palette (black, white, with yellow accent)
- Or keep warm tones but increase contrast
- Add new color tokens for interactive states

### Typography
- Bold, experimental typography choices
- Consider variable fonts for dynamic letterforms
- Tight tracking, large sizes for impact

## Implementation Details

1. **AbstractLetters Component**:
   - Three.js for 3D letterforms OR Canvas 2D for performance
   - GSAP for smooth animations
   - Mouse/touch interaction handlers
   - Responsive scaling

2. **Homepage**:
   - Minimal header (logo only, or hidden)
   - Full-screen canvas with H & S
   - Overlay text positioned carefully
   - Smooth transitions between states

3. **Projects Page**:
   - Remove `InnovationProjectCard` usage
   - Create simple list component
   - Minimal hover effects
   - Fast, clean navigation

## Files to Modify

- `src/app/page.tsx` - Complete homepage redesign
- `src/app/projects/page.tsx` - Minimal projects list
- `src/app/_components/animations/AbstractLetters.tsx` - New interactive component
- `src/app/_components/InnovationProjectCard.tsx` - Simplify or create minimal variant
- `tailwind.config.ts` - Add new design tokens if needed





