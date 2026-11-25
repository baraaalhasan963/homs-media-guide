# Decisions Log

## Architecture Decision Records (ADRs)

- **ADR-001 [2026-11-23]:** Memory Bank initialized to maintain persistent project context and alignment with core engineering protocol.
- **ADR-002 [2026-11-23]:** Navigation Architecture Redesign:
  - Migrated from a single flat horizontal 12-tab list (with dry numbers) to a 4-Pillar hierarchical structure + Home base (`home`, `field-ops`, `content-brand`, `governance`, `toolkit`).
  - Integrated primary navigation directly into the top Header bar.
  - Eliminated icons and numerical badges from tabs for a clean, minimal editorial design.
  - Simplified header by keeping only the cream-styled logo on the right and search on the left.
- **ADR-003 [2026-11-23]:** Unified Sticky Navigation Container:
  - Combined Header and Sub-tabs Navigation inside a single shared `sticky top-0` container.
  - Replaced decoupled sticky offsets (`top-[53px]`) to eliminate visual clipping, jitter, and z-index overlap when scrolling.
- **ADR-004 [2026-11-25]:** Director Guide Integrated Reference Architecture (Phases 1–3):
  - Standardized all 5 tabs of the `director` role on shared floating `StickySubTabs` (`src/components/roles/shared/StickySubTabs.tsx`) and `TemplateCopyCard` (`src/components/roles/shared/TemplateCopyCard.tsx`) while keeping all existing approved policy text verbatim and appending supplemental governance tables, guiding SLAs, and copyable templates.
  - Left `volunteer`, `specialist`, and `admin` roles untouched (under development) and deferred Phase 4 (`SearchModal` director indexing, Tab 4 reply bank, cross-tab link bar) per user directive.
