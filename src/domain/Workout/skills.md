# Workout

## Purpose

Specialized component for displaying gym/exercise routines, cardio sessions, supersets, and circuits with performance tracking.

## When to Use

- Training sessions and gym routines
- Exercise lists with volume tracking
- Cardio sessions (running, cycling, etc.)
- Complex structures like Supersets or Circuits
- DO NOT use Table or List for workout data

## Props Reference

| Prop      | Type    | Required | Description                          |
| --------- | ------- | -------- | ------------------------------------ |
| title     | string  | No       | Workout title (e.g., "Day 1 - Push") |
| items     | array   | Yes      | List of exercises/activities (min 1) |
| exercises | array   | No       | Legacy alias for `items`             |
| lock      | boolean | No       | Lock editing                         |

### Item Structure

The structure depends on the `type` field (`exercise` | `cardio` | `superset` | `circuit` | `warmup`). Default is `exercise`.

#### Common Fields
```typescript
{
  id: string;           // Unique ID (REQUIRED)
  name: string;         // Name (REQUIRED)
  type?: "exercise" | "cardio" | "superset" | "circuit" | "warmup";
  notes?: string;       // Instructions/Notes
  completed?: boolean;
}
```

#### Standard Exercise (Resistance)
```typescript
{
  type: "exercise" | "warmup",
  sets: number,         // Target Sets
  reps: number,         // Target Reps
  weight: number,       // Target Weight
  rpe?: number,         // RPE Goal
  actualSets?: number,  // Actual Performance
  actualReps?: number,
  actualWeight?: number
}
```

#### Cardio
```typescript
{
  type: "cardio",
  duration: string,     // e.g. "30min"
  distance: number,     // km
  intensity: "Low" | "Moderate" | "High" | "Intervals"
  actualDuration?: string,
  actualDistance?: number,
  actualIntensity?: "Low" | "Moderate" | "High" | "Intervals"
}
```

#### Superset / Circuit
```typescript
{
  type: "superset" | "circuit",
  items: [ ... ]        // Nested list of exercises
}
```

## AI Generation Rules

1. ALWAYS use Workout for training sessions.
2. Use `items` prop, not `exercises`.
3. Use realistic exercise names and include actual fields when the user reports performance.
4. For supersets, wrap exercises in a `superset` item.
5. For cardio, use `cardio` type and appropriate fields.
6. If the user requests a multi-week program, generate ALL weeks explicitly (2-4 if requested), with progressive structure.

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/workout1","value":{"key":"workout1","type":"Workout","props":{"title":"Full Body","items":[]},"children":[]}}
{"op":"add","path":"/elements/workout1/props/items/-","value":{"id":"ex1","type":"warmup","name":"Treadmill","duration":"5min"}}
{"op":"add","path":"/elements/workout1/props/items/-","value":{"id":"ex2","type":"exercise","name":"Squat","sets":4,"reps":6,"weight":100}}
```

## Examples

### Complex Routine

```json
{
  "type": "Workout",
  "props": {
    "title": "Hypertrophy A",
    "items": [
      {
        "id": "w1",
        "type": "warmup",
        "name": "Dynamic Stretching",
        "duration": "5min",
        "actualDuration": "6min"
      },
      {
        "id": "e1",
        "type": "exercise",
        "name": "Bench Press",
        "sets": 4,
        "reps": 8,
        "weight": 80,
        "actualSets": 4,
        "actualReps": 7,
        "actualWeight": 78
      },
      {
        "id": "s1",
        "type": "superset",
        "items": [
          {
            "id": "s1a",
            "name": "Bicep Curls",
            "sets": 3,
            "reps": 12,
            "weight": 15
          },
          {
            "id": "s1b",
            "name": "Tricep Extensions",
            "sets": 3,
            "reps": 12,
            "weight": 20
          }
        ]
      },
      {
        "id": "c1",
        "type": "cardio",
        "name": "HIIT Sprints",
        "duration": "15min",
        "intensity": "Intervals",
        "actualDuration": "12min",
        "actualDistance": 2.4,
        "actualIntensity": "High"
      }
    ]
  }
}
```
