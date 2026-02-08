# Trip

## Purpose

Trip planner component for displaying travel itineraries with multiple trips, destinations, dates, costs, and booking details. Supports trip selection with an active trip view showing budget and nested itinerary items.

## When to Use

- Travel planning dashboards
- Trip itinerary displays
- Vacation planning interfaces
- Multi-destination trip management
- Travel booking summaries
- Trip comparison views

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | Section title (default: "My Trips") |
| trips | TripData[] | No | Array of trip objects |
| activeTripId | string | No | ID of the currently selected trip |

### TripData Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique trip identifier |
| title | string | Yes | Trip name/title |
| dates | {start, end} | No | Trip date range (ISO format) |
| destination | string | No | Primary destination |
| status | "Upcoming" \| "Completed" \| "Draft" \| "Cancelled" | Yes | Trip status |
| totalCost | {amount, currency} | No | Total budget/cost |
| stats | {flights, hotels, activities} | No | Booking counts |
| imageUrl | string | No | Background image URL |

### Status Styles

| Status | Badge Color |
|--------|-------------|
| Upcoming | Blue (info) |
| Completed | Green (success) |
| Draft | Amber (warning) |
| Cancelled | Red (error) |

## AI Generation Rules

1. **Always include id, title, and status** for each trip
2. **Use ISO date format** for start/end dates
3. **Include destination** for location context
4. **Set activeTripId** to show trip details
5. **Include stats** when booking data is available
6. **Add totalCost** for budget visibility
7. **Use children** for itinerary items (Flight, Hotel components)

## Examples

### Single Trip Display

```json
{
  "type": "Trip",
  "props": {
    "title": "My Trips",
    "activeTripId": "trip-1",
    "trips": [
      {
        "id": "trip-1",
        "title": "Summer Vacation in Italy",
        "destination": "Rome",
        "dates": {
          "start": "2024-07-15",
          "end": "2024-07-25"
        },
        "status": "Upcoming",
        "totalCost": {
          "amount": 3500,
          "currency": "EUR"
        },
        "stats": {
          "flights": 2,
          "hotels": 3,
          "activities": 5
        }
      }
    ]
  }
}
```

### Multiple Trip Selector

```json
{
  "type": "Trip",
  "props": {
    "title": "Upcoming Adventures",
    "activeTripId": "trip-2",
    "trips": [
      {
        "id": "trip-1",
        "title": "Weekend in Paris",
        "destination": "Paris",
        "dates": {
          "start": "2024-06-01",
          "end": "2024-06-03"
        },
        "status": "Completed",
        "stats": { "flights": 2, "hotels": 1 }
      },
      {
        "id": "trip-2",
        "title": "Tokyo Adventure",
        "destination": "Tokyo",
        "dates": {
          "start": "2024-09-10",
          "end": "2024-09-20"
        },
        "status": "Upcoming",
        "totalCost": { "amount": 5000, "currency": "USD" },
        "stats": { "flights": 2, "hotels": 2, "activities": 8 }
      },
      {
        "id": "trip-3",
        "title": "Greek Islands",
        "destination": "Santorini",
        "status": "Draft"
      }
    ]
  }
}
```

### Trip with Itinerary Children

```json
{
  "type": "Trip",
  "props": {
    "title": "Travel Plans",
    "activeTripId": "rome-trip",
    "trips": [
      {
        "id": "rome-trip",
        "title": "Rome Getaway",
        "destination": "Rome",
        "dates": { "start": "2024-08-01", "end": "2024-08-07" },
        "status": "Upcoming",
        "totalCost": { "amount": 2800, "currency": "EUR" }
      }
    ]
  },
  "children": [
    {
      "type": "Flight",
      "props": {
        "flights": [
          {
            "id": "flight-1",
            "airline": "ITA Airways",
            "origin": "JFK",
            "destination": "FCO",
            "date": "2024-08-01",
            "status": "Confirmed"
          }
        ]
      }
    },
    {
      "type": "Hotel",
      "props": {
        "hotels": [
          {
            "id": "hotel-1",
            "name": "Hotel Colosseum",
            "address": "Via del Colosseo, Rome",
            "dates": { "checkIn": "2024-08-01", "checkOut": "2024-08-07" },
            "status": "Booked"
          }
        ]
      }
    }
  ]
}
```

## Streaming Strategy

1. Emit Trip with title and trips array first
2. Set activeTripId after trips are loaded
3. Add children (Flight, Hotel, etc.) progressively
4. Update trip stats as bookings are added

## Critical Notes

- **activeTripId** must match a trip id to show details
- Trip cards are horizontally scrollable on mobile
- **Auto-save** is enabled for active trip persistence
- Children are rendered in a timeline layout with dashed border
- Budget panel shows only when totalCost is provided
- Background images are optional but enhance visual appeal
- Touch-optimized with snap scrolling and larger targets

## Structured Emission Contract

- For `/elements/<key>` patches, `patch.value` must be a raw JSON object (never a quoted/stringified JSON string).
- If the current tree already has a container/root, do not recreate or reset it with `children: []`.
- Preserve existing UI by appending new component keys via `/elements/<container>/children/-`.
