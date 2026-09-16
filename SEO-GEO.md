# AzerothMarket — SEO / GEO Rules

## Objective
Build durable discoverability around entities and relationships so search engines and AI systems can understand what AzerothMarket is, what each page represents, and how game-economy concepts connect.

## Page fundamentals
Meaningful pages should normally contain:
- Unique title.
- Specific meta description.
- One clear H1.
- Answer-first introductory paragraph.
- Descriptive section headings.
- Canonical URL where appropriate.
- Breadcrumbs for deep pages.
- Relevant internal links.
- Published/updated dates when information can change over time.

## Entity-first structure
A page should make its primary entity explicit near the top. Example pattern:

`Item → what it is → where it comes from → what it is used for → related profession/recipe → equipment relevance → gold/market context`

Do not repeat the entity name unnaturally just to increase keyword density.

## Internal linking
Use contextual links to create a graph:
- Profession → Recipe → Material → Item → Gold → Market
- Dungeon → Boss → Loot → Item → Equipment → Guide

Link to the most specific useful page rather than repeatedly linking only to hubs.

## Multilingual SEO
- The current global selector provides client-side Russian, German, French, Spanish, and Portuguese translation for all HTML pages.
- Client-side translation is primarily a user-experience compatibility layer; it should not be treated as the final SEO localization strategy.
- For high-value pages, create source-authored localized HTML URLs and connect each language equivalent with `rel="alternate" hreflang="..."` annotations.
- Each localized URL should have its own self-referencing canonical URL and language-appropriate title, meta description, H1, and primary content.
- Do not create language URLs that contain only translated navigation while leaving the main content in English.
- Keep entity IDs, source references, data relationships, and canonical game terminology stable across languages.

## GEO / AI readability
- Put the direct answer early.
- Use short factual sections and clear labels.
- Prefer explicit relationships over vague prose.
- Include useful attributes, prerequisites, sources, uses, and related entities.
- Keep time-sensitive facts visibly dated.
- Avoid unsupported claims and filler.

## Structured data
Add JSON-LD only when the schema accurately represents the page. Keep structured data aligned with visible content. Do not manufacture ratings, prices, reviews, availability, or other unsupported fields.

## Indexing discipline
- Sitemap should contain real public pages.
- Remove obsolete/dead routes from navigation and sitemap.
- Avoid thin placeholder pages.
- Avoid duplicate titles/descriptions across entity pages.
- Deep entity URLs should be stable and descriptive.
- When localized URLs are introduced, include their language variants in sitemap strategy and keep alternate/canonical relationships consistent.
