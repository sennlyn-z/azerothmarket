# World of Warcraft: Forever Content Database

This directory is the structured content layer for AzerothMarket's World of Warcraft: Forever ecosystem.

## Purpose

The database is designed to support:

- entity pages
- category pages
- internal linking
- SEO/GEO
- structured data
- guides
- market relationships
- future search/filtering

## Data principles

1. Prefer confirmed information from Blizzard's official World of Warcraft: Forever announcements and published materials.
2. Mark information as `confirmed`, `partial`, or `pending` rather than filling gaps with assumptions.
3. Keep source references with the data whenever practical.
4. Do not invent live market prices, drop rates, full loot tables, recipe lists, or mechanics that Blizzard has not published.
5. Keep stable entity IDs even when display names or descriptions change.
6. Use relationships between entities rather than duplicating the same information across pages.

## Current seed

The first seed covers the major Forever content structure announced by Blizzard:

- game/version
- new playable race
- professions system
- camping system
- nine launch dungeons
- two launch raids
- launch battleground
- itemization/content model

As the beta client and authoritative data become available, this seed should be expanded into detailed items, equipment, recipes, bosses, loot, quests, NPCs, zones, and market entities.

## Files

- `entities.json` — canonical entity registry and relationships
- `sources.json` — source registry used by the seed data

Future datasets should be added by entity type rather than putting the entire database into one file.
