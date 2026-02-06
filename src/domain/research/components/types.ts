/**
 * Research Report Types
 */

export type Source = {
  id: string;
  title: string;
  url: string;
  domain: string;
  favicon?: string;
  date?: string;
};

export type ReportSection = {
  title: string;
  content: string; // Markdown content with [1], [2] citations
  image?: {
    url: string;
    alt?: string;
    caption?: string;
  };
  video?: {
    url: string;
    thumbnail?: string;
    title?: string;
  };
};

export type ResearchReportProps = {
  title: string;
  summary: string; // Opening summary with inline citations [1], [2]
  sections: ReportSection[];
  sources: Source[];
  relatedQueries?: string[];
  searchQuery?: string;
  totalResults?: number;
};

/**
 * Detect video embed URL from various video platforms.
 */
export function detectVideoEmbed(
  url: string,
): { embedUrl: string; provider: string } | null {
  if (!url) return null;

  // YouTube patterns
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  );
  if (youtubeMatch?.[1]) {
    return {
      provider: "youtube",
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0&modestbranding=1`,
    };
  }

  // Vimeo patterns
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch?.[1]) {
    return {
      provider: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0`,
    };
  }

  // Dailymotion patterns
  const dailymotionMatch = url.match(
    /(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/,
  );
  if (dailymotionMatch?.[1]) {
    return {
      provider: "dailymotion",
      embedUrl: `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}`,
    };
  }

  return null;
}
