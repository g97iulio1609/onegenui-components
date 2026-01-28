# CalendarAgenda

## Purpose
Displays a list of Google Calendar events with a modern, responsive design. Supports day, week, and agenda views with event details.

## When to Use
Use this component when displaying calendar events from Google Calendar API. It automatically groups events by date and provides navigation between views.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | No | Header title (default: "Calendario") |
| `description` | string | No | Subtitle or description |
| `view` | "day" \| "week" \| "agenda" | No | View mode (default: "agenda") |
| `selectedDate` | string | No | Selected date (ISO 8601) |
| `events` | CalendarEvent[] | Yes | Array of events to display |

## CalendarEvent Structure

```typescript
interface CalendarEvent {
  id: string;           // Unique event ID (from Google Calendar)
  title: string;        // Event summary/title
  description?: string; // Event description
  location?: string;    // Event location
  start: string;        // Start time (ISO 8601)
  end?: string;         // End time (ISO 8601)
  allDay?: boolean;     // Is all-day event
  attendees?: Array<{
    email: string;
    name?: string;
    responseStatus?: "accepted" | "declined" | "tentative" | "needsAction";
  }>;
  meetingLink?: string; // Video meeting URL
  color?: string;       // Event color (hex)
}
```

## Data Mapping from Google Calendar API

Map the `calendar_list_events` tool response to this component:

```typescript
// From calendar_list_events response:
{
  events: response.events.map(event => ({
    id: event.id,
    title: event.title,
    description: event.description,
    location: event.location,
    start: event.start,
    end: event.end,
    attendees: event.attendees?.map(email => ({ email }))
  }))
}
```

## Example AI Generation

```json
{
  "type": "CalendarAgenda",
  "props": {
    "title": "I tuoi prossimi eventi",
    "view": "agenda",
    "events": [
      {
        "id": "event-1",
        "title": "Riunione di team",
        "start": "2026-01-20T14:00:00+01:00",
        "end": "2026-01-20T15:00:00+01:00",
        "location": "Sala conferenze",
        "meetingLink": "https://meet.google.com/abc-defg-hij",
        "attendees": [
          { "email": "mario@example.com", "name": "Mario Rossi", "responseStatus": "accepted" },
          { "email": "luigi@example.com", "name": "Luigi Verdi", "responseStatus": "tentative" }
        ]
      },
      {
        "id": "event-2",
        "title": "Revisione codice",
        "start": "2026-01-20T16:30:00+01:00",
        "end": "2026-01-20T17:30:00+01:00",
        "description": "Revisione delle modifiche al frontend"
      }
    ]
  }
}
```

## Features
- **Grouped by date** - Events are automatically grouped by day
- **Event details** - Click to view full event details
- **Meeting links** - Direct "Join meeting" button for video calls
- **Attendee list** - Shows attendees with RSVP status
- **Color coding** - Respects event colors from Google Calendar
- **Italian localization** - All labels in Italian
