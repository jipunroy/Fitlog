"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full md:max-w-sm">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search workouts..."
        className="h-12 w-full border border-white/10 bg-[#111216] pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#ccff00]/60"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}