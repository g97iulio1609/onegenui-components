# SupplementTracker Component

Track supplements, medications, and vitamins with precise timing and integration with meals and workouts.

## Purpose

Use this component when the user wants to:
- Track daily supplement intake
- Schedule medications with specific timing
- Organize supplements by when to take them
- Track compliance and progress
- Integrate supplement timing with meals and workouts

## Key Features

1. **Timing Groups**: morning, pre_meal, with_meal, post_meal, pre_workout, post_workout, evening, bedtime
2. **Categories**: vitamin, mineral, amino_acid, herb, probiotic, omega, protein, pre_workout, post_workout, medication
3. **Progress Tracking**: Visual progress bar and stats
4. **Food Interaction**: Mark supplements that should be taken with food
5. **Stacks**: Group supplements into named stacks

## Data Structure

```json
{
  "title": "Daily Supplements",
  "view": "daily",
  "selectedDate": "2024-01-15",
  "supplements": [
    {
      "id": "supp-1",
      "name": "Vitamin D3",
      "dosage": "5000 IU",
      "unit": "IU",
      "category": "vitamin",
      "timing": "morning",
      "frequency": "daily",
      "withFood": true,
      "brand": "NOW Foods"
    },
    {
      "id": "supp-2",
      "name": "Creatine Monohydrate",
      "dosage": "5g",
      "unit": "g",
      "category": "amino_acid",
      "timing": "post_workout",
      "frequency": "daily",
      "notes": "Mix with water or protein shake"
    },
    {
      "id": "supp-3",
      "name": "Omega-3 Fish Oil",
      "dosage": "2 capsules",
      "unit": "capsules",
      "category": "omega",
      "timing": "with_meal",
      "frequency": "twice_daily",
      "withFood": true
    }
  ],
  "schedule": [
    {
      "date": "2024-01-15",
      "doses": [
        {
          "id": "dose-1",
          "supplementId": "supp-1",
          "scheduledTime": "08:00",
          "taken": true,
          "takenAt": "2024-01-15T08:15:00Z"
        }
      ]
    }
  ]
}
```

## Integration with Other Components

- **Nutrition**: Align supplement timing with meals (withFood flag)
- **Workout**: Pre/post workout supplements sync with workout schedule
- **RoutineScheduler**: Link time blocks to supplement doses
- **Calendar**: Show supplement reminders in calendar view

## Best Practices

1. Always generate unique IDs for supplements and doses
2. Group supplements by logical timing
3. Mark withFood=true for fat-soluble vitamins (D, E, K, A)
4. Use appropriate categories for organization
5. Include dosage with proper units
6. Add notes for special instructions

## Structured Emission Contract

- For `/elements/<key>` patches, `patch.value` must be a raw JSON object (never a quoted/stringified JSON string).
- If the current tree already has a container/root, do not recreate or reset it with `children: []`.
- Preserve existing UI by appending new component keys via `/elements/<container>/children/-`.
