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
    <div className="relative w-full md:w-75">
      <label htmlFor="workout-search" className="sr-only">
        Search workouts
      </label>

      <Search
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        id="workout-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search workouts..."
        autoComplete="off"
        className="h-11 w-full border border-white/10 bg-[#111216] pl-10 pr-10 text-xs text-white outline-none transition placeholder:text-zinc-600 focus:border-[#ccff00]/60"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-white"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}