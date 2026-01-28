"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { cn } from "../../utils/cn";
import {
  MapPin,
  Link as LinkIcon,
  Calendar,
  MessageCircle,
  UserPlus,
  Check,
  User,
} from "lucide-react";
import { EmptyState } from "../../utils/shared-components";

type Profile = {
  name: string;
  handle: string;
  bio?: string;
  avatar?: string;
  coverImage?: string;
  location?: string;
  website?: string;
  joinedDate?: string;
  stats?: {
    followers: number;
    following: number;
    posts: number;
  };
  isFollowing?: boolean;
};

export type ProfileCardProps = {
  profile?: Profile;
};

export const ProfileCard = memo(function ProfileCard({
  element,
  children,
}: ComponentRenderProps) {
  const { profile } = element.props as ProfileCardProps;

  if (!profile) {
    return (
      <EmptyState icon={<User className="w-10 h-10" />} message="No profile" />
    );
  }

  return (
    <div className="group relative rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Cover Image */}
      <div className="h-32 sm:h-40 relative bg-zinc-800 border-b border-white/5">
        {profile.coverImage ? (
          <div className="absolute inset-0">
            <img
              src={profile.coverImage}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900 to-zinc-950" />
        )}

        {/* Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="px-6 pb-6 relative">
        {/* Avatar - Floating */}
        <div className="absolute -top-12 left-6">
          <div className="w-24 h-24 rounded-2xl bg-black border-4 border-zinc-900 shadow-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-white/30 transition-all group-hover:scale-105 duration-300">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-2xl font-bold text-zinc-500 uppercase">
                {profile.name[0]}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end pt-4 mb-4 gap-2">
          <button className="h-9 px-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors">
            <MessageCircle size={14} />
            <span className="hidden sm:inline">Message</span>
          </button>
          <button
            className={cn(
              "h-9 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg",
              profile.isFollowing
                ? "bg-transparent border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 shadow-emerald-500/10"
                : "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-white/10",
            )}
          >
            {profile.isFollowing ? (
              <Check size={14} strokeWidth={3} />
            ) : (
              <UserPlus size={14} strokeWidth={3} />
            )}
            {profile.isFollowing ? "Following" : "Follow"}
          </button>
        </div>

        {/* Info */}
        <div className="mt-2">
          <h2 className="text-2xl font-black text-white tracking-tight leading-none mb-1 flex items-center gap-2">
            {profile.name}
            {profile.isFollowing && (
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgb(16,185,129)]" />
            )}
          </h2>
          <div className="text-sm text-zinc-500 font-mono mb-4">
            @{profile.handle}
          </div>

          {profile.bio && (
            <p className="text-sm text-zinc-300 leading-relaxed mb-6 max-w-md border-l-2 border-white/10 pl-3 italic">
              {profile.bio}
            </p>
          )}

          {/* Meta Grid */}
          <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-6 font-medium">
            {profile.location && (
              <div className="flex items-center gap-1.5">
                <MapPin size={12} className="text-zinc-600" />
                {profile.location}
              </div>
            )}
            {profile.website && (
              <a
                href={profile.website}
                target="_blank"
                className="flex items-center gap-1.5 text-sky-500/80 hover:text-sky-400 hover:underline transition-colors decoration-sky-500/30"
              >
                <LinkIcon size={12} />
                {profile.website.replace(/^https?:\/\//, "")}
              </a>
            )}
            {profile.joinedDate && (
              <div className="flex items-center gap-1.5">
                <Calendar size={12} className="text-zinc-600" />
                Joined {profile.joinedDate}
              </div>
            )}
          </div>

          {/* Stats Bar */}
          <div className="flex items-center gap-8 pt-6 border-t border-dashed border-white/10">
            {profile.stats &&
              Object.entries(profile.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <span className="text-lg font-black text-white leading-none">
                    {value}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">
                    {key}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
});
