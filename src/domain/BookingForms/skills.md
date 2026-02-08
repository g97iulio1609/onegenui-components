# BookingForms

## Purpose

Dual-mode booking form component for flight and hotel search/booking. Features a tabbed interface with flight route inputs and hotel destination inputs with date selection.

## When to Use

- Travel booking interfaces
- Flight search forms
- Hotel search forms
- Booking creation and editing
- Travel planning widgets
- Multi-modal travel search

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| type | "flight" \| "hotel" | No | Initial active tab (default: "flight") |
| mode | "create" \| "edit" | No | Form mode (default: "create") |
| title | string | No | Form header title (default: "Booking") |

### Form Modes

| Mode | Description | Action Button |
|------|-------------|---------------|
| create | New booking search | "Search" |
| edit | Modify existing booking | "Update" |

## AI Generation Rules

1. **Set type** to pre-select the active tab
2. **Use mode="create"** for new searches
3. **Use mode="edit"** for modifying existing bookings
4. **Include title** for context
5. **Place in appropriate context** - works well in Trip or standalone

## Examples

### Flight Search Form

```json
{
  "type": "BookingForms",
  "props": {
    "type": "flight",
    "mode": "create",
    "title": "Search Flights"
  }
}
```

### Hotel Search Form

```json
{
  "type": "BookingForms",
  "props": {
    "type": "hotel",
    "mode": "create",
    "title": "Find Hotels"
  }
}
```

### Edit Booking Form

```json
{
  "type": "BookingForms",
  "props": {
    "type": "flight",
    "mode": "edit",
    "title": "Modify Flight"
  }
}
```

### Default Booking Widget

```json
{
  "type": "BookingForms",
  "props": {
    "title": "Plan Your Trip"
  }
}
```

### Booking Form in Trip Context

```json
{
  "type": "Card",
  "props": {},
  "children": [
    {
      "type": "BookingForms",
      "props": {
        "type": "flight",
        "mode": "create",
        "title": "Add Flight to Trip"
      }
    }
  ]
}
```

## Flight Form Fields

The flight form includes:
- **From**: Origin airport code (e.g., "JFK")
- **To**: Destination airport code (e.g., "LHR")
- **Date**: Travel date
- **Passengers**: Number of travelers

## Hotel Form Fields

The hotel form includes:
- **Destination**: City or location name
- **Check-in**: Arrival date
- **Check-out**: Departure date

## Streaming Strategy

1. Emit BookingForms with type, mode, and title
2. Form fields are interactive and managed internally
3. No progressive loading needed - form is self-contained

## Critical Notes

- **Tab switching** is animated and preserves form state
- **Airport codes** are auto-uppercased for consistency
- Form state is managed with adapter pattern
- Validation is built-in via validation port
- Decorative gradient bar at top for visual appeal
- Touch-optimized with larger input targets on mobile
- Glass-panel styling with backdrop blur

## Structured Emission Contract

- For `/elements/<key>` patches, `patch.value` must be a raw JSON object (never a quoted/stringified JSON string).
- If the current tree already has a container/root, do not recreate or reset it with `children: []`.
- Preserve existing UI by appending new component keys via `/elements/<container>/children/-`.
