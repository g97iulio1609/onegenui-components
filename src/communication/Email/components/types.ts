/**
 * Email types and utilities
 */

export interface EmailItem {
  id: string;
  from: string;
  subject: string;
  body: string;
  date: string;
  read?: boolean | null;
  to?: string | null;
  cc?: string | null;
  avatar?: string | null;
  attachments?: Array<{ name: string; size?: string; url?: string }> | null;
  threadId?: string | null;
  starred?: boolean | null;
  labels?: string[] | null;
}

export interface DraftEmail {
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  body: string;
  attachments?: Array<{ name: string; size?: string }>;
  inReplyTo?: string;
  threadId?: string;
}

export type ComposeMode = "none" | "new" | "reply" | "replyAll" | "forward";

export function getPreview(body: string, maxLength = 120): string {
  const cleaned = body
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength) + "...";
}

export function getInitials(name: string | undefined | null): string {
  if (!name) return "?";
  // Handle email format "Name <email@example.com>"
  const match = name.match(/^([^<]+)/);
  const displayName = match?.[1]?.trim() ?? name;
  return (
    displayName
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0] || "")
      .join("")
      .toUpperCase() || "?"
  );
}

export function extractEmailAddress(from: string): string {
  const match = from.match(/<([^>]+)>/);
  return match?.[1] ?? from;
}

export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return date.toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffDays === 1) {
      return "Ieri";
    } else if (diffDays < 7) {
      return date.toLocaleDateString("it-IT", { weekday: "short" });
    } else {
      return date.toLocaleDateString("it-IT", {
        day: "numeric",
        month: "short",
      });
    }
  } catch {
    return dateStr;
  }
}
