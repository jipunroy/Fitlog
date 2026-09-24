"use client";

import { ChevronDown } from "lucide-react";

export type SortOption = "duration" | "calories" | "rating";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <div className="relative w-full md:w-52">
      <label
        htmlFor="sort-workouts"
        className="sr-only"
      >
        Sort By
      </label>

      <select
        id="sort-workouts"
        value={value}
        onChange={(event) =>
          onChange(event.target.value as SortOption)
        }
        className="h-12 w-full appearance-none border border-white/10 bg-[#111216] px-4 pr-11 text-xs font-bold uppercase tracking-[0.12em] text-white outline-none transition focus:border-[#ccff00]/60"
      >
        <option value="duration">Sort By: Duration</option>
        <option value="calories">Sort By: Calories</option>
        <option value="rating">Sort By: Rating</option>
      </select>

      <ChevronDown
        size={17}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />
    </div>
  );
}