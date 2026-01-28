# Diary Component

Personal journal and diary component for daily reflection, mood tracking, and goal setting.

## Purpose

Use this component when the user wants to:
- Write daily journal entries
- Track mood and energy levels
- Record gratitude and highlights
- Set and track daily goals
- Link diary entries to workouts, meals, and other activities
- Review past entries

## Key Features

1. **Views**: Single entry, Timeline list
2. **Mood Tracking**: great, good, neutral, bad, terrible
3. **Energy Tracking**: 1-10 scale with visual bar
4. **Sleep Tracking**: Hours and quality
5. **Gratitude Section**: List of things to be grateful for
6. **Goals**: Daily goals with completion tracking
7. **Linked Entities**: Connect to workouts, meals, supplements, calendar events

## Data Structure

```json
{
  "title": "My Diary",
  "view": "single",
  "selectedDate": "2024-01-15",
  "showMoodTracker": true,
  "showEnergyTracker": true,
  "showGratitude": true,
  "showLinkedEntities": true,
  "entries": [
    {
      "id": "entry-1",
      "date": "2024-01-15",
      "title": "Great Start to the Week",
      "content": "Today was productive. Had an excellent morning workout and felt energized throughout the day...",
      "mood": "great",
      "energy": 8,
      "sleep": {
        "hours": 7.5,
        "quality": "good"
      },
      "gratitude": [
        "Morning sunshine",
        "Productive work session",
        "Good conversation with friend"
      ],
      "highlights": [
        "Completed all planned workout sets",
        "Finished project milestone",
        "Tried new healthy recipe"
      ],
      "goals": [
        { "id": "goal-1", "text": "Complete morning workout", "completed": true },
        { "id": "goal-2", "text": "Drink 3L water", "completed": true },
        { "id": "goal-3", "text": "Read for 30 minutes", "completed": false }
      ],
      "linkedEntities": [
        { "type": "workout", "id": "workout-123", "label": "Push Day" },
        { "type": "meal", "id": "meal-456", "label": "Meal Plan" }
      ],
      "tags": ["productive", "fitness", "healthy"]
    }
  ]
}
```

## Integration with Other Components

- **Workout**: Link completed workouts to diary entries
- **Nutrition**: Reference meals and diet compliance
- **SupplementTracker**: Note supplement effects or changes
- **Calendar**: Cross-reference with scheduled events
- **RoutineScheduler**: Track routine adherence

## Best Practices

1. Always generate unique IDs for entries and goals
2. Use YYYY-MM-DD format for dates
3. Encourage users to track mood and energy consistently
4. Link to other domain entities for comprehensive daily review
5. Use tags for searchability and categorization
6. Keep content focused but meaningful
7. Use gratitude section to promote positive reflection
