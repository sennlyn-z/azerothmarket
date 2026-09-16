# AzerothMarket — Project Status

_Last updated: 2026-09-16_

## Current state
The site shell and World of Warcraft: Forever hub architecture are established. Production is deployed through GitHub → Cloudflare Workers. The first structured WoW Forever content database seed is now in the repository.

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
- Created `data/wow-forever/` as the structured content database layer.
- Added `data/wow-forever/entities.json` with the initial Forever entity registry and relationships.
- Added `data/wow-forever/sources.json` with authoritative source references.
- Added `data/wow-forever/README.md` with database rules and expansion strategy.

## Current documentation source of truth
- `PROJECT-CONTEXT.md` — durable project overview and continuation rules.
- `PROJECT-STATUS.md` — current progress and next priorities.
- `DESIGN-SYSTEM.md` — visual/UI rules.
- `SITE-ARCHITECTURE.md` — route/entity architecture.
- `SEO-GEO.md` — search/entity/discovery strategy.
- `CONTENT-RULES.md` — writing/content/data rules.
- `PAGE-TEMPLATE.md` — canonical implementation template.
- `data/wow-forever/README.md` — database-specific rules.
- `data/wow-forever/entities.json` — initial canonical Forever entity seed.
- `data/wow-forever/sources.json` — database source registry.

## Current database scope
The first seed covers the major announced Forever structure:
- World of Warcraft: Forever version entity
- Skyborne playable race
- Camping, Professions, and Legacy systems
- nine launch dungeons
- two launch raids
- Darkspear Islands battleground
- initial profession registry
- entity relationships back to the Forever hub

Detailed items, equipment, recipes, bosses, loot, quests, NPCs, zones, and market entities remain to be populated from authoritative data as it becomes available.

## Next priorities
1. Consolidate the canonical shell CSS into `styles.css` without changing the established visual result.
2. Audit remaining pages for header/logo/width consistency.
3. Build database-driven entity datasets for professions, dungeons, raids, items, equipment, recipes, bosses, loot, quests, zones, and currencies.
4. Convert the most useful database entities into crawlable entity pages with stable URLs.
5. Strengthen Forever hub cross-linking and entity relationships.
6. Add structured data where it accurately represents each page/entity.
7. Keep sitemap and internal links synchronized as the database grows.

## Important constraint
Do not redesign the site merely because a new page is being added. New work should extend the existing system unless a deliberate site-wide design change is requested. Do not invent missing game data; use explicit data-status fields and source references instead.
