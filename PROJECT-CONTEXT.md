# AzerothMarket — Permanent Project Context

## Purpose
AzerothMarket is a structured game-economy and virtual-asset information site. The current primary coverage is World of Warcraft: Forever, with an architecture designed to expand to additional games and economies.

## Product direction
- Build an interconnected game-economy database, not a generic content/guide site.
- Prioritize useful entity relationships, concise answer-first content, market context, dated updates, and strong internal linking.
- New pages should feel like part of one product and inherit the established site shell.

## Current brand
- Site/brand: **AZEROTHMARKET**
- Visual accent: `#8ff0c0`
- Dark, technical, premium visual language.
- Logo uses a thin slanted green marker and subtle hover/active motion.

## Global UI standard
- Max content width: `1240px`
- Horizontal padding: `28px` desktop, `18px` below `560px`
- Header height: `72px`
- Background: `#07090d`
- Panel: `#0d1118`
- Border: `#202733`
- Primary text: `#f3f6fa`
- Muted text: `#9aa4b2`
- Accent: `#8ff0c0`
- Font: `system-ui, -apple-system, "Segoe UI", sans-serif`
- Header: brand fixed left; navigation pushed right; LIVE CHAT is the independent final/rightmost control.
- Tawk.to loader/button must remain functional on pages that expose LIVE CHAT.

## Primary navigation
Games · WoW Forever · News · Guides · Market · About Us · LIVE CHAT

## WoW Forever architecture
Forever → Gold → Professions → Items → Equipment → Dungeons & Raids → Guides → Market

Core relationship patterns:
- Profession → Recipe → Material → Item → Gold → Market
- Dungeon → Boss → Loot → Item → Equipment → Guide
- Farming Guide → Materials → Item Demand → Market

## URL architecture
- `/games/`
- `/games/world-of-warcraft/forever/`
- `/games/world-of-warcraft/forever/gold/`
- `/games/world-of-warcraft/forever/professions/`
- `/games/world-of-warcraft/forever/items/`
- `/games/world-of-warcraft/forever/equipment/`
- `/games/world-of-warcraft/forever/dungeons-raids/`
- `/games/world-of-warcraft/forever/guides/`
- `/games/world-of-warcraft/forever/market/`
- `/news/`
- `/about/`
- `/guides/`
- `/market/`

Deep entity pages should live beneath the relevant Forever section.

## Content / SEO / GEO rules
Every meaningful new page should normally have:
1. Unique title and meta description.
2. Canonical URL when appropriate.
3. Breadcrumbs on deep pages.
4. Clear H1 and answer-first introduction.
5. Related entity/internal links.
6. Published/updated dates for time-sensitive information.
7. Structured data when it genuinely matches the page/entity.

Avoid keyword stuffing, isolated pages, and duplicate content. Build entity relationships and topical depth.

## Development rules
- Preserve existing production pages unless a cleanup decision is explicitly made.
- Reuse the canonical shell from `PAGE-TEMPLATE.md`.
- Do not invent a new header, width, navigation alignment, logo treatment, chat treatment, or typography for individual pages.
- Prefer shared CSS in `styles.css`; page-specific CSS should only extend the shared system.
- Keep navigation, sitemap, and internal links synchronized when adding/removing routes.
- Verify the current `main` branch before editing files.

## Deployment
- GitHub repository: `sennlyn-z/azerothmarket`
- Branch: `main`
- Cloudflare Worker: `azerothmarket`
- Production domain: `https://azerothmarket.com`
- Worker domain: `https://azerothmarket.sennlyn.workers.dev/`
- Wrangler assets directory is the repository root.

## Working principle for future chats
When asked to continue the project, first read this file, `PROJECT-STATUS.md`, `DESIGN-SYSTEM.md`, `SITE-ARCHITECTURE.md`, `SEO-GEO.md`, `CONTENT-RULES.md`, and `PAGE-TEMPLATE.md` as needed. Treat these files as the durable project source of truth and continue from the recorded status instead of asking the user to repeat the established design or architecture.
