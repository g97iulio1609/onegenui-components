import { z } from "zod";
import { emailItemSchema } from "../../utils/shared-schemas";

/**
 * Email component schema definition
 */
export const EmailPropsSchema = z.object({
  title: z.string().nullable().describe("Inbox title"),
  description: z.string().nullable().describe("Inbox description"),
  emails: z.array(emailItemSchema).describe("List of emails"),
  lock: z.boolean().nullable().describe("Lock delete/archive actions"),
});

/** Type inference for Email props */
export type EmailProps = z.infer<typeof EmailPropsSchema>;

/**
 * Email component definition for catalog registration
 */
export const EmailDefinition = {
  name: "Email" as const,
  props: EmailPropsSchema,
  description: "Email inbox viewer with list and detail views.",
  hasChildren: true,
};
