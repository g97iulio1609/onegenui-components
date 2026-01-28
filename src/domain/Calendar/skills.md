# Calendar Component

Ultra-powerful calendar component for comprehensive event and schedule management.

## Purpose

Use this component when the user wants to:
- View and manage calendar events
- Plan activities across days, weeks, or months
- See an overview of scheduled workouts, meals, supplements
- Track appointments and deadlines
- Visualize their schedule holistically

## Key Features

1. **Views**: Month grid, Agenda list (expandable to week/day/year)
2. **Categories**: workout, meal, supplement, work, personal, health, social, travel, reminder
3. **Recurring Events**: Daily, weekly, monthly, yearly patterns
4. **Integration**: Links to Workout, Nutrition, SupplementTracker, Diary, RoutineScheduler
5. **Visual**: Color-coded categories, priority indicators, today highlighting

## Data Structure

```json
{
  "title": "My Calendar",
  "view": "month",
  "selectedDate": "2024-01-15",
  "firstDayOfWeek": 1,
  "highlightToday": true,
  "events": [
    {
      "id": "evt-1",
      "title": "Morning Workout",
      "start": "2024-01-15T06:30:00Z",
      "end": "2024-01-15T07:30:00Z",
      "category": "workout",
      "priority": "high",
      "linkedEntityType": "workout",
      "linkedEntityId": "workout-123"
    },
    {
      "id": "evt-2",
      "title": "Team Meeting",
      "start": "2024-01-15T10:00:00Z",
      "end": "2024-01-15T11:00:00Z",
      "category": "work",
      "location": "Conference Room A",
      "attendees": [
        { "name": "John", "status": "accepted" },
        { "name": "Jane", "status": "tentative" }
      ]
    },
    {
      "id": "evt-3",
      "title": "Doctor Appointment",
      "start": "2024-01-16T14:00:00Z",
      "category": "health",
      "location": "Medical Center",
      "reminders": [
        { "type": "notification", "minutes": 60 }
      ]
    }
  ]
}
```

## Integration with Other Components

- **Workout**: Show scheduled workouts with linkedEntityType: "workout"
- **Nutrition**: Display meal times with linkedEntityType: "meal"
- **SupplementTracker**: Show supplement schedules with linkedEntityType: "supplement"
- **RoutineScheduler**: Sync routine blocks as calendar events
- **Diary**: Link diary entries to specific dates
- **CalendarAgenda**: Can coexist - Calendar for planning, CalendarAgenda for external imports

## Best Practices

1. Always generate unique IDs for events
2. Use ISO 8601 format for dates/times
3. Set appropriate categories for color coding
4. Use priority sparingly (only for truly important events)
5. Add location for events that have physical locations
6. Use recurring patterns for regular events instead of duplicating
7. Link to other domain entities when events relate to workouts, meals, etc.
