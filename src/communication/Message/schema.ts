import { z } from "zod";
import {
  messageItemSchema,
  participantSchema,
} from "../../utils/shared-schemas";

/**
 * Message component schema definition
 */
export const MessagePropsSchema = z.object({
  title: z.string().nullable(),
  messages: z.array(messageItemSchema),
  participants: z.array(participantSchema).nullable(),
  activeAgents: z
    .array(z.string())
    .nullable()
    .describe("IDs of agents currently typing"),
  lock: z.boolean().nullable(),
});

/** Type inference for Message props */
export type MessageProps = z.infer<typeof MessagePropsSchema>;

/**
 * Message component definition for catalog registration
 */
export const MessageDefinition = {
  name: "Message" as const,
  props: MessagePropsSchema,
  description: "Chat interface for multi-agent conversations.",
  hasChildren: true,
};
