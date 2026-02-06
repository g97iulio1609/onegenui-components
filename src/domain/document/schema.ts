import { z } from "zod";
import type { ComponentDefinition } from "@onegenui/core";

// Section entity
export const DocSectionEntitySchema = z.object({
  type: z.string().describe("Entity type (person, date, place, concept, etc.)"),
  value: z.string().describe("Entity value"),
  relevance: z.number().min(0).max(1).describe("Relevance to section"),
});

// Section quote
export const DocSectionQuoteSchema = z.object({
  text: z.string().describe("Quote text"),
  significance: z.enum(["key", "supporting", "notable"]).describe("Quote importance"),
  speaker: z.string().optional().describe("Speaker if applicable"),
});

// Report section (recursive)
export const DocReportSectionSchema: z.ZodType<DocReportSection> = z.lazy(() =>
  z.object({
    id: z.string().describe("Section identifier"),
    title: z.string().describe("Section title"),
    level: z.number().int().min(0).max(10).default(0).describe("Depth in hierarchy"),
    pageStart: z.number().int().min(1).describe("Starting page"),
    pageEnd: z.number().int().min(1).describe("Ending page"),
    summary: z.string().default("").describe("Detailed section summary"),
    keyPoints: z.array(z.string()).default([]).describe("Key takeaways"),
    entities: z.array(DocSectionEntitySchema).default([]).describe("Section entities"),
    quotes: z.array(DocSectionQuoteSchema).default([]).describe("Notable quotes"),
    children: z.array(DocReportSectionSchema).optional().describe("Child sections"),
  }),
);

export type DocReportSection = {
  id: string;
  title: string;
  level: number;
  pageStart: number;
  pageEnd: number;
  summary: string;
  keyPoints: string[];
  entities: z.infer<typeof DocSectionEntitySchema>[];
  quotes: z.infer<typeof DocSectionQuoteSchema>[];
  children?: DocReportSection[];
};

// Aggregated entity
export const AggregatedEntitySchema = z.object({
  id: z.string().describe("Entity identifier"),
  type: z.string().describe("Entity type"),
  value: z.string().describe("Entity value"),
  description: z.string().optional().describe("Entity description"),
  occurrenceCount: z.number().int().min(1).describe("Total occurrences"),
  importance: z.number().min(0).max(100).describe("Importance score"),
});

// Report relation
export const ReportRelationSchema = z.object({
  id: z.string().describe("Relation identifier"),
  sourceTitle: z.string().describe("Source section"),
  targetTitle: z.string().describe("Target section"),
  type: z.string().describe("Relation type"),
  evidence: z.string().describe("Supporting evidence"),
});

// Timeline event
export const TimelineEventSchema = z.object({
  date: z.string().describe("Date or time reference"),
  event: z.string().describe("Event description"),
  pageRef: z.number().int().min(1).describe("Page reference"),
});

// Semantic overlay
export const SemanticOverlaySchema = z.object({
  topEntities: z.array(AggregatedEntitySchema).default([]).describe("Top entities"),
  relations: z.array(ReportRelationSchema).default([]).describe("Section relations"),
  keyInsights: z.array(z.string()).default([]).describe("Global insights"),
  globalQuotes: z.array(DocSectionQuoteSchema).default([]).describe("Key quotes"),
  timeline: z.array(TimelineEventSchema).default([]).describe("Event timeline"),
});

// Page source
export const PageSourceSchema = z.object({
  id: z.string().describe("Source identifier"),
  title: z.string().describe("Section title"),
  pageNumber: z.number().int().min(1).describe("Page number"),
});

// Main DocumentReport props
export const DocumentReportPropsSchema = z.object({
  title: z.string().describe("Document title"),
  description: z.string().default("").describe("Document description/summary"),
  totalPages: z.number().int().min(1).describe("Total pages"),
  filename: z.string().optional().describe("Original filename"),
  sections: z.array(DocReportSectionSchema).default([]).describe("Document sections"),
  semanticOverlay: SemanticOverlaySchema.default({
    topEntities: [],
    relations: [],
    keyInsights: [],
    globalQuotes: [],
    timeline: [],
  }).describe("Semantic analysis overlay"),
  sources: z.array(PageSourceSchema).default([]).describe("Page references"),
});

export type DocumentReportProps = z.infer<typeof DocumentReportPropsSchema>;

export const DocumentReportDefinition: ComponentDefinition = {
  props: DocumentReportPropsSchema,
  description:
    "Comprehensive document analysis report with hierarchical sections, entities, quotes, and semantic overlay. " +
    "Streams progressively for real-time rendering.",
};
