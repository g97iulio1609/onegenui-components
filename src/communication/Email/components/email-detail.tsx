"use client";

import { memo } from "react";
import {
  ArrowLeft,
  Archive,
  Trash2,
  Reply,
  ReplyAll,
  Forward,
  Star,
  Paperclip,
} from "lucide-react";
import { cn } from "../../../utils/cn";
import {
  type EmailItem,
  type ComposeMode,
  getInitials,
  extractEmailAddress,
} from "./types";

interface EmailDetailProps {
  email: EmailItem;
  lock: boolean;
  onBack: () => void;
  onCompose: (mode: ComposeMode) => void;
  onArchive: (id: string, e?: React.MouseEvent) => void;
  onDelete: (id: string, e?: React.MouseEvent) => void;
  onToggleStar: (id: string, e?: React.MouseEvent) => void;
}

export const EmailDetail = memo(function EmailDetail({
  email,
  lock,
  onBack,
  onCompose,
  onArchive,
  onDelete,
  onToggleStar,
}: EmailDetailProps) {
  return (
    <div className="flex flex-col flex-1 bg-background/30 overflow-hidden">
      {/* Header with actions */}
      <div className="flex items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 border-b border-border bg-muted/10">
        <button
          onClick={onBack}
          className="p-2 sm:p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center"
          title="Torna alla lista"
        >
          <ArrowLeft className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
        </button>

        <div className="flex-1" />

        {/* Action buttons */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            onClick={() => onCompose("reply")}
            className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center"
            title="Rispondi"
          >
            <Reply className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
          </button>
          <button
            onClick={() => onCompose("replyAll")}
            className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] hidden sm:flex items-center justify-center"
            title="Rispondi a tutti"
          >
            <ReplyAll className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
          </button>
          <button
            onClick={() => onCompose("forward")}
            className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center"
            title="Inoltra"
          >
            <Forward className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
          </button>
        </div>

        <div className="w-px h-4 sm:h-5 bg-border mx-0.5 sm:mx-1" />

        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            onClick={(e) => onArchive(email.id, e)}
            disabled={lock}
            className={cn(
              "p-2 rounded-lg transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              lock
                ? "text-muted-foreground/30 cursor-not-allowed"
                : "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer",
            )}
            title="Archivia"
          >
            <Archive className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
          </button>
          <button
            onClick={(e) => onDelete(email.id, e)}
            disabled={lock}
            className={cn(
              "p-2 rounded-lg transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              lock
                ? "text-muted-foreground/30 cursor-not-allowed"
                : "text-muted-foreground hover:bg-red-500/10 hover:text-red-500 cursor-pointer",
            )}
            title="Elimina"
          >
            <Trash2 className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
          </button>
        </div>
      </div>

      {/* Email content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 touch-pan-y">
        {/* Subject */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
          {email.subject || "(Nessun oggetto)"}
        </h1>

        {/* Sender info */}
        <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border/60">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-red-500 bg-red-500/10 border border-red-500/20 shadow-sm shrink-0">
            {getInitials(email.from)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mb-1">
              <span className="font-semibold text-sm sm:text-base text-foreground truncate">
                {email.from?.split("<")[0]?.trim() || "Mittente sconosciuto"}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground truncate">
                {extractEmailAddress(email.from)}
              </span>
            </div>

            <div className="text-[0.625rem] sm:text-xs text-muted-foreground flex flex-wrap gap-x-2 gap-y-1 items-center">
              <span>{email.date}</span>
              {email.to && (
                <>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="truncate">A: {email.to}</span>
                </>
              )}
            </div>
          </div>

          <button
            onClick={(e) => onToggleStar(email.id, e)}
            className={cn(
              "p-2 rounded-full hover:bg-muted transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center shrink-0",
              email.starred ? "text-yellow-400" : "text-muted-foreground",
            )}
          >
            <Star className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" fill={email.starred ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Body */}
        <div className="text-sm sm:text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap font-sans">
          {email.body || "(Nessun contenuto)"}
        </div>

        {/* Attachments */}
        {email.attachments && email.attachments.length > 0 && (
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/60">
            <div className="text-[0.625rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3">
              {email.attachments.length} Allegat
              {email.attachments.length === 1 ? "o" : "i"}
            </div>

            <div className="flex flex-wrap gap-2">
              {email.attachments.map((att, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted/30 border border-border hover:border-primary/30 rounded-lg cursor-pointer transition-all hover:bg-muted/60 touch-manipulation"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-background flex items-center justify-center text-muted-foreground shrink-0">
                    <Paperclip className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[0.625rem] sm:text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {att.name}
                    </span>
                    {att.size && (
                      <span className="text-[0.5rem] sm:text-[0.625rem] text-muted-foreground">
                        {att.size}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick reply bar */}
      <div className="p-3 sm:p-4 border-t border-border bg-muted/10">
        <button
          onClick={() => onCompose("reply")}
          className="w-full flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-border bg-background hover:bg-muted/50 transition-all text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 group touch-manipulation min-h-[2.75rem]"
        >
          <Reply
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-primary transition-colors"
          />
          Rispondi
        </button>
      </div>
    </div>
  );
});
