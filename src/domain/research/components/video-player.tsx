"use client";

import { memo, useState } from "react";
import { PlayCircle, Play } from "lucide-react";
import { detectVideoEmbed } from "./types";

interface VideoPlayerProps {
  video: { url: string; thumbnail?: string; title?: string };
  title: string;
}

export const VideoPlayer = memo(function VideoPlayer({
  video,
  title,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedInfo = detectVideoEmbed(video.url);

  if (isPlaying) {
    return (
      <div className="mt-4 rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
        {embedInfo ? (
          <iframe
            src={embedInfo.embedUrl}
            title={video.title || title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />
        ) : (
          <video
            src={video.url}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            <source src={video.url} />
          </video>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="mt-4 block w-full relative rounded-xl overflow-hidden border border-white/10 group text-left"
    >
      {video.thumbnail ? (
        <img
          src={video.thumbnail}
          alt={video.title || "Video"}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-48 sm:h-56 md:h-64 bg-zinc-800 flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-zinc-600" />
        </div>
      )}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all">
          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
        </div>
      </div>
      {video.title && (
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="text-sm sm:text-base font-medium text-white">
            {video.title}
          </div>
        </div>
      )}
    </button>
  );
});
