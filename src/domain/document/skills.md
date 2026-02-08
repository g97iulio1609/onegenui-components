# DocumentReport

Use DocumentReport for comprehensive, deep-dive analysis of documents processed with Vectorless/smart parsing. This component renders the full semantic analysis with hierarchical sections, entities, quotes, and overlay.

## Structured Emission Contract

- When using `emit_ui_patch`, `patch.value` for `/elements/<key>` MUST be a JSON object, never a stringified JSON string.
- If a root/container already exists in the current tree, do not replace it with `children: []`.
- Add the new `DocumentReport` key to an existing container through `/elements/<container>/children/-` to keep prior content stable.
- For new turns, generate a unique `DocumentReport` key (for example `doc-report-<timestamp>`) instead of reusing an old key.

## When to use

- When the context includes `DOCUMENT DEEP ANALYSIS` data with sections, entities, timeline, relations
- For exhaustive document reports that go beyond a simple summary
- When the user asks for analysis, summary, report, or deep-dive of a document
- Pair with DocumentIndex (always generate DocumentIndex FIRST, then DocumentReport)

## Props

- `title`: Document title
- `description`: Comprehensive document description (2-3 sentences)
- `totalPages`: Number of pages
- `filename`: Original filename (optional)
- `sections`: Recursive array of DocReportSection:
  - `id`: Section identifier (use nodeId from tree)
  - `title`: Section title
  - `level`: Depth in hierarchy (0 = root)
  - `pageStart`: Starting page number
  - `pageEnd`: Ending page number
  - `summary`: DETAILED section summary (at least 3-4 sentences per section)
  - `keyPoints`: Array of key takeaways (at least 2-3 per section)
  - `entities`: Array of `{ type, value, relevance }` — extract from ENTITIES data
  - `quotes`: Array of `{ text, significance, speaker? }` — extract from KEY QUOTES data
  - `children`: Nested sub-sections (same structure)
- `semanticOverlay`: Semantic analysis overlay:
  - `topEntities`: Array of `{ id, type, value, description?, occurrenceCount, importance }`
  - `relations`: Array of `{ id, sourceTitle, targetTitle, type, evidence }`
  - `keyInsights`: Array of insight strings
  - `globalQuotes`: Array of `{ text, significance, speaker? }`
  - `timeline`: Array of `{ date, event, pageRef }` (optional)
- `sources`: Array of `{ id, title, pageNumber }` page references

## Granularity Rules

- Every section MUST have a detailed `summary` (never one-liners)
- Every section MUST have `keyPoints` (at least 2)
- Include ALL entities from the ENTITIES section data, distributed across their relevant sections
- Include ALL quotes from KEY QUOTES data with exact text and attribution
- The `semanticOverlay` must be fully populated:
  - ALL entities with importance scores and occurrence counts
  - ALL relations between sections with evidence text
  - ALL key insights (verbatim from the data)
  - ALL quotes with significance level
  - Complete timeline if timeline data exists
- Page references (`pageStart`, `pageEnd`, `pageRef`) must be EXACT from the data

## Example

