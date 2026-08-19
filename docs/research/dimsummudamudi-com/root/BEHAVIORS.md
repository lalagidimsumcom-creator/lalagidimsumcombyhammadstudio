# Interaction & Behavior Specification

## Site: Dimsum Muda Mudi (dimsummudamudi.com)

### 1. Header & Navigation
- **Default State:** Transparent background, white text / orange accents, logo on left, navigation links in center, 'Pesan Sekarang' CTA button on right.
- **Scrolled State:** Sticky at top with solid background (`#ffffff` or blur glassmorphism), subtle box shadow (`0 4px 20px rgba(0,0,0,0.08)`), transition: `all 0.3s ease`.
- **Mobile Menu:** Drawer / sliding offcanvas menu triggered by hamburger icon.

### 2. Hero Section
- **Visuals:** Warm gradient background with dynamic pink/orange ambient radial glow and floating floating dimsum basket mockups (`2-1536x1536.png`, `3-1536x1536.png`).
- **Wave Divider:** SVG wave-brush bottom divider smoothly blending into the next section.
- **Buttons:**
  - Primary CTA: "Order Sekarang ->" with hover lift and arrow translation.
  - Secondary CTA: "Lihat Paket Reseller" smooth scrolling to `#menu`.

### 3. Marquee Banner
- **Behavior:** Continuous horizontal marquee ticker running at slight rotation (1.5deg) with dimsum flavor badges separated by ✦ stars.
- **Animation:** CSS infinite linear scroll `transform: translateX(-50%)` duration ~25s.

### 4. Keunggulan (Why Choose Us)
- **Cards:** 4 feature cards with subtle gradient borders, icon in top left, bold title, and description.
- **Hover:** translateY(-8px), box shadow expansion, border glow.

### 5. Gabung Member & Loyalty Reward
- **Layout:** 2-column split (Left: Member stamp card illustration `Untitled-design-7-1536x1536.png`, Right: Loyalty reward description with step-by-step stamp collection instructions).

### 6. Menu Section
- **Tabs:** 3 tabs ("Dimsum 25pcs", "Dimsum 50pcs", "Dimsum 100pcs") with pill styling.
- **Interaction:** Instant tab switching with smooth crossfade opacity transition.
- **Product Cards:** Food image at top, title, price badge in bold brand color, and WhatsApp direct order button with pre-filled message parameter.
- **Hover:** translateY(-8px), subtle image zoom.

### 7. Reseller Business Opportunity & Counters
- **Content:** Compelling copywriting about starting a dimsum business with low capital, high margins, and halal certification.
- **Statistics:** Animated counters for Resellers (88+ / 138+), Kapasitas Produksi (75,000+), and Produk Terjual (100,000+).

### 8. Testimonials
- **Reviews:** Real Shopee/WhatsApp buyer reviews with 5-star ratings, buyer username, product variant, and genuine feedback text.
- **Display:** Multi-column infinite marquee scroll or responsive grid.

### 9. Video Review Section
- **Media:** 3 hosted short-form vertical videos with inline video playback, hover zoom/lift, and custom playback controls.

### 10. FAQ (Frequently Asked Questions)
- **Component:** Accordion with plus/minus icons, smooth collapsible content, and JSON-LD schema support.

### 11. Store Location & Contact
- **Map:** Embedded Google Maps iframe for Bukit Duri, Tebet, Jakarta Selatan.
- **Cards:** 4 info cards (Alamat Toko, Jam Operasional, Pesan via WhatsApp, Area Pengiriman) with hover lift.

### 12. Footer & Floating CTA
- **Footer:** Brand logo, tagline, informative links, menu navigation, and copyright bar.
- **Floating Button:** Fixed bottom-right WhatsApp button with pulsing ping animation.
