import { z } from "zod";
import type { ComponentDefinition } from "@onegenui/core";

export const InlineCitationSchema = z.object({
  id: z.number().int().describe("Citation number matching [N] in text"),
  pageNumber: z.number().int().describe("Page number"),
  excerpt: z.string().describe("Exact quoted text from the source"),
  sectionTitle: z.string().optional().describe("Section title"),
});

export type InlineCitation = z.infer<typeof InlineCitationSchema>;

export const CitedTextPropsSchema = z.object({
  content: z
    .string()
    .describe("Text with inline citation markers like [1], [2]"),
  citations: z
    .array(InlineCitationSchema)
    .describe("Array of citations referenced in the text"),
  documentTitle: z.string().optional().describe("Source document title"),
});

export type CitedTextProps = z.infer<typeof CitedTextPropsSchema>;

export const CitedTextDefinition: ComponentDefinition = {
  props: CitedTextPropsSchema,
  description:
    "Text with inline citations. Citations appear as [1], [2] markers that show the quoted source on click/hover.",
};
