import { z } from "zod";
import type { ComponentDefinition } from "@onegenui/core";

export const CitationSchema = z.object({
  id: z.string().describe("Unique citation identifier"),
  nodeId: z.string().describe("Reference to the source node"),
  text: z.string().describe("The cited text"),
  pageNumber: z.number().int().min(1).describe("Page number of the citation"),
  sectionTitle: z.string().describe("Section title containing the citation"),
  confidence: z
    .enum(["high", "medium", "low"])
    .optional()
    .describe("Confidence level"),
});

export type Citation = z.infer<typeof CitationSchema>;

export const SourceCitationPropsSchema = z.object({
  title: z.string().describe("Document title"),
  description: z.string().optional().describe("Brief description"),
  citations: z.array(CitationSchema).describe("List of citations"),
  showPageNumbers: z.boolean().optional().default(true),
  collapsed: z.boolean().optional().default(false),
  accentColor: z.string().optional().describe("Accent color for styling"),
  // Note: onCitationClick is a runtime callback, not part of schema validation
});

export type SourceCitationProps = z.infer<typeof SourceCitationPropsSchema> & {
  onCitationClick?: (citation: Citation) => void;
};

export const SourceCitationDefinition: ComponentDefinition = {
  props: SourceCitationPropsSchema,
  description:
    "Source citations with page references. Shows cited text with links to source pages. Use after document analysis to show where information comes from.",
};
