import { z } from "zod";
import type { ComponentDefinition } from "@onegenui/core";

export const DocumentIndexNodeSchema: z.ZodType<DocumentIndexNode> = z.lazy(
  () =>
    z.object({
      title: z.string().describe("Section title"),
      nodeId: z.string().describe("Unique node identifier"),
      startPage: z.number().int().min(1).describe("Starting page number"),
      endPage: z.number().int().min(1).describe("Ending page number"),
      summary: z.string().optional().describe("Section summary"),
      keyPoints: z
        .array(z.string())
        .optional()
        .describe("Key points extracted from section"),
      tags: z
        .array(z.string())
        .optional()
        .describe("Thematic tags for the section"),
      entityCount: z
        .number()
        .int()
        .optional()
        .describe("Number of entities mentioned in section"),
      quoteCount: z
        .number()
        .int()
        .optional()
        .describe("Number of notable quotes in section"),
      importance: z
        .number()
        .min(0)
        .max(1)
        .optional()
        .describe("Importance score 0-1"),
      relatedNodes: z
        .array(z.string())
        .optional()
        .describe("nodeIds of related sections"),
      children: z
        .array(DocumentIndexNodeSchema)
        .optional()
        .describe("Nested sections"),
    }),
);

export interface DocumentIndexNode {
  title: string;
  nodeId: string;
  startPage: number;
  endPage: number;
  summary?: string;
  keyPoints?: string[];
  tags?: string[];
  entityCount?: number;
  quoteCount?: number;
  importance?: number;
  relatedNodes?: string[];
  children?: DocumentIndexNode[];
}

export const DocumentIndexPropsSchema = z.object({
  title: z.string().describe("Document title"),
  description: z.string().optional().describe("Document description"),
  pageCount: z.number().int().min(1).describe("Total number of pages"),
  nodes: z.array(DocumentIndexNodeSchema).describe("Top-level sections"),
  accentColor: z.string().optional().describe("Accent color for styling"),
  collapsed: z.boolean().optional().default(false).describe("Start collapsed"),
});

export type DocumentIndexProps = z.infer<typeof DocumentIndexPropsSchema>;

export const DocumentIndexDefinition: ComponentDefinition = {
  props: DocumentIndexPropsSchema,
  description:
    "Document index with hierarchical navigation. Shows document structure with expandable sections, page numbers, summaries, key points, tags, entity/quote counts, importance scores, and cross-references. Use for PDF or document analysis results.",
};
