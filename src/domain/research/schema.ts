import { z } from "zod";
import type { ComponentDefinition } from "@onegenui/core";

export const ResearchSourceSchema = z.object({
  id: z.string().describe("Source identifier"),
  title: z.string().describe("Source title"),
  url: z.string().describe("Source URL"),
  domain: z.string().describe("Source domain"),
  favicon: z.string().optional().describe("Source favicon URL"),
  date: z.string().optional().describe("Publication date (ISO format)"),
});

export const ReportImageSchema = z.object({
  url: z.string().describe("Image URL"),
  alt: z.string().optional().describe("Image alt text"),
  caption: z.string().optional().describe("Image caption"),
});

export const ReportVideoSchema = z.object({
  url: z.string().describe("Video URL"),
  thumbnail: z.string().optional().describe("Video thumbnail URL"),
  title: z.string().optional().describe("Video title"),
});

export const ReportSectionSchema = z.object({
  title: z.string().describe("Section title"),
  content: z
    .string()
    .describe("Markdown content with inline citations [1], [2]"),
  image: ReportImageSchema.optional().describe("Optional section image"),
  video: ReportVideoSchema.optional().describe("Optional section video"),
});

export const ResearchReportPropsSchema = z.object({
  title: z.string().describe("Report title"),
  summary: z
    .string()
    .describe("Opening summary paragraph with inline citations [1], [2]"),
  sections: z.array(ReportSectionSchema).describe("Report sections"),
  sources: z.array(ResearchSourceSchema).describe("Referenced sources"),
  relatedQueries: z
    .array(z.string())
    .optional()
    .describe("Related follow-up queries"),
  searchQuery: z.string().optional().describe("Original search query"),
  totalResults: z.number().optional().describe("Total results found"),
});

export type ResearchReportProps = z.infer<typeof ResearchReportPropsSchema>;

export const ResearchReportDefinition: ComponentDefinition = {
  props: ResearchReportPropsSchema,
  description:
    "Comprehensive research report with sections, citations, and sources.",
};
