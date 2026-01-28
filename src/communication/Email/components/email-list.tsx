"use client";

import { memo } from "react";
import { Star, Paperclip } from "lucide-react";
import { cn } from "../../../utils/cn";
import { UnreadDot } from "./unread-dot";
import { type EmailItem, getPreview, getInitials, formatDate } from "./types";

interface EmailListProps {
  emails: EmailItem[];
  elementKey: string;
  hoveredId: string | null;
  onSelectEmail: (id: string) => void;
  onToggleStar: (id: string, e?: React.MouseEvent) => void;
  onHoverEmail: (id: string | null) => void;
}

export const EmailList = memo(function EmailList({
  emails,
  elementKey,
  hoveredId,
  onSelectEmail,
  onToggleStar,
  onHoverEmail,
}: EmailListProps) {
  if (emails.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 bg-background/50">
        <div className="flex flex-col items-center justify-center py-16 text-foreground/60 text-center">
          <div className="text-5xl mb-4 opacity-50">📭</div>
          <div className="text-lg font-semibold mb-1 text-foreground">
            Nessuna email
          </div>
          <div className="text-sm text-foreground/50">La tua inbox è vuota</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 bg-background/50">
      {emails.map((email) => (
        <div
          key={email.id}
          data-selectable-item
          data-element-key={elementKey}
          data-item-id={email.id}
          onClick={() => onSelectEmail(email.id)}
          onMouseEnter={() => onHoverEmail(email.id)}
          onMouseLeave={() => onHoverEmail(null)}
          className={cn(
            "group relative border border-border/50 p-4 cursor-pointer transition-all duration-200 rounded-xl mb-2 bg-card/80 shadow-sm",
            hoveredId === email.id
              ? "bg-card border-primary/30 shadow-md"
              : !email.read
                ? "bg-card border-red-500/30"
                : "bg-card/60",
          )}
        >
          <div className="flex items-start gap-3.5">
            {/* Unread indicator */}
            <div className="w-2.5 mt-2 flex justify-center">
              {!email.read && <UnreadDot />}
            </div>

            {/* Avatar */}
            <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0 text-sm font-semibold text-red-500 bg-red-500/10 border border-red-500/20 shadow-sm">
              {getInitials(email.from)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span
                  className={cn(
                    "text-sm truncate pr-2",
                    email.read
                      ? "font-medium text-foreground/90"
                      : "font-bold text-foreground",
                  )}
                >
                  {email.from?.split("<")[0]?.trim() || "Mittente sconosciuto"}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => onToggleStar(email.id, e)}
                    className={cn(
                      "p-1 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100",
                      email.starred
                        ? "text-yellow-400 opacity-100"
                        : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    <Star
                      size={14}
                      fill={email.starred ? "currentColor" : "none"}
                    />
                  </button>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatDate(email.date)}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "text-sm mb-1.5 truncate",
                  email.read
                    ? "font-normal text-foreground/80"
                    : "font-semibold text-foreground",
                )}
              >
                {email.subject || "(Nessun oggetto)"}
              </div>

              <div className="text-xs text-foreground/50 truncate leading-relaxed">
                {getPreview(email.body)}
              </div>

              {email.attachments && email.attachments.length > 0 && (
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="bg-muted/50 px-2 py-0.5 rounded text-[10px] text-muted-foreground flex items-center gap-1 border border-border/50">
                    <Paperclip size={10} />
                    <span>
                      {email.attachments.length} allegat
                      {email.attachments.length === 1 ? "o" : "i"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
