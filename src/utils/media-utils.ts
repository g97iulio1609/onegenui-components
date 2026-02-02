type MediaSourceType = "stream" | "upload" | "url" | "embed";

type MediaStatus = "generating" | "ready" | "failed";

type MediaTag = {
  label: string;
  tone?: "default" | "success" | "warning" | "danger";
};

type MediaMetadata = {
  model?: string | null;
  prompt?: string | null;
  negativePrompt?: string | null;
  seed?: number | null;
  steps?: number | null;
  guidance?: number | null;
  sampler?: string | null;
  scheduler?: string | null;
  style?: string | null;
  lora?: string[] | null;
  upscaler?: string | null;
  safety?: string | null;
  aspectRatio?: string | null;
};

type MediaIdentity = {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  createdAt?: string | null;
  author?: string | null;
  license?: string | null;
  source?: string | null;
};

type MediaStatusInfo = {
  status?: MediaStatus | null;
  progress?: number | null;
  errorMessage?: string | null;
};

type MediaLocation = {
  sourceType?: MediaSourceType | null;
  src?: string | null;
  streamUrl?: string | null;
  embedUrl?: string | null;
  uploadName?: string | null;
  provider?: "youtube" | "vimeo" | "custom" | null;
};

type MediaSpec = {
  identity?: MediaIdentity;
  metadata?: MediaMetadata;
  status?: MediaStatusInfo;
  location?: MediaLocation;
  tags?: MediaTag[] | null;
  sizeBytes?: number | null;
};

type MediaPresentation = {
  title?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  format?: string | null;
  duration?: number | null;
  fps?: number | null;
  resolution?: string | null;
};

export type MediaCoreProps = {
  item: MediaSpec & MediaPresentation;
  accentColor?: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// SafeImage - Image with fallback for broken URLs
// ─────────────────────────────────────────────────────────────────────────────

// LRU cache for broken image URLs (client-side only)
const brokenImageCache = new Set<string>();
const BROKEN_CACHE_MAX_SIZE = 500;

/**
 * Check if an image URL is known to be broken
 */
export function isImageBroken(src: string): boolean {
  return brokenImageCache.has(src);
}

/**
 * Mark an image URL as broken
 */
export function markImageBroken(src: string): void {
  if (brokenImageCache.size >= BROKEN_CACHE_MAX_SIZE) {
    // Remove oldest entries (Set maintains insertion order)
    const iterator = brokenImageCache.values();
    for (let i = 0; i < 100; i++) {
      const next = iterator.next();
      if (next.done) break;
      brokenImageCache.delete(next.value);
    }
  }
  brokenImageCache.add(src);
}

/**
 * Get a fallback image URL based on category
 */
export function getFallbackImage(
  category: "hotel" | "flight" | "trip" | "generic" = "generic",
): string {
  const fallbacks: Record<"hotel" | "flight" | "trip" | "generic", string> = {
    hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    flight: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    trip: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    generic: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  };
  return fallbacks[category];
}

/**
 * Sort images by resolution (highest first)
 */
export function sortImagesByResolution<T extends { width?: number; height?: number }>(
  images: T[],
): T[] {
  return [...images].sort((a, b) => {
    const aRes = (a.width || 0) * (a.height || 0);
    const bRes = (b.width || 0) * (b.height || 0);
    return bRes - aRes; // Descending order
  });
}

/**
 * Filter and sort images, preferring high resolution and excluding known broken URLs
 */
export function selectBestImages<T extends { src?: string; url?: string; width?: number; height?: number }>(
  images: T[],
  maxCount: number = 5,
): T[] {
  // Filter out broken URLs
  const valid = images.filter((img) => {
    const src = img.src || img.url;
    return src && !isImageBroken(src);
  });
  
  // Sort by resolution
  const sorted = sortImagesByResolution(valid);
  
  // Return top N
  return sorted.slice(0, maxCount);
}

export function formatBytes(bytes?: number | null): string {
  if (!bytes || bytes <= 0) return "-";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(value >= 10 ? 0 : 1)} ${units[unitIndex]}`;
}

export function formatDuration(seconds?: number | null): string {
  if (!seconds || seconds <= 0) return "-";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  if (hours > 0) {
    return `${hours}:${String(remMins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

export function getStatusTone(status?: MediaStatus | null): MediaTag["tone"] {
  switch (status) {
    case "ready":
      return "success";
    case "failed":
      return "danger";
    case "generating":
    default:
      return "warning";
  }
}

export function getProgressPercent(progress?: number | null): number {
  if (!progress) return 0;
  if (progress <= 1) return Math.round(progress * 100);
  return Math.round(progress);
}

export function buildStatusLabel(status?: MediaStatus | null): string {
  switch (status) {
    case "ready":
      return "Ready";
    case "failed":
      return "Failed";
    case "generating":
    default:
      return "Generating";
  }
}

export function getAccentColor(accentColor?: string) {
  return accentColor ?? "var(--primary)";
}
