"use client";

import { memo, useState, useEffect, useRef, useCallback } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { PenSquare, Mail } from "lucide-react";
import {
  ComposeModal,
  EmailList,
  EmailDetail,
  type EmailItem,
  type DraftEmail,
  type ComposeMode,
} from "./components";

// =============================================================================
// Main Component
// =============================================================================

export const Email = memo(function Email({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    description,
    emails: initialEmails,
    lock = false,
    onSendEmail,
  } = element.props as {
    title?: string | null;
    description?: string | null;
    emails?: EmailItem[] | null;
    lock?: boolean;
    onSendEmail?: (draft: DraftEmail) => Promise<void>;
  };

  const isInitialMount = useRef(true);
  const [localEmails, setLocalEmails] = useState<EmailItem[]>([]);
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const [composeMode, setComposeMode] = useState<ComposeMode>("none");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Sync from props
  const emailsKey = JSON.stringify(initialEmails);

  useEffect(() => {
    const newEmails = initialEmails || [];
    setLocalEmails(newEmails);

    if (newEmails.length === 1 && isInitialMount.current) {
      setSelectedEmailId(newEmails[0]?.id ?? null);
    }

    isInitialMount.current = false;
  }, [emailsKey]);

  const emails = localEmails;
  const selectedEmail = emails.find((e) => e.id === selectedEmailId);

  // Handlers
  const handleDelete = useCallback(
    (id: string, e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (lock) return;
      setLocalEmails((prev) => prev.filter((email) => email.id !== id));
      if (selectedEmailId === id) setSelectedEmailId(null);
    },
    [lock, selectedEmailId],
  );

  const handleArchive = useCallback(
    (id: string, e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (lock) return;
      setLocalEmails((prev) => prev.filter((email) => email.id !== id));
      if (selectedEmailId === id) setSelectedEmailId(null);
    },
    [lock, selectedEmailId],
  );

  const handleMarkAsRead = useCallback((id: string) => {
    setLocalEmails((prev) =>
      prev.map((email) => (email.id === id ? { ...email, read: true } : email)),
    );
  }, []);

  const handleToggleStar = useCallback((id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLocalEmails((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email,
      ),
    );
  }, []);

  const handleSelectEmail = useCallback(
    (id: string) => {
      setSelectedEmailId(id);
      handleMarkAsRead(id);
    },
    [handleMarkAsRead],
  );

  const handleSendEmail = useCallback(
    async (draft: DraftEmail) => {
      console.log("[Email] Sending email:", draft);
      if (onSendEmail) {
        await onSendEmail(draft);
      } else {
        console.log("[Email] Email sent (simulated):", draft);
      }
    },
    [onSendEmail],
  );

  // ==========================================================================
  // Main Render
  // ==========================================================================

  return (
    <div className="glass-panel w-full min-h-[300px] sm:min-h-[400px] h-full flex flex-col rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center px-3 sm:px-4 lg:px-5 py-3 sm:py-4 border-b border-border/40 bg-black/20 gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/20 text-white shrink-0">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <h3 className="m-0 text-sm sm:text-base font-bold leading-tight truncate">
              {title || "Gmail"}
            </h3>
            {description && (
              <div className="text-[0.625rem] sm:text-xs text-muted-foreground mt-0.5 truncate">
                {description}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted/30 text-[0.625rem] sm:text-xs font-medium text-muted-foreground border border-white/5">
            {emails.filter((e) => !e.read).length} non lett
            {emails.filter((e) => !e.read).length === 1 ? "a" : "e"}
          </div>

          <button
            onClick={() => setComposeMode("new")}
            className="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 pr-3 sm:pr-4 py-1.5 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-all shadow-lg shadow-blue-500/20 touch-manipulation min-h-[2.5rem]"
          >
            <PenSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Scrivi</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden relative">
        {selectedEmail ? (
          <EmailDetail
            email={selectedEmail}
            lock={lock}
            onBack={() => setSelectedEmailId(null)}
            onCompose={setComposeMode}
            onArchive={handleArchive}
            onDelete={handleDelete}
            onToggleStar={handleToggleStar}
          />
        ) : (
          <EmailList
            emails={emails}
            elementKey={element.key}
            hoveredId={hoveredId}
            onSelectEmail={handleSelectEmail}
            onToggleStar={handleToggleStar}
            onHoverEmail={setHoveredId}
          />
        )}
      </div>

      {/* Compose Modal */}
      {composeMode !== "none" && (
        <ComposeModal
          mode={composeMode}
          originalEmail={selectedEmail}
          onClose={() => setComposeMode("none")}
          onSend={handleSendEmail}
        />
      )}
      {children}
    </div>
  );
});