```json
{
  "type": "DocumentReport",
  "props": {
    "title": "Research Paper on Machine Learning",
    "description": "A comprehensive 150-page study examining machine learning techniques and their applications in healthcare, covering methodology, experimental results, and clinical implications.",
    "totalPages": 150,
    "filename": "ml-healthcare-study.pdf",
    "sections": [
      {
        "id": "s1",
        "title": "Introduction",
        "level": 0,
        "pageStart": 1,
        "pageEnd": 15,
        "summary": "Establishes the research context by examining the current state of machine learning in healthcare. Reviews 23 prior studies and identifies critical gaps in automated diagnosis accuracy. Defines three primary research questions focused on improving model reliability in clinical settings.",
        "keyPoints": [
          "Current ML models achieve only 78% accuracy in clinical diagnosis",
          "Gap identified: insufficient training data diversity across demographics",
          "Three research questions defined targeting reliability improvements"
        ],
        "entities": [
          { "type": "concept", "value": "machine learning", "relevance": 0.95 },
          { "type": "concept", "value": "clinical diagnosis", "relevance": 0.9 },
          { "type": "person", "value": "Dr. Smith et al.", "relevance": 0.7 }
        ],
        "quotes": [
          {
            "text": "The fundamental challenge remains bridging the gap between laboratory accuracy and real-world clinical reliability.",
            "significance": "key",
            "speaker": "Dr. Smith"
          }
        ],
        "children": [
          {
            "id": "s1-1",
            "title": "Literature Review",
            "level": 1,
            "pageStart": 3,
            "pageEnd": 10,
            "summary": "Systematic review of 23 peer-reviewed studies from 2019-2024, categorized by methodology and clinical application area.",
            "keyPoints": [
              "23 studies reviewed across 5 clinical domains",
              "CNN-based approaches dominate with 65% of studies"
            ],
            "entities": [
              { "type": "concept", "value": "CNN", "relevance": 0.85 }
            ],
            "quotes": []
          }
        ]
      },
      {
        "id": "s2",
        "title": "Methodology",
        "level": 0,
        "pageStart": 16,
        "pageEnd": 45,
        "summary": "Presents the experimental methodology including dataset construction from 12 hospitals, model architecture selection, and validation framework. Introduces a novel cross-demographic balancing technique that addresses the identified gap in training data diversity.",
        "keyPoints": [
          "Dataset: 50,000 cases from 12 hospitals across 4 countries",
          "Novel cross-demographic balancing technique proposed",
          "5-fold cross-validation with stratified demographic splits"
        ],
        "entities": [
          { "type": "organization", "value": "WHO", "relevance": 0.6 },
          { "type": "concept", "value": "cross-validation", "relevance": 0.8 }
        ],
        "quotes": []
      }
    ],
    "semanticOverlay": {
      "topEntities": [
        { "id": "e1", "type": "concept", "value": "machine learning", "description": "Core research subject", "occurrenceCount": 142, "importance": 95 },
        { "id": "e2", "type": "concept", "value": "clinical diagnosis", "description": "Primary application domain", "occurrenceCount": 87, "importance": 88 },
        { "id": "e3", "type": "person", "value": "Dr. Smith", "description": "Lead researcher and corresponding author", "occurrenceCount": 34, "importance": 75 },
        { "id": "e4", "type": "organization", "value": "WHO", "description": "World Health Organization - provided guidelines referenced", "occurrenceCount": 12, "importance": 60 }
      ],
      "relations": [
        { "id": "r1", "sourceTitle": "Introduction", "targetTitle": "Methodology", "type": "foundational", "evidence": "Research questions defined in Introduction directly shape the experimental design in Methodology" },
        { "id": "r2", "sourceTitle": "Methodology", "targetTitle": "Results", "type": "sequential", "evidence": "Experimental framework established in Methods produces the findings presented in Results" }
      ],
      "keyInsights": [
        "Cross-demographic balancing improved accuracy by 12% across underrepresented populations",
        "Model reliability varies significantly by clinical domain — radiology achieves highest accuracy",
        "Training data diversity is more impactful than model architecture choice"
      ],
      "globalQuotes": [
        { "text": "The fundamental challenge remains bridging the gap between laboratory accuracy and real-world clinical reliability.", "significance": "key", "speaker": "Dr. Smith" }
      ],
      "timeline": [
        { "date": "2019", "event": "Initial feasibility study published", "pageRef": 5 },
        { "date": "2021", "event": "Dataset collection began across 12 hospitals", "pageRef": 18 },
        { "date": "2023", "event": "Cross-demographic technique first validated", "pageRef": 42 }
      ]
    },
    "sources": [
      { "id": "src1", "title": "Introduction", "pageNumber": 1 },
      { "id": "src2", "title": "Literature Review", "pageNumber": 3 },
      { "id": "src3", "title": "Methodology", "pageNumber": 16 }
    ]
  }
}
```

## Best practices

- Generate DocumentReport AFTER DocumentIndex — they complement each other
- DocumentIndex shows navigation, DocumentReport shows detailed analysis
- Use the EXACT data from `DOCUMENT DEEP ANALYSIS` context — do not invent or paraphrase
- Include PRECISE page references from the data
- Write summaries as analysis, not description ("The study reveals..." not "This section covers...")
- Every entity and quote in the data should appear in the appropriate section
- The semanticOverlay should contain ALL entities, relations, insights, quotes, and timeline events
- Do NOT emit `SourceCitation` if citations are already streamed by backend as a dedicated component
