"use client";

import { useState, useEffect } from "react";
import { Send, X, Paperclip } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { EmailItem, DraftEmail, ComposeMode } from "./types";
import { extractEmailAddress } from "./types";

interface ComposeModalProps {
  mode: ComposeMode;
  originalEmail?: EmailItem | null;
  onClose: () => void;
  onSend: (draft: DraftEmail) => void;
}

export function ComposeModal({
  mode,
  originalEmail,
  onClose,
  onSend,
}: ComposeModalProps) {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (mode === "reply" && originalEmail) {
      setTo(extractEmailAddress(originalEmail.from));
      setSubject(`Re: ${originalEmail.subject.replace(/^Re:\s*/i, "")}`);
      setBody(
        `\n\n--- Original Message ---\nFrom: ${originalEmail.from}\nDate: ${originalEmail.date}\nSubject: ${originalEmail.subject}\n\n${originalEmail.body}`,
      );
    } else if (mode === "replyAll" && originalEmail) {
      setTo(extractEmailAddress(originalEmail.from));
      setCc(originalEmail.cc || "");
      setSubject(`Re: ${originalEmail.subject.replace(/^Re:\s*/i, "")}`);
      setBody(
        `\n\n--- Original Message ---\nFrom: ${originalEmail.from}\nDate: ${originalEmail.date}\nSubject: ${originalEmail.subject}\n\n${originalEmail.body}`,
      );
    } else if (mode === "forward" && originalEmail) {
      setTo("");
      setSubject(`Fwd: ${originalEmail.subject.replace(/^Fwd:\s*/i, "")}`);
      setBody(
        `\n\n--- Forwarded Message ---\nFrom: ${originalEmail.from}\nDate: ${originalEmail.date}\nSubject: ${originalEmail.subject}\n\n${originalEmail.body}`,
      );
    }
  }, [mode, originalEmail]);

  const handleSend = async () => {
    if (!to.trim()) return;
    setSending(true);

    const draft: DraftEmail = {
      to: to.trim(),
      cc: cc.trim() || undefined,
      subject: subject.trim(),
      body: body.trim(),
      inReplyTo: originalEmail?.id,
      threadId: originalEmail?.threadId || undefined,
    };

    try {
      await onSend(draft);
      onClose();
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setSending(false);
    }
  };

  const modeTitle = {
    new: "Nuovo messaggio",
    reply: "Rispondi",
    replyAll: "Rispondi a tutti",
    forward: "Inoltra",
    none: "",
  }[mode];

  return (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4">
      <div
        className="flex flex-col w-full sm:max-w-[600px] max-h-[95vh] sm:max-h-[90vh] bg-card border-t sm:border border-border rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 border-b border-border bg-muted/20">
          <span className="font-semibold text-sm sm:text-base">{modeTitle}</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-5 flex-1 overflow-y-auto touch-pan-y">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <label className="text-xs sm:text-sm text-muted-foreground sm:w-10">A:</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="destinatario@email.com"
              className="flex-1 bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all min-h-[2.75rem]"
              autoFocus
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <label className="text-xs sm:text-sm text-muted-foreground sm:w-10">Cc:</label>
            <input
              type="email"
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              placeholder="cc@email.com"
              className="flex-1 bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all min-h-[2.75rem]"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <label className="text-xs sm:text-sm text-muted-foreground sm:w-10">Ogg:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Oggetto"
              className="flex-1 bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all min-h-[2.75rem]"
            />
          </div>

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Scrivi il tuo messaggio..."
            className="flex-1 min-h-[150px] sm:min-h-[200px] resize-y bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all leading-relaxed font-sans"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-3 sm:px-5 py-3 sm:py-4 border-t border-border bg-muted/20 safe-area-bottom">
          <button
            className="p-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors opacity-50 cursor-pointer touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center"
            title="Allega file"
          >
            <Paperclip className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
          </button>

          <button
            onClick={handleSend}
            disabled={!to.trim() || sending}
            className={cn(
              "flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/20 touch-manipulation min-h-[2.5rem]",
              !to.trim() || sending
                ? "bg-slate-700 text-slate-400 cursor-not-allowed opacity-50"
                : "bg-blue-600 hover:bg-blue-500 text-white cursor-pointer hover:shadow-blue-500/30",
            )}
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {sending ? "Invio..." : "Invia"}
          </button>
        </div>
      </div>
    </div>
  );
}
