# ResearchReport

Displays comprehensive research reports with sections, inline citations, images, videos, and source references. Designed for Perplexity/Google AI Mode style search results presentation.

## Structure

```json
{
  "type": "ResearchReport",
  "props": {
    "title": "string - Report title/question",
    "summary": "string - Opening summary paragraph with inline citations [1], [2]",
    "sections": [
      {
        "title": "string - Section heading",
        "content": "string - Markdown content with inline citations [1], [2]",
        "image": {
          "url": "string - Image URL",
          "alt": "string - Alt text",
          "caption": "string - Optional caption"
        },
        "video": {
          "url": "string - Video URL (YouTube, etc.)",
          "thumbnail": "string - Video thumbnail URL",
          "title": "string - Video title"
        }
      }
    ],
    "sources": [
      {
        "id": "string - Citation ID (1, 2, 3...)",
        "title": "string - Source title",
        "url": "string - Source URL",
        "domain": "string - Domain name (e.g., 'theverge.com')",
        "favicon": "string - Optional favicon URL",
        "date": "string - ISO date of publication"
      }
    ],
    "relatedQueries": ["string - Related search suggestions"],
    "searchQuery": "string - Original search query",
    "totalResults": "number - Total results found"
  }
}
```

## Citation Format

Use [1], [2], etc. in content to reference sources:

```
"content": "OpenAI released GPT-5 [1] which represents a major breakthrough in reasoning capabilities. According to early benchmarks [2], the model outperforms previous versions by 40% on complex tasks."
```

## Example

```json
{
  "type": "ResearchReport",
  "props": {
    "title": "Latest AI News January 2026",
    "summary": "This week saw major announcements in AI, with OpenAI releasing GPT-5 [1], Google unveiling Gemini 3 [2], and Apple surprising the industry with its first foundation model [3]. Here's a comprehensive overview of the key developments.",
    "sections": [
      {
        "title": "OpenAI GPT-5 Launch",
        "content": "OpenAI announced GPT-5 on January 20th [1], marking a significant leap in AI capabilities. The new model demonstrates unprecedented reasoning abilities, with benchmark scores 40% higher than GPT-4 [4]. CEO Sam Altman described it as 'the most capable AI system we've ever created' [1].",
        "image": {
          "url": "https://example.com/gpt5-announcement.jpg",
          "caption": "Sam Altman presenting GPT-5 at OpenAI's headquarters"
        }
      },
      {
        "title": "Google Gemini 3 Response",
        "content": "Just two days after OpenAI's announcement, Google unveiled Gemini 3 [2]. The model excels particularly in multimodal understanding, processing text, images, audio, and video simultaneously [5]. Initial reviews suggest it matches GPT-5 in most benchmarks.",
        "video": {
          "url": "https://youtube.com/watch?v=example",
          "thumbnail": "https://example.com/gemini3-thumb.jpg",
          "title": "Google Gemini 3 Official Demo"
        }
      },
      {
        "title": "Apple's AI Surprise",
        "content": "Apple entered the foundation model race with Apple Intelligence 2.0 [3], focusing on on-device processing and privacy. Unlike cloud-based competitors, Apple's model runs entirely on the new M5 chip [6]."
      }
    ],
    "sources": [
      {
        "id": "1",
        "title": "OpenAI Announces GPT-5: A New Era in AI",
        "url": "https://openai.com/blog/gpt-5",
        "domain": "openai.com",
        "date": "2026-01-20"
      },
      {
        "id": "2",
        "title": "Google Unveils Gemini 3",
        "url": "https://blog.google/gemini-3",
        "domain": "blog.google",
        "date": "2026-01-22"
      },
      {
        "id": "3",
        "title": "Apple Intelligence 2.0 Announced",
        "url": "https://apple.com/newsroom/ai-2",
        "domain": "apple.com",
        "date": "2026-01-23"
      }
    ],
    "relatedQueries": [
      "GPT-5 vs Gemini 3 comparison",
      "Apple AI chip M5 specifications",
      "AI benchmark comparisons 2026"
    ]
  }
}
```

## Best Practices

1. **Always include sources** - Every factual claim should have a citation
2. **Rich media** - Add images/videos when available to enrich content
3. **Structured sections** - Break content into logical thematic sections
4. **Inline citations** - Use [n] format, not footnotes at the end
5. **Domain names** - Always include domain for credibility indicators
6. **Summary first** - Lead with a comprehensive summary before sections
