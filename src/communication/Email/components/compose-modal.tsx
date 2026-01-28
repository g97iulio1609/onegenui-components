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
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div
        className="flex flex-col w-full max-w-[600px] max-h-[90vh] bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-border bg-muted/20">
          <span className="font-semibold text-base">{modeTitle}</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3 p-5 flex-1 overflow-y-auto">
          <div className="flex items-center gap-3">
            <label className="w-10 text-sm text-muted-foreground">A:</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="destinatario@email.com"
              className="flex-1 bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              autoFocus
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-10 text-sm text-muted-foreground">Cc:</label>
            <input
              type="email"
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              placeholder="cc@email.com"
              className="flex-1 bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-10 text-sm text-muted-foreground">Ogg:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Oggetto"
              className="flex-1 bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Scrivi il tuo messaggio..."
            className="flex-1 min-h-[200px] resize-y bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all leading-relaxed font-sans"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-5 py-4 border-t border-border bg-muted/20">
          <button
            className="p-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors opacity-50 cursor-pointer"
            title="Allega file"
          >
            <Paperclip size={18} />
          </button>

          <button
            onClick={handleSend}
            disabled={!to.trim() || sending}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg shadow-blue-500/20",
              !to.trim() || sending
                ? "bg-slate-700 text-slate-400 cursor-not-allowed opacity-50"
                : "bg-blue-600 hover:bg-blue-500 text-white cursor-pointer hover:shadow-blue-500/30",
            )}
          >
            <Send size={16} />
            {sending ? "Invio..." : "Invia"}
          </button>
        </div>
      </div>
    </div>
  );
}
