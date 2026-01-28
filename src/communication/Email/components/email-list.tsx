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
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 bg-background/50 touch-pan-y">
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-foreground/60 text-center">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 opacity-50">📭</div>
          <div className="text-base sm:text-lg font-semibold mb-1 text-foreground">
            Nessuna email
          </div>
          <div className="text-xs sm:text-sm text-foreground/50">La tua inbox è vuota</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 bg-background/50 touch-pan-y">
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
            "group relative border border-border/50 p-3 sm:p-4 cursor-pointer transition-all duration-200 rounded-lg sm:rounded-xl mb-2 bg-card/80 shadow-sm touch-manipulation",
            hoveredId === email.id
              ? "bg-card border-primary/30 shadow-md"
              : !email.read
                ? "bg-card border-red-500/30"
                : "bg-card/60",
          )}
        >
          <div className="flex items-start gap-2.5 sm:gap-3.5">
            {/* Unread indicator */}
            <div className="w-2 sm:w-2.5 mt-2 flex justify-center shrink-0">
              {!email.read && <UnreadDot />}
            </div>

            {/* Avatar */}
            <div className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center shrink-0 text-xs sm:text-sm font-semibold text-red-500 bg-red-500/10 border border-red-500/20 shadow-sm">
              {getInitials(email.from)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5 sm:mb-1 gap-2">
                <span
                  className={cn(
                    "text-xs sm:text-sm truncate",
                    email.read
                      ? "font-medium text-foreground/90"
                      : "font-bold text-foreground",
                  )}
                >
                  {email.from?.split("<")[0]?.trim() || "Mittente sconosciuto"}
                </span>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <button
                    onClick={(e) => onToggleStar(email.id, e)}
                    className={cn(
                      "p-1.5 sm:p-1 rounded-full transition-colors sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 touch-manipulation min-h-[2rem] min-w-[2rem] sm:min-h-0 sm:min-w-0 flex items-center justify-center",
                      email.starred
                        ? "text-yellow-400 opacity-100"
                        : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    <Star
                      className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5"
                      fill={email.starred ? "currentColor" : "none"}
                    />
                  </button>
                  <span className="text-[0.625rem] sm:text-xs text-muted-foreground whitespace-nowrap">
                    {formatDate(email.date)}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "text-xs sm:text-sm mb-1 sm:mb-1.5 truncate",
                  email.read
                    ? "font-normal text-foreground/80"
                    : "font-semibold text-foreground",
                )}
              >
                {email.subject || "(Nessun oggetto)"}
              </div>

              <div className="text-[0.625rem] sm:text-xs text-foreground/50 truncate leading-relaxed">
                {getPreview(email.body)}
              </div>

              {email.attachments && email.attachments.length > 0 && (
                <div className="flex items-center gap-1.5 mt-1.5 sm:mt-2">
                  <div className="bg-muted/50 px-1.5 sm:px-2 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] text-muted-foreground flex items-center gap-1 border border-border/50">
                    <Paperclip className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5" />
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
