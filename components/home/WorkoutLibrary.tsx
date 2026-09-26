"use client";

import { useMemo, useState } from "react";

import type { Workout } from "@/types/workout";

import WorkoutCard from "./WorkoutCard";
import SearchBar from "./SearchBar";
import SortDropdown, {
  type SortOption,
} from "./SortDropdown";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const filteredWorkouts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = workouts.filter((workout) => {
      if (!query) {
        return true;
      }

      const searchableText = [
        workout.name,
        workout.equipment,
        workout.difficulty,
        ...workout.muscleGroups,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "calories":
          return b.caloriesBurned - a.caloriesBurned;

        case "rating":
          return b.rating - a.rating;

        case "duration":
        default:
          return a.duration - b.duration;
      }
    });
  }, [workouts, search, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-360 px-5 py-14 sm:px-8 md:py-16 lg:px-10"
    >
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-black uppercase tracking-[-0.035em] text-white sm:text-4xl">
              The Library
            </h2>

            <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Search + Sort */}
          <div className="flex w-full flex-col gap-2.5 sm:flex-row lg:w-auto">
            <SearchBar
              value={search}
              onChange={setSearch}
            />

            <SortDropdown
              value={sortBy}
              onChange={setSortBy}
            />
          </div>
        </div>

        {/* Result Count */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
            Showing {filteredWorkouts.length}{" "}
            {filteredWorkouts.length === 1
              ? "Workout"
              : "Workouts"}
          </p>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#ccff00] transition hover:text-white"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {filteredWorkouts.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      ) : (
        <div className="mt-7 border border-dashed border-white/10 px-6 py-20 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
            No Results
          </p>

          <h3 className="mt-3 text-2xl font-black uppercase text-white">
            No Workouts Found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-zinc-500">
            Try another workout name, muscle group, equipment,
            or difficulty.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-6 bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33]"
          >
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
}