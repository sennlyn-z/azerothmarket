# AzerothMarket — Project Status

_Last updated: 2026-09-16_

## Current state
The site shell and World of Warcraft: Forever hub architecture are established. Production is deployed through GitHub → Cloudflare Workers. The structured WoW Forever content database is now in place as a scalable entity/relationship layer.

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
- Added `entities.json` with the initial Forever entity registry and relationships.
- Added `sources.json` with authoritative source references.
- Added `README.md` with database rules and expansion strategy.
- Added `professions.json` and `recipes.json` schema/data seeds.
- Added `dungeons.json`, `bosses.json`, `blueprints.json`, and `loot.json` as the Dungeon → Boss → Loot/Blueprint relationship layer.
- Added `items.json` and `equipment.json` as the item-facing entity layers.
- Added `content-index.json` as the central relationship/index contract for future crawlable entity pages.
- Added `zones.json` with four source-backed Forever zone seeds: Zephras Isle, Riverglades, Mount Hyjal, and Shen'dralas.
- Added `quests.json`, `npcs.json`, and `currencies.json` as the next population-ready entity layers.

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
- `data/wow-forever/content-index.json` — entity relationship/index contract.

## Current database scope
The database now has schema coverage for the core content graph:
- World of Warcraft: Forever version entity
- Skyborne playable race
- Camping, Professions, and Legacy systems
- nine launch dungeons
- two launch raids
- Darkspear Islands battleground
- ten profession records and profession-specific campsite facts
- recipes and Blueprints
- dungeon bosses and loot relationships
- items and equipment
- zones, quests, NPCs, and currencies

Blizzard currently confirms more than 600 new recipes, three campsite objects per profession, first campsite objects at profession skill 20, and advanced campsite objects coming from Blueprint recipes dropped by specific dungeon bosses. Blizzard also confirms four useful zone-level seeds now tracked in the database: Zephras Isle, Riverglades, Mount Hyjal, and Shen'dralas. citeturn1search0turn1search1

## Data integrity rules
- Forever data is treated as its own dataset; Classic data is not silently copied into it.
- Unknown values remain null, empty, partial, or pending.
- Confirmed relationships carry source IDs.
- Drop rates are not estimated.
- Exact boss names, full loot tables, recipe lists, NPC coordinates, quest rewards, market prices, and other granular facts are only populated when individually source-backed.

## Next execution phase
1. Continue source-backed research for the dungeon Boss → Loot → Blueprint → Recipe graph.
2. Populate the highest-value confirmed item/equipment records and quest/zone records without importing unsupported Classic data.
3. Build the first data-driven entity page template, starting with Dungeons & Raids and Professions.
4. Connect entity cards and detail pages through the central content index.
5. Add structured data and canonical metadata to entity pages.
6. Generate/update sitemap entries as crawlable entity routes are introduced.
7. Consolidate shared shell CSS only after verifying all existing pages remain visually identical.
8. Audit the complete site for header, width, responsive, navigation, internal-link, and SEO consistency.

## Important constraint
Do not redesign the site merely because a new page is being added. New work should extend the existing system unless a deliberate site-wide design change is requested. Do not invent missing game data; use explicit data-status fields and source references instead.
