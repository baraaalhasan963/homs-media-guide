# System Patterns

## Architecture & Data Flow
1. Markdown source (`1.md`) parsed via Python scripts into structured JSON (`parsed_structure.json`).
2. Single-page React application consuming structured data for interactive browsing.
3. Standalone output (`index.standalone.html`) and bundled Vite build (`dist/`).
4. RTL Arabic layout styling with Tailwind CSS.

## Communication Pattern
- Proactive incremental progress updates sent in Syrian-Arabic before and during execution steps.
