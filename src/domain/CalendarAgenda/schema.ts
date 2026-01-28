import { z } from "zod";

export const CalendarAgendaSchema = z.object({
  title: z
    .string()
    .optional()
    .nullable()
    .describe("Title for the calendar agenda"),
  description: z
    .string()
    .optional()
    .nullable()
    .describe("Description or subtitle"),
  view: z
    .enum(["day", "week", "agenda"])
    .optional()
    .default("agenda")
    .describe("View mode: day, week, or agenda (list)"),
  selectedDate: z
    .string()
    .optional()
    .describe("Selected date in ISO 8601 format"),
  events: z
    .array(
      z.object({
        id: z.string().describe("Unique event identifier"),
        title: z.string().describe("Event title"),
        description: z
          .string()
          .optional()
          .nullable()
          .describe("Event description"),
        location: z.string().optional().nullable().describe("Event location"),
        start: z.string().describe("Start date/time in ISO 8601 format"),
        end: z
          .string()
          .optional()
          .nullable()
          .describe("End date/time in ISO 8601 format"),
        allDay: z
          .boolean()
          .optional()
          .describe("Whether this is an all-day event"),
        attendees: z
          .array(
            z.object({
              email: z.string().describe("Attendee email"),
              name: z.string().optional().describe("Attendee display name"),
              responseStatus: z
                .enum(["accepted", "declined", "tentative", "needsAction"])
                .optional()
                .describe("RSVP status"),
            }),
          )
          .optional()
          .nullable()
          .describe("List of event attendees"),
        meetingLink: z
          .string()
          .optional()
          .nullable()
          .describe("Video meeting URL (Google Meet, Zoom, etc.)"),
        color: z
          .string()
          .optional()
          .nullable()
          .describe("Event color (hex code)"),
      }),
    )
    .optional()
    .nullable()
    .describe("List of calendar events to display"),
});

export type CalendarAgendaProps = z.infer<typeof CalendarAgendaSchema>;

/**
 * CalendarAgenda component definition for catalog registration
 */
export const CalendarAgendaDefinition = {
  name: "CalendarAgenda" as const,
  props: CalendarAgendaSchema,
  description:
    "Displays a list of Google Calendar events with day/week/agenda views and event details.",
  hasChildren: false,
};
