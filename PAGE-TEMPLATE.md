# AzerothMarket Page Template

This file is the canonical implementation reference for all new pages. Existing production pages remain the source of truth for page-specific content; new pages must inherit the shell below rather than inventing a new header/layout.

## 1. Global visual standard

- Content width: `1240px`
- Horizontal padding: `28px` desktop, `18px` below `560px`
- Header height: `72px`
- Background: `#07090d`
- Panel: `#0d1118`
- Border: `#202733`
- Primary text: `#f3f6fa`
- Muted text: `#9aa4b2`
- Brand accent: `#8ff0c0`
- Font: `system-ui, -apple-system, "Segoe UI", sans-serif`
- Header: logo fixed left; navigation group pushed right; `LIVE CHAT` always the final item
- Navigation: `14px`, weight `400`
- LIVE CHAT: `14px`, weight `800`, dark pill with green border and green status dot
- Logo: `AZEROTHMARKET` with the slanted green marker and hover/active animation

## 2. Canonical header

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

Do not put `LIVE CHAT` inside the content/navigation links unless a page has a documented legacy reason. Keep it as the independent final header control.

## 3. Shared CSS

Use `/styles.css` as the canonical shell. Page-specific CSS may extend it, but should not redefine the header, logo, navigation alignment, chat button, width, typography, or global colors unless there is a deliberate site-wide change.

## 4. Page structure

Preferred structure:

```html
<body>
  <header class="site-header">...</header>
  <main class="w">
    <div class="hero">...</div>
    <section>...</section>
    <section>...</section>
  </main>
  <footer class="w footer">...</footer>

  <!-- Keep the existing Tawk.to loader on pages that provide LIVE CHAT. -->
</body>
```

## 5. WoW Forever information architecture

Keep this hierarchy and ordering consistent:

**Forever → Gold → Professions → Items → Equipment → Dungeons & Raids → Guides → Market**

Use internal links between related entities instead of creating isolated pages.

Recommended relationship patterns:

- Profession → Recipe → Material → Item → Gold → Market
- Dungeon → Boss → Loot → Item → Equipment → Guide
- Farming Guide → Materials → Item Demand → Market

## 6. New entity pages

When expanding the database, create dedicated pages under the relevant game path, for example:

- `/games/world-of-warcraft/forever/items/<item>/`
- `/games/world-of-warcraft/forever/equipment/<item>/`
- `/games/world-of-warcraft/forever/professions/<profession>/`
- `/games/world-of-warcraft/forever/dungeons-raids/<dungeon>/`
- `/games/world-of-warcraft/forever/guides/<guide>/`

Every new page should include:

1. Unique `<title>` and meta description.
2. Canonical URL where appropriate.
3. Breadcrumbs for deep pages.
4. Clear H1 and concise answer-first introduction.
5. Related entity links.
6. Updated/published dates for time-sensitive content.
7. The canonical AzerothMarket header/footer.

## 7. Cleanup rule

Do not create one-off placeholder pages when an existing hub can serve the purpose. Prefer expanding the established hubs and entity relationships. Remove dead/orphaned pages only after confirming they are not part of the current navigation, sitemap, or internal-link architecture.
