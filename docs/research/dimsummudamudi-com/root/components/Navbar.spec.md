# Navbar Specification

## Overview
- **Target file:** `src/components/sites/dimsummudamudi-com/root/Navbar.tsx`
- **Screenshot:** `docs/design-references/dimsummudamudi-com/root/desktop.png`
- **Interaction model:** scroll-driven sticky header + click-driven mobile drawer

## Structure
- Left: Logo (`/images/logo-muda-mdui-untuk-we-scaled.png`)
- Center: Nav links (`Keunggulan`, `Menu`, `Testimoni`, `Kontak`)
- Right: Button `Pesan Sekarang` linking to WhatsApp with pre-filled greeting
- Mobile: Hamburger toggle button + sliding sheet / drawer

## Computed Styles
- Height: 80px (scrolled: 70px)
- Initial state: Background transparent, backdrop-blur-md, text white/orange
- Scrolled state (>50px): Background rgba(255, 255, 255, 0.95) in light mode or dark frosted blur, shadow-md, text dark/contrast
- Transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Button: Background `#FF8E00` -> `#FF7A00`, text white, rounded-full, px-6, py-2.5, font-semibold

## Links
- Keunggulan: `#keunggulan`
- Menu: `#menu`
- Testimoni: `#testimoni`
- Kontak: `#kontak`
- CTA WhatsApp: `https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20ingin%20memesan%20dimsum.%20Mohon%20informasi%20menu%20dan%20harganya.%20Terima%20kasih.`
