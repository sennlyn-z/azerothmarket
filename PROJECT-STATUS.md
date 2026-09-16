# AzerothMarket — Project Status

_Last updated: 2026-09-16_

## Current state
The site shell and World of Warcraft: Forever hub architecture are established. Production is deployed through GitHub → Cloudflare Workers.

## Completed
- Established `1240px` global layout standard.
- Standardized header: brand left, navigation right, LIVE CHAT independent and rightmost.
- Added AZEROTHMARKET logo marker + hover/active treatment across the main Forever/core pages and major hubs.
- Standardized the WoW Forever information hierarchy.
- Built/retained Forever sections for Gold, Professions, Items, Equipment, Dungeons & Raids, Guides, and Market.
- Standardized News and About page width to the site system.
- Removed obsolete `/reviews/`, `/sell/`, and unused `app.js`.
- Updated sitemap after cleanup.
- Added `PAGE-TEMPLATE.md` as the canonical page implementation reference.
- Added permanent project-context documentation.

## Current documentation source of truth
- `PROJECT-CONTEXT.md` — durable project overview and continuation rules.
- `PROJECT-STATUS.md` — current progress and next priorities.
- `DESIGN-SYSTEM.md` — visual/UI rules.
- `SITE-ARCHITECTURE.md` — route/entity architecture.
- `SEO-GEO.md` — search/entity/discovery strategy.
- `CONTENT-RULES.md` — writing/content/data rules.
- `PAGE-TEMPLATE.md` — canonical implementation template.

## Next priorities
1. Consolidate the canonical shell CSS into `styles.css` without changing the established visual result.
2. Audit remaining pages for header/logo/width consistency.
3. Strengthen Forever hub cross-linking and entity relationships.
4. Expand useful entity pages: items, equipment, professions, dungeons/raids, bosses, recipes, and guides.
5. Add structured data where it accurately represents the page/entity.
6. Keep sitemap and internal links synchronized as the database grows.

## Important constraint
Do not redesign the site merely because a new page is being added. New work should extend the existing system unless a deliberate site-wide design change is requested.
