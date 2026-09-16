# AzerothMarket — Design System

## Layout
- Site max width: `1240px`.
- Shared wrapper: `width:100%; max-width:1240px; margin:0 auto; padding:0 28px`.
- At `<560px`, horizontal padding becomes `18px`.
- Header height: `72px`.

## Color tokens
```css
:root{
  --bg:#07090d;
  --panel:#0d1118;
  --border:#202733;
  --text:#f3f6fa;
  --muted:#9aa4b2;
  --accent:#8ff0c0;
  --blue:#6bb8ff;
}
```

## Typography
- Primary font: `system-ui, -apple-system, "Segoe UI", sans-serif`.
- Header navigation: `14px`, weight `400`.
- LIVE CHAT: `14px`, weight `800`.
- Body copy is readable and restrained; avoid oversized dense paragraphs.
- Headings use strong contrast and compact line-height.

## Header
```html
<header class="site-header">
  <div class="w nav">
    <a class="brand" href="/">AZEROTHMARKET</a>
    <nav class="links" aria-label="Primary navigation">
      <a href="/games/">Games</a>
      <a href="/games/world-of-warcraft/forever/">WoW Forever</a>
      <a href="/news/">News</a>
      <a href="/guides/">Guides</a>
      <a href="/market/">Market</a>
      <a href="/about/">About Us</a>
    </nav>
    <a class="chat" href="#" onclick="Tawk_API.maximize();return false">LIVE CHAT</a>
  </div>
</header>
```

Rules:
- Brand stays left.
- Nav uses `margin-left:auto` and sits on the right.
- LIVE CHAT is separate from ordinary nav links and is always the final control.
- Do not create page-specific header positioning.

## Brand mark
The AZEROTHMARKET wordmark uses a thin slanted green marker at the left, heavy/tight lettering, slightly expanded letter spacing, and subtle hover/active motion.

Canonical treatment:
```css
.brand{
  position:relative;display:inline-flex;align-items:center;flex:0 0 auto;
  padding-left:13px;color:#f3f6fa;font-weight:950;letter-spacing:.095em;
  transition:color .18s ease,letter-spacing .18s ease,transform .18s ease
}
.brand:before{
  content:"";position:absolute;left:0;width:3px;height:18px;border-radius:2px;
  background:#8ff0c0;transform:skewX(-18deg);
  box-shadow:0 0 0 rgba(143,240,192,0);
  transition:box-shadow .18s ease,height .18s ease
}
.brand:hover{color:#8ff0c0;letter-spacing:.12em;transform:translateY(-1px)}
.brand:hover:before{height:20px;box-shadow:0 0 12px #8ff0c0}
.brand:active{color:#8ff0c0;transform:translateY(0) scale(.98)}
.brand:active:before{box-shadow:0 0 16px #8ff0c0}
```

## LIVE CHAT
- Dark background.
- Green border.
- Rounded pill.
- Green status dot.
- Must invoke Tawk.to through the existing `Tawk_API.maximize()` behavior.

## Content components
Preferred components:
- Hero / intro block
- Section heading with eyebrow label
- Cards / entity cards
- Metric rows for key facts
- Tags for category/context
- Primary and secondary buttons
- Breadcrumbs on deep entity pages
- Related entity links
- Dated update blocks for time-sensitive content

Keep borders, radii, spacing, and text hierarchy consistent. Prefer restrained density over decorative effects.

## Responsive behavior
- Below `900px`, ordinary header navigation may collapse/hide while the independent chat control remains available where practical.
- Hero grids collapse to one column.
- Card grids reduce from four columns to two, then one below `560px`.
- Never allow horizontal overflow.
