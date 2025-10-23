# Design Guidelines: Sekiyou Corporation - Sukusuku Series Official Homepage

## Design Approach
**Reference-Based Approach** drawing inspiration from child-focused product brands like Munchkin, Skip Hop, and OXO Tot, combined with clean Japanese e-commerce aesthetics. The design emphasizes trust, safety, and growth through warm, approachable visuals.

## Core Design Principles
1. **Trustworthy & Clean**: Parents researching products need clear, honest presentation
2. **Product-Centric**: Each of the 4 products deserves dedicated showcase space
3. **Growth-Oriented**: Visual language reflects children's healthy development
4. **Accessible Navigation**: Easy switching between products and information

## Color Palette

### Light Mode
- **Primary**: 25 85% 55% (warm coral-orange, evoking growth and energy)
- **Secondary**: 200 75% 50% (soft sky blue, trust and safety)
- **Neutral Background**: 40 20% 97% (warm off-white)
- **Text Primary**: 220 15% 20% (soft charcoal)
- **Text Secondary**: 220 10% 45% (medium gray)
- **Success/Accent**: 145 60% 45% (healthy green)

### Dark Mode
- **Primary**: 25 75% 60% (slightly lighter coral)
- **Secondary**: 200 60% 55% (brighter sky blue)
- **Background**: 220 15% 12% (deep charcoal)
- **Surface**: 220 12% 18% (raised surfaces)
- **Text Primary**: 40 15% 92% (warm white)
- **Text Secondary**: 220 8% 65% (light gray)

## Typography
- **Primary Font**: 'Noto Sans JP' (supports Japanese characters beautifully, clean and modern)
- **Headings**: 'Plus Jakarta Sans' (rounded, friendly geometric sans-serif)
- **Body**: Noto Sans JP, weight 400, 16px base
- **H1**: Plus Jakarta Sans, weight 700, 48px (desktop) / 32px (mobile)
- **H2**: Plus Jakarta Sans, weight 600, 36px (desktop) / 28px (mobile)
- **H3**: Plus Jakarta Sans, weight 600, 24px
- **Product Names**: Plus Jakarta Sans, weight 700, 28px

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, py-16, etc.)
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-8
- Component gaps: gap-8 or gap-12
- Container: max-w-7xl with px-4

## Component Library

### Navigation
- Sticky header with company logo (left), product links (center), contact CTA (right)
- Horizontal product selector: 4 product cards with icons/images
- Mobile: Hamburger menu with product grid overlay

### Hero Section
- **Large hero image**: Happy children using the products (eating scene, colorful table setting)
- Overlay with company tagline in Japanese and English
- Gradient overlay: from transparent to 220 20% 15% 80% for text readability
- CTA buttons with backdrop blur

### Product Showcase
- 2x2 grid on desktop (grid-cols-2 lg:grid-cols-2), single column on mobile
- Each product card includes:
  - Product image (white/neutral background)
  - Product name in both Japanese and romanized
  - 2-3 line description
  - "View Details" button
- Hover state: subtle lift (transform translateY(-8px)), shadow increase

### Product Detail Pages
- Split layout: Product image (60%) + Details (40%) on desktop
- Image gallery with thumbnail navigation
- Feature bullets with icons
- Age range indicator
- Safety certifications display
- Related products carousel at bottom

### Company/About Section
- Single column, max-w-4xl
- Company philosophy about children's growth
- Founder message or mission statement
- Trust indicators (years in business, certifications)

### Contact Section
- 2-column layout: Contact form (left) + Company info/map (right)
- Form fields: Name, Email, Product Interest (dropdown), Message
- Company address, phone, email displayed with icons

### Footer
- 3-column layout: Company info | Quick links | Social/Newsletter
- Product links repeated for easy access
- Copyright and privacy policy links

## Images

### Hero Section
- **Main Hero**: Wide landscape image (1920x800px) showing children happily eating with Sukusuku products. Bright, natural lighting with colorful table setting. Products should be visible but children are the focus. Use warm tones matching the color palette.

### Product Images
- **すぐーん (Sugoon)**: Clean product shot on white background, angled to show 3D form, 800x800px
- **ほーく (Hoku)**: Similar style, possibly showing both front and side angle
- **ストップスリップチョップスティック**: Chopsticks in use (child's hand holding) or styled flat lay
- **ポディッシュ (Podishu)**: Bowl/dish with food, showing non-slip feature if applicable

### Lifestyle Images
- 2-3 images throughout the site showing products in real dining scenarios
- Natural, documentary-style photography
- Focus on children's joy and independence while eating

### Icons
Use Heroicons (outline style) for:
- Navigation menu items
- Feature bullets (checkmarks, stars)
- Contact info (envelope, phone, map pin)
- Safety badges (shield, certificate)

## Animations
**Minimal and purposeful only**:
- Hero fade-in on load (opacity 0 to 1, 0.8s)
- Product card hover lift
- Smooth scroll to product sections
- Form field focus states (subtle border glow)

## Key Sections Flow
1. Hero with company introduction
2. Sukusuku Series overview (what makes it special)
3. 4 Products grid
4. Why Choose Us (3-4 benefits with icons)
5. Customer testimonials (if available) or safety certifications
6. Contact section
7. Footer

This creates a complete, professional product homepage that builds trust while showcasing each product effectively.