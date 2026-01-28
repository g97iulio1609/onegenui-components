# RoutineScheduler Component

Ultra-powerful granular routine and schedule organizer for planning daily and weekly activities.

## Purpose

Use this component when the user wants to:
- Plan their daily or weekly routine
- Schedule time blocks for different activities
- Organize workout, meal, supplement, work, and rest times
- Create recurring schedules
- Visualize their day at a granular level (15min, 30min, or 1hr blocks)

## Key Features

1. **Views**: Day view for detailed single-day planning, Week view for overview
2. **Categories**: workout, meal, supplement, work, rest, sleep, personal, other
3. **Granularity**: 15min, 30min, or 1hr time slots
4. **Recurring**: Support for daily, weekly, or custom recurring patterns
5. **Integration**: Links to Workout, Nutrition, and SupplementTracker components

## Data Structure

```json
{
  "title": "My Daily Routine",
  "view": "day",
  "selectedDate": "2024-01-15",
  "granularity": "30min",
  "timeRange": { "start": "06:00", "end": "22:00" },
  "days": [
    {
      "date": "2024-01-15",
      "blocks": [
        {
          "id": "block-1",
          "title": "Morning Workout",
          "startTime": "06:30",
          "endTime": "07:30",
          "category": "workout",
          "priority": "high",
          "linkedEntityType": "workout",
          "linkedEntityId": "workout-123"
        },
        {
          "id": "block-2",
          "title": "Breakfast",
          "startTime": "08:00",
          "endTime": "08:30",
          "category": "meal"
        },
        {
          "id": "block-3",
          "title": "Morning Supplements",
          "startTime": "08:30",
          "endTime": "08:45",
          "category": "supplement",
          "description": "Vitamin D, Omega-3, Creatine"
        }
      ]
    }
  ]
}
```

## Integration with Other Components

- **Workout**: Link time blocks to workout sessions using `linkedEntityType: "workout"`
- **Nutrition**: Link time blocks to meals using `linkedEntityType: "meal"`
- **SupplementTracker**: Link time blocks to supplement schedules using `linkedEntityType: "supplement"`
- **CalendarAgenda**: Can coexist to show external calendar events alongside routine

## Best Practices

1. Always generate unique IDs for each block
2. Ensure startTime < endTime
3. Use appropriate categories for color coding
4. Set priority only for important blocks
5. Add descriptions for blocks that need context
6. Use recurring patterns for consistent daily activities
