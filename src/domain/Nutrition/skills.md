# Nutrition

## Purpose

Specialized component for meal plans and macro tracking with protein, carbs, and fats breakdown.

## When to Use

- Diet plans and meal tracking
- Macro breakdowns (protein, carbs, fats)
- Daily/weekly nutrition plans
- DO NOT use Table or List for nutrition data

## Props Reference

| Prop         | Type   | Required | Description                          |
| ------------ | ------ | -------- | ------------------------------------ |
| title        | string | No       | Plan title (e.g., "Day 1 - Cutting") |
| meals        | array  | Yes      | List of meals                        |
| dailyTargets | object | No       | Target macros                        |
| lock         | boolean | No      | Disable interactions                 |

### Meal Structure

```typescript
{
  id: string;         // Unique ID (REQUIRED)
  name: string;       // Meal name (e.g., "Breakfast")
  items: MealItem[];  // Foods in this meal
}
```

### MealItem Structure

```typescript
{
  id: string;         // Unique ID (REQUIRED)
  name: string;       // Food name (REQUIRED)
  protein: number;    // Protein in grams (REQUIRED)
  carbs: number;      // Carbs in grams (REQUIRED)
  fats: number;       // Fats in grams (REQUIRED)
  calories?: number;  // Total calories
  grams?: number;     // Serving size
  consumed?: boolean; // Completion status
  alternatives?: Array<{
    id: string;        // Unique alternative ID
    name: string;      // Alternative food name
    protein: number;
    carbs: number;
    fats: number;
    calories?: number;
    grams?: number;
    reason?: string;   // Why it's a good swap
  }>;
}
```

### Meal Alternatives (Optional)

Each meal can include AI-generated alternative meals for swaps:

```typescript
{
  id: string;
  name: string;
  items: MealItem[];
  reason?: string;
}
```

## AI Generation Rules

1. ALWAYS use Nutrition for meal plans - never Table or List
2. Each meal item MUST have id, name, protein, carbs, fats
3. **Provide 1-3 alternatives** for each meal item when possible
4. **Provide 1-2 alternative meals** per meal when useful (swap options)
5. Use realistic food names and portions
6. Structure meals logically (Breakfast, Lunch, Dinner, Snacks)
7. For multi-day plans, create MULTIPLE Nutrition components in a Grid

## CRITICAL: Macro Target Validation

When the user specifies target macros (calories, protein, carbs, fats), you MUST:

1. **Calculate totals** after generating all meals
2. **Verify** that each macro is within **2% tolerance** of the target
3. **If any macro deviates more than 2%**, you MUST:
   - Identify which macro is off
   - Adjust portion sizes or substitute foods
   - Recalculate and verify again
4. **Loop until ALL macros are within 2% tolerance**

### Tolerance Formula

```
tolerance = abs(actual - target) / target * 100
PASS if tolerance <= 2% for ALL macros
```

### Example Validation

Target: 2000 kcal, 150g protein, 200g carbs, 67g fats
Actual: 1980 kcal, 148g protein, 195g carbs, 68g fats
- Calories: |1980-2000|/2000 = 1% ✓
- Protein: |148-150|/150 = 1.3% ✓
- Carbs: |195-200|/200 = 2.5% ✗ → ADJUST
- Fats: |68-67|/67 = 1.5% ✓

In this case, add 5g carbs (e.g., increase rice portion by 15g)

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/nutrition1","value":{"key":"nutrition1","type":"Nutrition","props":{"title":"Day 1 Meal Plan","meals":[]},"children":[]}}
{"op":"add","path":"/elements/nutrition1/props/meals/-","value":{"id":"m1","name":"Breakfast","items":[]}}
{"op":"add","path":"/elements/nutrition1/props/meals/0/items/-","value":{"id":"i1","name":"Scrambled Eggs (3)","protein":18,"carbs":2,"fats":15,"calories":210}}
{"op":"add","path":"/elements/nutrition1/props/meals/0/items/-","value":{"id":"i2","name":"Oatmeal (100g)","protein":5,"carbs":60,"fats":3,"calories":290}}
```

## Examples

```json
{
  "type": "Nutrition",
  "props": {
    "title": "Cutting Day - 2000 kcal",
    "meals": [
      {
        "id": "m1",
        "name": "Breakfast",
        "items": [
          {
            "id": "b1",
            "name": "Greek Yogurt (200g)",
            "protein": 20,
            "carbs": 8,
            "fats": 5,
            "calories": 160
          },
          {
            "id": "b2",
            "name": "Blueberries (100g)",
            "protein": 1,
            "carbs": 14,
            "fats": 0,
            "calories": 57
          }
        ]
      },
      {
        "id": "m2",
        "name": "Lunch",
        "items": [
          {
            "id": "l1",
            "name": "Grilled Chicken Breast (200g)",
            "protein": 62,
            "carbs": 0,
            "fats": 7,
            "calories": 330
          },
          {
            "id": "l2",
            "name": "Brown Rice (150g cooked)",
            "protein": 4,
            "carbs": 35,
            "fats": 1,
            "calories": 165
          }
        ]
      }
    ]
  }
}
```

## Structured Emission Contract

- For `/elements/<key>` patches, `patch.value` must be a raw JSON object (never a quoted/stringified JSON string).
- If the current tree already has a container/root, do not recreate or reset it with `children: []`.
- Preserve existing UI by appending new component keys via `/elements/<container>/children/-`.
