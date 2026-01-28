"use client";

import { memo, useState, useEffect } from "react";
import { Timer, Play, RotateCcw } from "lucide-react";

export const SessionTimer = memo(function SessionTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md">
      <Timer
        className={
          isActive ? "text-emerald-400 animate-pulse" : "text-zinc-500"
        }
        size={14}
      />
      <div className="font-mono text-sm font-medium text-white tracking-widest tabular-nums">
        {formatTime(time)}
      </div>
      {isActive ? (
        <button
          onClick={() => setIsActive(false)}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-sm bg-current block" />
        </button>
      ) : (
        <button
          onClick={() => setIsActive(true)}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Play size={10} fill="currentColor" />
        </button>
      )}
      <button
        onClick={() => {
          setIsActive(false);
          setTime(0);
        }}
        className="text-zinc-600 hover:text-white transition-colors"
      >
        <RotateCcw size={10} />
      </button>
    </div>
  );
});
