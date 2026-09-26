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
    <div className="relative w-full md:w-42.5">
      <label htmlFor="sort-workouts" className="sr-only">
        Sort By
      </label>

      <select
        id="sort-workouts"
        value={value}
        onChange={(event) =>
          onChange(event.target.value as SortOption)
        }
        className="h-11 w-full appearance-none border border-white/10 bg-[#111216] px-3 pr-9 text-[10px] font-bold uppercase tracking-widest text-white outline-none transition focus:border-[#ccff00]/60"
      >
        <option value="duration">Sort By: Duration</option>
        <option value="calories">Sort By: Calories</option>
        <option value="rating">Sort By: Rating</option>
      </select>

      <ChevronDown
        size={15}
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
      />
    </div>
  );
}