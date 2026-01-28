"use client";

import { memo, useState, useEffect } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { cn } from "../../utils/cn";
import { Send, User } from "lucide-react";

type AgentParticipant = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  color?: string;
};

type MessageItem = {
  id: string;
  sender: string; // ID or Name
  avatar?: string;
  content: string;
  timestamp: string;
  status?: "read" | "unread";
  isOwn?: boolean;
  participantId?: string; // Link to specific agent
};

export const Message = memo(function Message({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    messages: initialMessages,
    participants = [],
    activeAgents = [],
    lock = false,
  } = element.props as {
    title?: string | null;
    messages?: MessageItem[] | null;
    participants?: AgentParticipant[];
    activeAgents?: string[]; // IDs of agents currently "typing"
    lock?: boolean;
  };

  const [messages, setMessages] = useState<MessageItem[]>(
    initialMessages || [],
  );

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);
  const [replyText, setReplyText] = useState("");

  const handleSendReply = () => {
    if (lock || !replyText.trim()) return;

    const newMessage: MessageItem = {
      id: crypto.randomUUID(),
      sender: "Me",
      content: replyText,
      timestamp: "Just now",
      isOwn: true,
      status: "read",
    };

    setMessages([...messages, newMessage]);
    setReplyText("");
  };

  const getParticipant = (id?: string) => participants.find((p) => p.id === id);

  return (
    <div className="flex flex-col h-full max-h-[600px] overflow-hidden rounded-xl border border-border/50 glass-panel bg-card/80 backdrop-blur-md shadow-lg">
      {title && (
        <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-muted/20">
          <div className="font-semibold text-base">{title}</div>

          {/* Participants Avatars */}
          {participants.length > 0 && (
            <div className="flex -space-x-2 ml-3">
              {participants.map((p) => (
                <div
                  key={p.id}
                  className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-background text-[10px] font-medium text-white shadow-sm ring-1 ring-black/5 bg-[var(--avatar-bg,var(--primary))]"
                  style={
                    {
                      "--avatar-bg": p.color,
                    } as React.CSSProperties
                  }
                  title={`${p.name} (${p.role})`}
                >
                  {p.avatar ? (
                    <img
                      src={p.avatar}
                      alt={p.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <span>{p.name[0]}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 bg-muted/5 min-h-0">
        {messages.map((msg) => {
          const participant = getParticipant(msg.participantId);
          const senderName = participant ? participant.name : msg.sender;
          const role = participant?.role;

          return (
            <div
              key={msg.id}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={msg.id}
              className={cn(
                "flex flex-col max-w-[85%] cursor-pointer group transition-all",
                msg.isOwn ? "self-end items-end" : "self-start items-start",
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-2 mb-1 text-xs text-muted-foreground",
                  msg.isOwn ? "flex-row-reverse" : "flex-row",
                )}
              >
                <span className="font-semibold text-foreground">
                  {senderName}
                </span>
                {role && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-secondary text-secondary-foreground border border-border/50">
                    {role}
                  </span>
                )}
                <span className="opacity-70 text-[10px]">{msg.timestamp}</span>
              </div>

              <div
                className={cn(
                  "relative px-4 py-3 text-sm shadow-sm transition-all duration-200 border",
                  msg.isOwn
                    ? "rounded-2xl rounded-tr-md bg-primary text-primary-foreground border-primary/20 bg-gradient-to-br from-blue-600 to-indigo-600"
                    : "rounded-2xl rounded-tl-md bg-card text-card-foreground border-border break-words",
                  !msg.isOwn &&
                    participant?.color &&
                    "border-l-[3px] border-l-[var(--msg-border)]",
                )}
                style={
                  {
                    "--msg-border": participant?.color,
                  } as React.CSSProperties
                }
              >
                {msg.content}
              </div>
            </div>
          );
        })}

        {/* Active Agents "Thinking" Indicator */}
        {activeAgents.length > 0 && (
          <div className="flex gap-3 mt-2 px-2">
            {activeAgents.map((agentId) => {
              const p = getParticipant(agentId);
              if (!p) return null;
              return (
                <div
                  key={agentId}
                  className="flex items-center gap-2 text-xs text-muted-foreground animate-pulse"
                >
                  <div
                    className="h-2 w-2 rounded-full bg-[var(--agent-color,currentColor)]"
                    style={
                      {
                        "--agent-color": p.color,
                      } as React.CSSProperties
                    }
                  />
                  <span>{p.name} is typing...</span>
                </div>
              );
            })}
          </div>
        )}

        {messages.length === 0 && activeAgents.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-50 space-y-2">
            <div className="p-4 rounded-full bg-muted/50">
              <User className="h-8 w-8 opacity-50" />
            </div>
            <p className="text-sm">No messages yet</p>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border bg-background flex gap-2 items-end">
        <textarea
          data-interactive
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder={lock ? "Conversation locked" : "Type a message..."}
          disabled={lock}
          className={cn(
            "flex-1 min-h-[44px] max-h-[120px] rounded-lg border border-input bg-transparent px-3 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            lock && "bg-muted text-muted-foreground",
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendReply();
            }
          }}
        />
        <button
          data-interactive
          onClick={handleSendReply}
          disabled={lock || !replyText.trim()}
          className={cn(
            "inline-flex items-center justify-center shrink-0 rounded-lg h-[44px] w-[44px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            !replyText.trim()
              ? "bg-muted text-muted-foreground"
              : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
          )}
        >
          <Send size={18} />
        </button>
      </div>
      {children}
    </div>
  );
});
