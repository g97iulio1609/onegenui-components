"use client";

import { memo } from "react";
import type { ReportSection, Source } from "./types";
import { VideoPlayer } from "./video-player";
import { renderContentWithCitations } from "./citation-badge";

interface ReportSectionComponentProps {
  section: ReportSection;
  sources: Source[];
  renderText?: (
    text: string,
    options?: { inline?: boolean },
  ) => React.ReactNode;
}

export const ReportSectionComponent = memo(function ReportSectionComponent({
  section,
  sources,
  renderText,
}: ReportSectionComponentProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <div className="w-1 h-5 bg-sky-500 rounded-full" />
        {section.title}
      </h3>

      <div className="text-zinc-300 leading-relaxed text-[15px]">
        {renderContentWithCitations(section.content, sources, renderText)}
      </div>

      {section.image && (
        <figure className="mt-4 rounded-xl overflow-hidden border border-white/10">
          <img
            src={section.image.url}
            alt={section.image.alt || section.title}
            className="w-full h-auto min-h-[200px] max-h-[400px] sm:max-h-[500px] object-cover"
            loading="lazy"
          />
          {section.image.caption && (
            <figcaption className="px-4 py-2.5 text-xs sm:text-sm text-zinc-500 bg-zinc-900/50">
              {section.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      {section.video && (
        <VideoPlayer video={section.video} title={section.title} />
      )}
    </div>
  );
});
