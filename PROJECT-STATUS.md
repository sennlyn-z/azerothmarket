# AzerothMarket — Project Status

_Last updated: 2026-09-20_

## Current state
The site shell and World of Warcraft: Forever hub architecture are established. Production is deployed through GitHub → Cloudflare Workers. The structured WoW Forever content database is now in place as a scalable entity/relationship layer. A global multilingual shell is also in place for English, Russian, German, French, Spanish, and Portuguese.

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
- Built crawlable entity pages for all nine confirmed launch dungeons and both announced raids under the Dungeons & Raids hierarchy.
- Upgraded the Dungeons & Raids hub from a placeholder to a real index of the nine dungeons and two raids.
- Added a global multilingual selector for English, Russian, German, French, Spanish, and Portuguese.
- Added automatic browser-language detection and saved language preference.
- Added Cloudflare Worker-first HTML injection so the language selector is available across existing and future HTML pages without duplicating page templates.
- Added multilingual SEO rules for the future rollout of source-authored localized URLs and `hreflang` annotations.
- Added a top-level `/guilds/` community directory for WoW Forever guild discovery, with dated region/faction/playstyle filters and source links to public recruitment posts.
- Added current September 2026 beta news coverage for the beta launch and Blizzard's known-issues update.
- Updated homepage discovery and sitemap to include Guilds and the newest beta news routes.

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

Blizzard confirms more than 600 new recipes, three campsite objects per profession, first campsite objects at profession skill 20, and advanced campsite objects coming from Blueprint recipes dropped by specific dungeon bosses. Blizzard also confirms Zephras Isle, Riverglades, Mount Hyjal, and Shen'dralas as Forever locations now tracked in the database.

## Data integrity rules
- Forever data is treated as its own dataset; Classic data is not silently copied into it.
- Unknown values remain null, empty, partial, or pending.
- Confirmed relationships carry source IDs.
- Drop rates are not estimated.
- Exact boss names, full loot tables, recipe lists, NPC coordinates, quest rewards, market prices, and other granular facts are only populated when individually source-backed.

## Next execution phase
1. Keep the WoW Forever News and Guilds sections current as beta information and community recruitment change.
2. Continue source-backed research for the dungeon Boss → Loot → Blueprint → Recipe graph.
3. Populate the highest-value confirmed item/equipment records and quest/zone records without importing unsupported Classic data.
4. Build the first data-driven entity page template, starting with Dungeons & Raids and Professions.
5. Connect entity cards and detail pages through the central content index.
6. Add structured data and canonical metadata to entity pages.
7. Begin source-authored localized HTML versions for the highest-value pages, starting with the homepage, WoW Forever hub, About Us, Dungeons & Raids hub, and Professions hub; connect equivalents with `hreflang`.
8. Generate/update sitemap entries as crawlable entity and localized routes are introduced.
9. Consolidate shared shell CSS only after verifying all existing pages remain visually identical.
10. Audit the complete site for header, width, responsive, navigation, internal-link, language, and SEO consistency.

## Important constraint
Do not redesign the site merely because a new page is being added. New work should extend the existing system unless a deliberate site-wide design change is requested. Do not invent missing game data; use explicit data-status fields and source references instead.
