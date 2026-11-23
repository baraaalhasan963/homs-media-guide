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
