# Component Development Guidelines

Best practices for building GenUI components following KISS, DRY, and SOLID principles.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [Component Patterns](#component-patterns)
4. [KISS Principles](#kiss-principles)
5. [DRY Principles](#dry-principles)
6. [SOLID Principles](#solid-principles)
7. [Type Safety](#type-safety)
8. [Performance](#performance)
9. [Accessibility](#accessibility)
10. [Testing](#testing)

---

## Architecture Overview

Each domain component follows a modular architecture:

```
ComponentName/
├── component.tsx   # React component implementation
├── schema.ts       # Zod schema + component definition
├── index.ts        # Public exports
├── skills.md       # AI prompt instructions (optional)
├── types.ts        # Shared types (if complex)
└── components/     # Sub-components (if needed)
```

### Core Dependencies

```typescript
import { memo } from "react";
import { type ComponentRenderProps, SelectableItem } from "@onegenui/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
```

---

## File Structure

### schema.ts

Define the component's props schema using Zod:

```typescript
import { z } from "zod";

// 1. Define nested schemas first
const itemSchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  name: z.string(),
  // ... other fields
});

// 2. Define the main props schema
export const ComponentPropsSchema = z.object({
  title: z.string().nullable().optional(),
  items: z.array(itemSchema).optional(),
  lock: z.boolean().nullable().optional(),
});

// 3. Export the inferred type
export type ComponentProps = z.infer<typeof ComponentPropsSchema>;

// 4. Define the component metadata
export const ComponentDefinition = {
  name: "ComponentName" as const,
  props: ComponentPropsSchema,
  description: "Clear, concise description for AI understanding",
  hasChildren: true, // or false
};
```

### component.tsx

```typescript
"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { ComponentProps } from "./schema";

export const ComponentName = memo(function ComponentName({
  element,
  children,
}: ComponentRenderProps) {
  const { title, items, lock = false } = element.props as ComponentProps;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Component content */}
      {children}
    </div>
  );
});
```

### index.ts

```typescript
export { ComponentName } from "./component";
export { ComponentPropsSchema, ComponentDefinition } from "./schema";
export type { ComponentProps } from "./schema";
```

---

## Component Patterns

### 1. Root Container Pattern

Always wrap components in a consistent container:

```typescript
return (
  <div className="flex flex-col gap-6 w-full">
    {/* Header */}
    {title && (
      <h3 className="m-0 text-xl font-bold tracking-tight flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary" />
        {title}
      </h3>
    )}
    
    {/* Content */}
    <div className="flex flex-col gap-4">
      {/* ... */}
    </div>
    
    {/* Always render children last */}
    {children}
  </div>
);
```

### 2. Selectable Items Pattern

Use `SelectableItem` for items that can be selected by users:

```typescript
import { SelectableItem } from "@onegenui/react";

{items.map((item, i) => (
  <SelectableItem
    key={item.id}
    elementKey={element.key}
    itemId={item.id}
    className="card-class"
  >
    {/* Item content */}
  </SelectableItem>
))}
```

### 3. Empty State Pattern

Always handle empty data gracefully:

```typescript
{items.length === 0 ? (
  <div className="py-20 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl">
    <Icon className="w-12 h-12 opacity-20 mb-4" />
    <p className="text-xs uppercase tracking-widest opacity-50">
      No items available
    </p>
  </div>
) : (
  items.map(renderItem)
)}
```

### 4. Lock/Edit Mode Pattern

Support read-only mode with a `lock` prop:

```typescript
const { lock = false } = element.props as ComponentProps;

// Disable interactions when locked
onClick={() => !lock && handleAction()}

// Visual indicator
{!lock && (
  <button onClick={handleEdit}>Edit</button>
)}
```

### 5. Animation Pattern

Use Framer Motion for consistent animations:

```typescript
import { motion, AnimatePresence } from "framer-motion";

// List items
<AnimatePresence mode="popLayout">
  {items.map((item, i) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
    >
      {/* Content */}
    </motion.div>
  ))}
</AnimatePresence>
```

---

## State Management

### CRITICAL: Use useElementState for Domain State

Components that manage data that should be visible to the AI (items, selections, form values) **MUST** use `useElementState` instead of `useState`. This ensures the state is:

1. **Synced to the UI tree** - AI can see the current state
2. **Persisted in Zustand store** - Survives re-renders
3. **Included in AI requests** - Sent as context to the LLM

```typescript
// ❌ BAD: useState - AI cannot see changes
const [items, setItems] = useState(props.items);

// ✅ GOOD: useElementState - State syncs to AI context
import { useElementState } from "@onegenui/react";

// State interface MUST extend Record<string, unknown>
interface WorkoutState extends Record<string, unknown> {
  items: WorkoutItem[];
}

const [state, updateState] = useElementState<WorkoutState>(element.key, {
  items: props.items ?? [],
});

// Update state (auto-syncs to tree with 300ms debounce)
updateState({ items: [...state.items, newItem] });
```

### When to Use useElementState

| Use Case | Hook |
|----------|------|
| Domain data (items, entries, records) | `useElementState` |
| Form values that affect AI context | `useElementState` |
| User selections that AI should know | `useElementState` |
| Pure UI state (expanded, hover, pan/zoom) | `useState` |
| Temporary input before submission | `useState` |

### Standard Logic Hook Pattern

Each domain component should have a single logic hook:

```typescript
// hooks/useComponentLogic.ts
import { useCallback, useMemo } from "react";
import { useElementState } from "@onegenui/react";

interface ComponentState extends Record<string, unknown> {
  items: Item[];
}

export function useComponentLogic(elementKey: string, initialProps: Props) {
  const [state, updateState] = useElementState<ComponentState>(elementKey, {
    items: initialProps.items ?? [],
  });
  
  const addItem = useCallback((item: Item) => {
    updateState({ items: [...state.items, item] });
  }, [state.items, updateState]);
  
  const removeItem = useCallback((id: string) => {
    updateState({ items: state.items.filter(i => i.id !== id) });
  }, [state.items, updateState]);
  
  return {
    ...state,
    addItem,
    removeItem,
  };
}
```

---

## KISS Principles

### Keep Components Focused

Each component should do ONE thing well:

```typescript
// BAD: Component does too much
const FlightBooking = () => {
  // Search logic
  // Booking logic
  // Payment logic
  // Confirmation logic
};

// GOOD: Separate concerns
const FlightSearch = () => { /* ... */ };
const FlightCard = () => { /* ... */ };
const BookingForm = () => { /* ... */ };
```

### Avoid Over-Engineering

```typescript
// BAD: Unnecessary abstraction with useReducer
const useComplexStateManager = () => {
  const [state, dispatch] = useReducer(complexReducer, initialState);
  // ... 200 lines of logic
};

// GOOD: Use useElementState for domain data
const [state, updateState] = useElementState(element.key, initialItems);
const updateItem = (id, value) => {
  updateState({ 
    items: state.items.map(item => 
      item.id === id ? { ...item, ...value } : item
    )
  });
};
```

### Prefer Readability Over Cleverness

```typescript
// BAD: Clever but hard to understand
const total = items.reduce((a, b) => a + (b.p * 4 + b.c * 4 + b.f * 9), 0);

// GOOD: Clear and maintainable
const calculateCalories = (item) => {
  const proteinCals = item.protein * 4;
  const carbCals = item.carbs * 4;
  const fatCals = item.fats * 9;
  return proteinCals + carbCals + fatCals;
};

const totalCalories = items.reduce(
  (total, item) => total + calculateCalories(item), 
  0
);
```

---

## DRY Principles

### Extract Reusable Sub-Components

```typescript
// Shared status badge component
const StatusBadge = ({ status, variant }: StatusBadgeProps) => {
  const styles = STATUS_STYLES[status] ?? DEFAULT_STYLE;
  return (
    <div className={cn("status-badge", styles.bg, styles.text)}>
      <div className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </div>
  );
};
```

### Use Shared Utilities

```typescript
// utils/format.ts
export const formatCurrency = (amount: number, currency: string) => {
  const symbols: Record<string, string> = {
    EUR: "€",
    USD: "$",
    GBP: "£",
  };
  return `${symbols[currency] || currency}${amount.toLocaleString()}`;
};

export const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};
```

### Centralize Constants

```typescript
// constants/index.ts
export const STATUS_COLORS = {
  success: { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  warning: { bg: "bg-amber-500/10", text: "text-amber-400" },
  error: { bg: "bg-rose-500/10", text: "text-rose-400" },
} as const;

export const ANIMATION_VARIANTS = {
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slideUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
} as const;
```

---

## SOLID Principles

### Single Responsibility (S)

Each component/function should have one reason to change:

```typescript
// GOOD: Separate data transformation from rendering
const transformApiData = (apiResponse: ApiFlightData[]): FlightTrip[] => {
  // Pure data transformation logic
};

const FlightList = ({ trips }: { trips: FlightTrip[] }) => {
  // Only rendering logic
};
```

### Open/Closed (O)

Components should be open for extension, closed for modification:

```typescript
// GOOD: Extensible via props
interface CardProps {
  variant?: "default" | "highlighted" | "minimal";
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card = ({ variant = "default", header, footer, children }: CardProps) => (
  <div className={cn("card", VARIANT_STYLES[variant])}>
    {header}
    {children}
    {footer}
  </div>
);
```

### Liskov Substitution (L)

Subtypes should be substitutable for their base types:

```typescript
// Base item interface
interface BaseItem {
  id: string;
  name: string;
}

// Extended interfaces maintain compatibility
interface FlightItem extends BaseItem {
  departure: Location;
  arrival: Location;
}

interface HotelItem extends BaseItem {
  address: string;
  rating: number;
}
```

### Interface Segregation (I)

Don't force components to depend on interfaces they don't use:

```typescript
// BAD: Fat interface
interface ComponentProps {
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
  onExport: () => void;
  // ... many more handlers
}

// GOOD: Segregated interfaces
interface EditableProps {
  onEdit: () => void;
}

interface DeletableProps {
  onDelete: () => void;
}

// Use only what's needed
const Card = ({ onEdit }: EditableProps) => { /* ... */ };
```

### Dependency Inversion (D)

Depend on abstractions, not concretions:

```typescript
// GOOD: Component accepts formatter as prop
interface PriceProps {
  amount: number;
  currency: string;
  formatter?: (amount: number, currency: string) => string;
}

const Price = ({ amount, currency, formatter = formatCurrency }: PriceProps) => (
  <span>{formatter(amount, currency)}</span>
);
```

---

## Type Safety

### Use Strict Types

```typescript
// Always define explicit types
type FlightStatus = "On Time" | "Delayed" | "Cancelled" | "Boarding";

// Use const assertions for literal types
const STATUS_OPTIONS = ["On Time", "Delayed", "Cancelled"] as const;
type Status = typeof STATUS_OPTIONS[number];

// Avoid `any` - use `unknown` if type is uncertain
const parseData = (input: unknown): ParsedData => {
  if (!isValidInput(input)) throw new Error("Invalid input");
  return input as ParsedData;
};
```

### Schema-First Design

```typescript
// Define schema first
const FlightSchema = z.object({
  id: z.string(),
  price: z.object({
    amount: z.number(),
    currency: z.string(),
  }),
});

// Derive type from schema
type Flight = z.infer<typeof FlightSchema>;

// Use in component
const { flights } = element.props as { flights: Flight[] };
```

---

## Performance

### Memoization

```typescript
// Memoize expensive computations
const totalStats = useMemo(() => {
  return items.reduce((acc, item) => ({
    calories: acc.calories + calculateCalories(item),
    protein: acc.protein + item.protein,
  }), { calories: 0, protein: 0 });
}, [items]);

// Memoize callbacks passed to children
const handleUpdate = useCallback((id: string, value: unknown) => {
  setItems(prev => updateItemById(prev, id, value));
}, []);
```

### Component Memoization

```typescript
// Always wrap exported components with memo
export const Component = memo(function Component(props) {
  // ...
});

// Memoize sub-components that receive stable props
const ItemCard = memo(function ItemCard({ item, onUpdate }) {
  // ...
});
```

### Avoid Unnecessary Re-renders

```typescript
// BAD: New object created every render
<ItemCard style={{ margin: 10 }} />

// GOOD: Stable reference
const cardStyle = useMemo(() => ({ margin: 10 }), []);
<ItemCard style={cardStyle} />

// Or use className instead
<ItemCard className="m-2.5" />
```

---

## Accessibility

### Semantic HTML

```typescript
// Use appropriate elements
<button onClick={handleClick}>Click me</button>  // Not <div onClick>
<a href={url}>Link text</a>                       // Not <span onClick>

// Use headings properly
<h3>{title}</h3>  // Not <div className="title">
```

### ARIA Attributes

```typescript
<button
  aria-label="Close dialog"
  aria-pressed={isActive}
  aria-expanded={isOpen}
>
  <CloseIcon />
</button>
```

### Keyboard Navigation

```typescript
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  }}
>
  Interactive element
</div>
```

---

## Testing

### Component Tests

```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { Flight } from "./component";

describe("Flight", () => {
  const mockElement = {
    key: "flight-1",
    type: "Flight",
    props: {
      title: "Test Flight",
      trips: [{ outbound: mockFlight }],
    },
  };

  it("renders title", () => {
    render(<Flight element={mockElement} />);
    expect(screen.getByText("Test Flight")).toBeInTheDocument();
  });

  it("displays correct price", () => {
    render(<Flight element={mockElement} />);
    expect(screen.getByText("€321")).toBeInTheDocument();
  });
});
```

### Schema Tests

```typescript
import { FlightPropsSchema } from "./schema";

describe("FlightPropsSchema", () => {
  it("validates correct data", () => {
    const result = FlightPropsSchema.safeParse({
      title: "Flights",
      trips: [{ outbound: validFlight }],
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid data", () => {
    const result = FlightPropsSchema.safeParse({
      trips: "invalid",
    });
    expect(result.success).toBe(false);
  });
});
```

---

## Checklist

Before submitting a component:

- [ ] Schema defined with Zod and proper descriptions
- [ ] Component wrapped with `memo()`
- [ ] Empty state handled
- [ ] Lock/edit mode supported (if editable)
- [ ] SelectableItem used for selectable items
- [ ] Children rendered at the end
- [ ] Animations use Framer Motion
- [ ] No `any` types
- [ ] Utilities extracted and reused
- [ ] Performance optimized (useMemo, useCallback)
- [ ] Accessible (semantic HTML, ARIA)

---

## Children Support Requirements

### When to Use Children vs Props

```typescript
// USE CHILDREN for:
// - Composable layout containers (Stack, Grid, Card)
// - Components that render arbitrary nested content
// - Wrapper components (Modal, Panel, Drawer)

// USE PROPS for:
// - Data-driven components (Table, Chart, List)
// - Components with structured content (Flight, Hotel)
// - When AI needs to understand and modify content

// HYBRID approach:
const Card = ({ header, footer, children }: CardProps) => (
  <div className="card">
    {header && <div className="card-header">{header}</div>}
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);
```

### Children Type Definitions

```typescript
// In schema.ts
export const CardDefinition = {
  name: "Card" as const,
  props: CardPropsSchema,
  description: "Container card with optional header/footer",
  hasChildren: true, // CRITICAL: Set true if component renders children
};

// In component.tsx
interface ComponentRenderProps {
  element: UIElement;
  children?: React.ReactNode; // Always optional, renderer handles
}
```

### Rendering Children

```typescript
// ALWAYS render children at the END of the component
export const Component = memo(function Component({
  element,
  children,
}: ComponentRenderProps) {
  return (
    <div className="component-wrapper">
      {/* Component's own content first */}
      <Header />
      <Content />
      
      {/* Children last - allows AI to append content */}
      {children}
    </div>
  );
});
```

---

## Streaming Compatibility

### Handling Partial Data

```typescript
// Components must handle incomplete/streaming data gracefully
const { items = [] } = element.props as ComponentProps;

// Use optional chaining and defaults
const title = item?.name ?? "Loading...";
const price = item?.price?.amount ?? 0;

// Check for required data before rendering complex UI
if (!items.length && !isLoading) {
  return <EmptyState />;
}
```

### Skeleton States

```typescript
import { Skeleton } from "@onegenui/ui";

// Provide skeleton UI during streaming
const FlightCard = ({ flight, isStreaming }: FlightCardProps) => {
  if (isStreaming || !flight) {
    return (
      <div className="flight-card">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-20" />
      </div>
    );
  }

  return <ActualFlightCard flight={flight} />;
};
```

### Progressive Enhancement

```typescript
// Render what's available, enhance as data arrives
const Document = memo(function Document({ element }: ComponentRenderProps) {
  const { title, sections = [] } = element.props as DocumentProps;

  return (
    <article className="document">
      {/* Title renders immediately if available */}
      {title && <h1>{title}</h1>}
      
      {/* Sections render progressively as they arrive */}
      <AnimatePresence mode="popLayout">
        {sections.map((section, i) => (
          <motion.section
            key={section.id || i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {section.content}
          </motion.section>
        ))}
      </AnimatePresence>
    </article>
  );
});
```

---

## Selection Integration

### Basic SelectableItem Usage

```typescript
import { SelectableItem } from "@onegenui/react";

// Wrap selectable items for AI context
{items.map((item) => (
  <SelectableItem
    key={item.id}
    elementKey={element.key}
    itemId={item.id}
    itemData={item} // Optional: pass data for AI context
    className="item-card"
  >
    <ItemContent item={item} />
  </SelectableItem>
))}
```

### Granular Selection Support

```typescript
// For complex components, provide multiple selection levels
const FlightCard = ({ trip, elementKey }: FlightCardProps) => (
  <div className="trip-card">
    {/* Trip-level selection */}
    <SelectableItem
      elementKey={elementKey}
      itemId={trip.id}
      itemType="trip"
    >
      <TripSummary trip={trip} />
    </SelectableItem>
    
    {/* Segment-level selection */}
    {trip.segments.map((segment) => (
      <SelectableItem
        key={segment.id}
        elementKey={elementKey}
        itemId={segment.id}
        itemType="segment"
        parentId={trip.id}
      >
        <SegmentDetails segment={segment} />
      </SelectableItem>
    ))}
  </div>
);
```

### Selection Feedback UI

```typescript
// SelectableItem provides selection state via CSS classes
// and context. Custom feedback can be added:

const ItemCard = ({ isSelected, item }: ItemCardProps) => (
  <div className={cn(
    "item-card transition-all",
    isSelected && "ring-2 ring-primary bg-primary/5"
  )}>
    {isSelected && (
      <div className="absolute top-2 right-2">
        <CheckCircleIcon className="w-5 h-5 text-primary" />
      </div>
    )}
    {/* Item content */}
  </div>
);
```

---

## Error Handling Patterns

### Component-Level Error Boundaries

```typescript
import { ErrorBoundary } from "react-error-boundary";

// Wrap complex components in error boundaries
export const SafeComponent = memo(function SafeComponent(props: Props) {
  return (
    <ErrorBoundary
      fallback={<ComponentErrorFallback componentName="ComponentName" />}
      onError={(error) => logError("ComponentName", error)}
    >
      <ActualComponent {...props} />
    </ErrorBoundary>
  );
});
```

### Fallback UI Standards

```typescript
// Standard error fallback component
const ComponentErrorFallback = ({ 
  componentName, 
  onRetry 
}: ErrorFallbackProps) => (
  <div className="p-6 border border-rose-500/20 bg-rose-500/5 rounded-xl">
    <div className="flex items-center gap-3 text-rose-400">
      <AlertTriangleIcon className="w-5 h-5" />
      <span className="font-medium">Failed to load {componentName}</span>
    </div>
    {onRetry && (
      <button 
        onClick={onRetry}
        className="mt-4 px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 rounded-lg"
      >
        Try Again
      </button>
    )}
  </div>
);
```

### Data Validation

```typescript
// Validate props at runtime for safety
const Component = memo(function Component({ element }: Props) {
  const parseResult = ComponentPropsSchema.safeParse(element.props);
  
  if (!parseResult.success) {
    console.warn("Invalid props for Component:", parseResult.error);
    return <PropValidationError errors={parseResult.error.errors} />;
  }
  
  const props = parseResult.data;
  // Render with validated props
});
```

---

## Hexagonal Patterns

### Separating UI from Business Logic

```typescript
// BAD: Logic mixed in component
const OrderCard = ({ order }) => {
  const total = order.items.reduce((sum, item) => 
    sum + item.price * item.quantity * (1 - item.discount), 0
  );
  const tax = total * 0.22;
  const shipping = total > 50 ? 0 : 5.99;
  // ... more calculations
};

// GOOD: Extract to service
// services/order-calculator.ts
export const calculateOrderTotal = (order: Order): OrderTotal => {
  const subtotal = order.items.reduce((sum, item) => 
    sum + calculateItemTotal(item), 0
  );
  return {
    subtotal,
    tax: calculateTax(subtotal),
    shipping: calculateShipping(subtotal),
    total: subtotal + tax + shipping,
  };
};

// component.tsx
const OrderCard = ({ order }) => {
  const totals = useMemo(() => calculateOrderTotal(order), [order]);
  // Render with totals
};
```

### Service Extraction Pattern

```typescript
// services/flight-formatter.ts
export interface FlightFormatter {
  formatDuration: (minutes: number) => string;
  formatPrice: (amount: number, currency: string) => string;
  formatRoute: (from: string, to: string) => string;
}

export const defaultFlightFormatter: FlightFormatter = {
  formatDuration: (m) => `${Math.floor(m/60)}h ${m%60}m`,
  formatPrice: (a, c) => `${CURRENCY_SYMBOLS[c]}${a}`,
  formatRoute: (f, t) => `${f} → ${t}`,
};

// component.tsx
interface FlightCardProps {
  flight: Flight;
  formatter?: FlightFormatter;
}

const FlightCard = ({ 
  flight, 
  formatter = defaultFlightFormatter 
}: FlightCardProps) => (
  <div>
    <span>{formatter.formatRoute(flight.from, flight.to)}</span>
    <span>{formatter.formatDuration(flight.duration)}</span>
    <span>{formatter.formatPrice(flight.price, flight.currency)}</span>
  </div>
);
```

### Port Patterns for Components

```typescript
// ports/data-loader.ts
export interface DataLoaderPort<T> {
  load: (id: string) => Promise<T>;
  refresh: () => Promise<void>;
  subscribe: (callback: (data: T) => void) => () => void;
}

// component.tsx
interface ComponentProps {
  dataLoader?: DataLoaderPort<ComponentData>;
}

const Component = ({ dataLoader }: ComponentProps) => {
  const [data, setData] = useState<ComponentData | null>(null);
  
  useEffect(() => {
    if (!dataLoader) return;
    
    dataLoader.load("default").then(setData);
    return dataLoader.subscribe(setData);
  }, [dataLoader]);
  
  // Render with data
};
```
