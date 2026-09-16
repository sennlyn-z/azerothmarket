# AzerothMarket — Site Architecture

## Top-level routes
- `/`
- `/games/`
- `/news/`
- `/guides/`
- `/market/`
- `/about/`

## World of Warcraft: Forever
Primary hierarchy:

**Forever → Gold → Professions → Items → Equipment → Dungeons & Raids → Guides → Market**

Routes:
- `/games/world-of-warcraft/forever/`
- `/games/world-of-warcraft/forever/gold/`
- `/games/world-of-warcraft/forever/professions/`
- `/games/world-of-warcraft/forever/items/`
- `/games/world-of-warcraft/forever/equipment/`
- `/games/world-of-warcraft/forever/dungeons-raids/`
- `/games/world-of-warcraft/forever/guides/`
- `/games/world-of-warcraft/forever/market/`

## Entity model
Treat the Forever section as a connected graph rather than a collection of isolated articles.

Core entities:
- Gold / currency
- Profession
- Recipe
- Material
- Item
- Equipment
- Dungeon
- Raid
- Boss
- Loot
- Guide
- Market listing / quote context

## Internal-link relationships
- Profession → Recipe
- Recipe → Material
- Material → Item
- Item → Gold / Market
- Item → Equipment where relevant
- Dungeon/Raid → Boss
- Boss → Loot
- Loot → Item / Equipment
- Dungeon/Raid → Guide
- Guide → related Items / Materials / Market

## Page families
### Hub pages
Broad category pages that explain the section and link into its entities.

### Entity pages
Individual item, equipment, profession, dungeon, raid, boss, recipe, or guide pages. Deep pages should use breadcrumbs and related-entity navigation.

### News pages
Dated pages for changes, announcements, market developments, or other time-sensitive information. Include published and updated dates when applicable.

## Navigation rules
- Global nav stays stable.
- WoW Forever section navigation follows the canonical order.
- LIVE CHAT is independent and final/rightmost in the global header.
- New routes must be added to the appropriate hub and sitemap when they become meaningful public pages.

## Avoid
- Orphan pages.
- Duplicate hub pages with overlapping purpose.
- Placeholder routes that add no useful information.
- Creating a new top-level section when an existing hierarchy can contain the content cleanly.
