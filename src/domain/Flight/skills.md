# Flight

## Purpose

Display flight information in a boarding pass style format. Supports MCP tool integration for real-time flight search.

## When to Use

- Flight search requests
- Flight itineraries and booking confirmations
- Travel dashboards
- Multi-leg journey displays

## MCP Tool Integration

### CRITICAL: Tool Priority

When users ask for flights, you MUST follow this priority:

1. **ALWAYS use `search-flight` MCP tool FIRST** - this is the dedicated flight search tool
2. **ONLY use `web-search` as ABSOLUTE LAST RESORT** - if `search-flight` fails or is unavailable

> ⚠️ **NEVER use `web-search` for flights if `search-flight` is available!**

### Tool Usage

```
Tool: search-flight
Parameters:
- flyFrom: departure city or airport code (e.g., "Milan", "MXP")
- flyTo: destination city or airport code (e.g., "London", "LHR")
- departureDate: dd/mm/yyyy format (e.g., "25/02/2026")
- returnDate: dd/mm/yyyy format (optional, for round trips)
- passengers: { adults: 1, children: 0 } (default: 1 adult)
```

### Critical Rules

1. **IMMEDIATELY call the tool** - do NOT ask for information already in the message
2. Convert relative dates ("next Friday", "tomorrow") to actual dates using CURRENT DATE
3. All dates MUST be in the FUTURE
4. DO NOT use forms to collect flight data - use the tool directly
5. After receiving results, create a Flight component with the data

### Example Flow

User: "Find me flights from Rome to Paris next week"

1. Calculate date from CURRENT DATE
2. Call `search-flight` with flyFrom="Rome", flyTo="Paris", departureDate="calculated_date"
3. Create Flight component with results

## Props Reference

| Prop    | Type    | Required | Description             |
| ------- | ------- | -------- | ----------------------- |
| title   | string  | No       | Card title              |
| flights | array   | Yes      | List of flights (min 1) |
| lock    | boolean | No       | Lock editing            |

### Flight Structure

```typescript
{
  id: string;          // Unique ID (REQUIRED)
  airline: string;     // Airline name (REQUIRED)
  flightNumber: string;// Flight code (REQUIRED)
  departure: {
    code: string;      // Airport code (e.g., "JFK")
    city: string;      // City name
    time: string;      // Departure time
  };
  arrival: {
    code: string;      // Airport code
    city: string;      // City name
    time: string;      // Arrival time
  };
  price: {             // **REQUIRED** - Price object
    amount: number;    // Price value (REQUIRED)
    currency: string;  // "EUR", "USD", etc. (REQUIRED)
  };
  duration: string;    // Flight duration (REQUIRED)
  stops?: number;      // Number of stops (0 = direct)
  status?: "On Time" | "Delayed" | "Cancelled";
  bookingUrl: string;  // **REQUIRED** - Deep link to booking
  foundBy?: string;    // Source attribution (e.g., "Kiwi")
}
```

## AI Generation Rules

1. When user asks for flights → call `search-flight` tool immediately (NOT web-search!)
2. Each flight MUST have: id, airline, flightNumber, departure, arrival, **price**, **bookingUrl**
3. Use real airport codes (JFK, LAX, LHR, CDG, FCO, MXP, etc.)
4. Include price, duration, stops from search results
5. Suggest top 3 options: cheapest, best value, fastest

## MANDATORY FIELDS

> ⚠️ **The following fields are REQUIRED for every flight - NEVER omit them:**

| Field      | Why Required                                    |
|------------|------------------------------------------------|
| `price`    | User needs to compare costs                    |
| `bookingUrl` | User needs to book the flight                |
| `duration` | User needs to know travel time                 |

### Round-Trip Flights

For round-trip searches (andata e ritorno):

1. The `bookingUrl` should be the **COMPLETE booking link for BOTH flights**
2. If the search tool returns a combined booking URL, use that
3. If separate URLs are returned, use the round-trip bundle URL
4. Display both outbound and return flights, but the booking link should cover the entire trip

Example round-trip structure:
```typescript
// Outbound flight
{
  id: "f1-out",
  airline: "Ryanair",
  flightNumber: "FR 1234",
  departure: { code: "FCO", city: "Rome", time: "08:30" },
  arrival: { code: "CDG", city: "Paris", time: "10:45" },
  price: { amount: 89, currency: "EUR" },  // Total round-trip price
  duration: "2h 15m",
  bookingUrl: "https://...", // Complete round-trip booking URL
}

// Return flight  
{
  id: "f1-ret",
  airline: "Ryanair",
  flightNumber: "FR 1235",
  departure: { code: "CDG", city: "Paris", time: "19:00" },
  arrival: { code: "FCO", city: "Rome", time: "21:15" },
  price: { amount: 89, currency: "EUR" },  // Same total price
  duration: "2h 15m",
  bookingUrl: "https://...", // SAME complete round-trip booking URL
}
```

## CRITICAL: Data Placement Rules

### Chat Message (op: "message")
The chat message should ONLY contain:
- Introduction ("Ho trovato 3 voli per te...")
- High-level summary (best option recommendation, price range)
- DO NOT include: URLs, links, deep links, raw JSON, technical details, JSONL operations, booking URLs

Example GOOD message:
```
Ho cercato i voli migliori per te. Ecco le opzioni più interessanti divise per prezzo, durata e qualità.
```

Example BAD message (NEVER DO THIS):
```
Vedi Flight [link] | Più Economico: https://... | {"op":"add"...}
```

### Flight Component (props)
ALL technical details MUST go in the Flight component props:
- `bookingUrl`: The deep link for booking the flight (rendered as "Book Now" button)
- `price`: Price information (rendered in the card)
- `duration`: Flight duration (rendered in the card)
- `status`: Flight status (rendered in the card)  
- `foundBy`: Source attribution like "Kiwi" (rendered as badge)

### STRICT RULES
1. **NEVER put URLs or links in the chat message** - they go in `bookingUrl` prop only
2. **NEVER output raw JSONL operations as text** - they are data patches, not messages
3. **NEVER include markdown tables or formatted data in chat** - use Flight components to display this
4. The chat message is for CONTEXT only, the Flight cards show ALL the details
5. Keep chat messages clear and informative (not data dumps)
6. **ALWAYS include `bookingUrl` and `price`** - these are NOT optional!

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/flight1","value":{"key":"flight1","type":"Flight","props":{"title":"Flight Results","flights":[]},"children":[]}}
{"op":"add","path":"/elements/flight1/props/flights/-","value":{"id":"f1","airline":"Ryanair","flightNumber":"FR 1234","departure":{"code":"FCO","city":"Rome","time":"08:30"},"arrival":{"code":"CDG","city":"Paris","time":"10:45"},"price":{"amount":49,"currency":"EUR"},"duration":"2h 15m","stops":0,"bookingUrl":"https://www.kiwi.com/deep/..."}}
```

## Structured Emission Contract

- For `/elements/<key>` patches, `patch.value` must be a raw JSON object (never a quoted/stringified JSON string).
- If the current tree already has a container/root, do not recreate or reset it with `children: []`.
- Preserve existing UI by appending new component keys via `/elements/<container>/children/-`.
