# AGENTS.md - @onegenui/components

Domain-specific UI components for OneGenUI. Rich, feature-complete components for common use cases.

## Purpose

This package provides high-level domain components:
- **Communication**: Email, Chat, Notification
- **Domain**: Calendar, Kanban, Flight, Hotel, Diary, Workout, RoutineScheduler
- **Visualization**: Charts, graphs (being migrated to @onegenui/viz)

## File Structure

```
src/
├── index.ts              # Public exports
├── definitions.ts        # Component definitions for catalog
├── skills.ts             # AI prompt skills aggregation
├── communication/        # Communication components
│   ├── Email/
│   └── ...
├── domain/               # Domain-specific components
│   ├── Calendar/
│   ├── Kanban/
│   ├── Flight/
│   ├── Hotel/
│   ├── Diary/
│   ├── Workout/
│   └── RoutineScheduler/
├── visualization/        # Visualization (being consolidated to @onegenui/viz)
└── utils/
```

## Component Architecture

Each component follows the standard pattern (see COMPONENT_GUIDELINES.md):

```
ComponentName/
├── component.tsx   # React component implementation
├── schema.ts       # Zod schema + component definition
├── index.ts        # Public exports
├── skills.md       # AI prompt instructions (optional)
├── types.ts        # Shared types (if complex)
└── components/     # Sub-components (if needed)
```

## Key Exports

```typescript
// All components
export * from './domain';
export * from './communication';

// Definitions for catalog
export { componentDefinitions } from './definitions';

// Skills for AI prompting
export { componentSkills } from './skills';
```

## Development Guidelines

See `COMPONENT_GUIDELINES.md` in this package for detailed guidelines. Key points:

- Use `SelectableItem` for items that can be selected
- Always handle empty states gracefully
- Support `lock` prop for read-only mode
- Use Framer Motion's `AnimatePresence` for lists
- Always render `children` at the end
- Use `memo()` wrapper on all components

## Refactoring Priorities (from toBeta.md)

| File | LOC | Priority | Action |
|------|-----|----------|--------|
| `Email/component.tsx` | 745 | P1 | Split view, compose, attachments |
| `Diary/component.tsx` | 567 | P2 | Extract editor, calendar |
| `RoutineScheduler/component.tsx` | 559 | P2 | Extract schedule, time slots |
| `Calendar/component.tsx` | 548 | P1 | Extract views, drag-drop |
| `Flight/component.tsx` | 518 | P2 | Extract card, pricing |
| `Kanban/component.tsx` | 466 | P2 | Extract board, column, card |

## Future: Package Consolidation

From `toBeta.md`, this package will be merged into `@onegenui/ui`:

```
@onegenui/ui (consolidated)
├── primitives/     # From current ui package
├── domain/         # This package (components)
└── visualization/  # From viz package
```

## Testing

```bash
pnpm --filter @onegenui/components type-check
pnpm --filter @onegenui/components build
```

## Dependencies

- `@onegenui/core` (workspace)
- `@onegenui/react` (workspace)
- `@onegenui/ui` (workspace)
- `framer-motion` ^12.x
- `uuid` for ID generation
- React ^19.0.0 (peer)
- `lucide-react` (peer, icons)
