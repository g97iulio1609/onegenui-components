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
| exercises | array   | No       | Alias for `items` (for data compatibility) |
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

#### Standard Exercise (Resistance) - ALWAYS use `series` array
```typescript
{
  type: "exercise" | "warmup",
  series: [             // REQUIRED: Array of sets (not flat sets/reps!)
    {
      id: string,       // Unique ID (e.g., "set-1")
      setNumber: number,// 1, 2, 3, ...
      reps: number,     // Target reps for this set
      weight: number,   // Target weight in kg
      rpe?: number,     // Target RPE (1-10)
      completed?: boolean,
      type?: "warmup" | "normal" | "drop" | "failure"
    }
  ],
  rpe?: number,         // Overall RPE goal (optional)
}
```

**IMPORTANT**: Use `series` array, NOT flat `sets/reps/weight` fields. The `series` array allows per-set customization (pyramid sets, different weights per set, etc).

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
3. **CRITICAL**: Use `series` array for exercises, NOT flat `sets/reps/weight`. This enables per-set tracking.
4. Use realistic exercise names and include actual fields when the user reports performance.
5. For supersets, wrap exercises in a `superset` item.
6. For cardio, use `cardio` type and appropriate fields.
7. If the user requests a multi-week program, generate ALL weeks explicitly (2-4 if requested), with progressive structure.

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/workout1","value":{"key":"workout1","type":"Workout","props":{"title":"Full Body","items":[]},"children":[]}}
{"op":"add","path":"/elements/workout1/props/items/-","value":{"id":"ex1","type":"warmup","name":"Treadmill","duration":"5min"}}
{"op":"add","path":"/elements/workout1/props/items/-","value":{"id":"ex2","type":"exercise","name":"Squat","series":[{"id":"sq-1","setNumber":1,"reps":6,"weight":100},{"id":"sq-2","setNumber":2,"reps":6,"weight":100},{"id":"sq-3","setNumber":3,"reps":6,"weight":100},{"id":"sq-4","setNumber":4,"reps":6,"weight":100}]}}
```

## Examples

### Complex Routine (with series array)

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
        "duration": "5min"
      },
      {
        "id": "e1",
        "type": "exercise",
        "name": "Bench Press",
        "series": [
          {"id": "bp-1", "setNumber": 1, "reps": 8, "weight": 70, "type": "warmup"},
          {"id": "bp-2", "setNumber": 2, "reps": 8, "weight": 80},
          {"id": "bp-3", "setNumber": 3, "reps": 8, "weight": 80},
          {"id": "bp-4", "setNumber": 4, "reps": 8, "weight": 80}
        ],
        "notes": "Controlled eccentric, 2 sec pause at bottom"
      },
      {
        "id": "s1",
        "type": "superset",
        "items": [
          {
            "id": "s1a",
            "name": "Bicep Curls",
            "series": [
              {"id": "bc-1", "setNumber": 1, "reps": 12, "weight": 15},
              {"id": "bc-2", "setNumber": 2, "reps": 12, "weight": 15},
              {"id": "bc-3", "setNumber": 3, "reps": 12, "weight": 15}
            ]
          },
          {
            "id": "s1b",
            "name": "Tricep Extensions",
            "series": [
              {"id": "te-1", "setNumber": 1, "reps": 12, "weight": 20},
              {"id": "te-2", "setNumber": 2, "reps": 12, "weight": 20},
              {"id": "te-3", "setNumber": 3, "reps": 12, "weight": 20}
            ]
          }
        ]
      },
      {
        "id": "c1",
        "type": "cardio",
        "name": "HIIT Sprints",
        "duration": "15min",
        "intensity": "Intervals"
      }
    ]
  }
}
```

### Pyramid Training Example

```json
{
  "id": "squat1",
  "type": "exercise",
  "name": "Back Squat",
  "series": [
    {"id": "s1", "setNumber": 1, "reps": 10, "weight": 60, "type": "warmup"},
    {"id": "s2", "setNumber": 2, "reps": 8, "weight": 80},
    {"id": "s3", "setNumber": 3, "reps": 6, "weight": 100},
    {"id": "s4", "setNumber": 4, "reps": 4, "weight": 120},
    {"id": "s5", "setNumber": 5, "reps": 6, "weight": 100},
    {"id": "s6", "setNumber": 6, "reps": 8, "weight": 80}
  ],
  "notes": "Pyramid up then down"
}
```
