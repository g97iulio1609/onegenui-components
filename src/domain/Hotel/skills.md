# Hotel

## Purpose

Display hotel listings with rich information including images, ratings, prices, dates, and booking links. Designed for travel and accommodation search results.

## When to Use

- Displaying hotel search results
- Showing accommodation options for travel planning
- Presenting hotel comparisons
- Building travel booking interfaces

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | Section title for the hotel list |
| hotels | HotelData[] | No | Array of hotels to display |
| layout | "list" \| "card" | No | Display layout (default: "list") |

### HotelData Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier |
| name | string | Yes | Hotel name |
| rating | number | No | Rating (e.g., 4.5) |
| address | string | No | Hotel address/location |
| dates | {checkIn, checkOut} | No | Booking dates (ISO format) |
| price | {amount, currency, perNight?} | No | Price information |
| image | string | **Highly Recommended** | **URL to hotel image - extract from web search** |
| amenities | string[] | No | List of amenities |
| status | "Available" \| "Booked" \| "Sold Out" \| "Reserved" | No | Booking status |
| roomType | string | No | Room type (e.g., "Double Room") |
| guests | number | No | Number of guests |
| bookingUrl | string | **Highly Recommended** | **URL to the hotel booking page** |

## AI Generation Rules

1. **ALWAYS include bookingUrl** when displaying real hotels - this allows users to book directly
2. **ALWAYS include image URL** when available - images are critical for hotel selection
3. Use real hotel data from search tools - never invent hotel names or prices
4. When using web search for hotels, extract image URLs from results
5. Set appropriate status based on availability
6. Include price with correct currency
7. Use "list" layout for detailed view, "card" layout for grid comparison

## Examples

### Single Hotel with Booking Link
```json
{
  "type": "Hotel",
  "props": {
    "title": "Hotels in Rome",
    "hotels": [
      {
        "id": "hotel-1",
        "name": "Grand Hotel Plaza",
        "rating": 4.5,
        "address": "Via del Corso, Rome",
        "dates": {
          "checkIn": "2024-06-15",
          "checkOut": "2024-06-18"
        },
        "price": {
          "amount": 189,
          "currency": "EUR",
          "perNight": true
        },
        "image": "https://example.com/hotel.jpg",
        "amenities": ["WiFi", "Pool", "Spa"],
        "status": "Available",
        "roomType": "Deluxe Double",
        "guests": 2,
        "bookingUrl": "https://booking.com/hotel/grand-hotel-plaza"
      }
    ],
    "layout": "list"
  }
}
```

### Multiple Hotels Comparison
```json
{
  "type": "Hotel",
  "props": {
    "title": "Compare Hotels",
    "hotels": [
      {
        "id": "h1",
        "name": "Budget Inn",
        "rating": 3.5,
        "price": {"amount": 79, "currency": "EUR", "perNight": true},
        "status": "Available",
        "bookingUrl": "https://hotels.com/budget-inn"
      },
      {
        "id": "h2", 
        "name": "Luxury Palace",
        "rating": 5.0,
        "price": {"amount": 350, "currency": "EUR", "perNight": true},
        "status": "Available",
        "bookingUrl": "https://hotels.com/luxury-palace"
      }
    ],
    "layout": "card"
  }
}
```

## Streaming Strategy

1. First emit the Hotel component with title and empty hotels array
2. Then progressively add hotels as search results come in
3. Update individual hotel data as more details are fetched

## Critical Notes

- **bookingUrl is essential** for a functional hotel component - without it users cannot book
- **image is essential** for visual appeal and user decision-making - always extract from web search results
- When using hotel search tools, extract and include both the booking URL and image URL from results
- If no booking URL is available, the arrow button will not be clickable
- If no image is available, a placeholder icon will be shown (but this should be avoided)

## Structured Emission Contract

- For `/elements/<key>` patches, `patch.value` must be a raw JSON object (never a quoted/stringified JSON string).
- If the current tree already has a container/root, do not recreate or reset it with `children: []`.
- Preserve existing UI by appending new component keys via `/elements/<container>/children/-`.
