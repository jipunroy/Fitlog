"use client";

import { useMemo, useState } from "react";

import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import SearchBar from "./SearchBar";
import SortDropdown, {
  SortOption,
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
      if (!query) return true;

      const nameMatch = workout.name
        .toLowerCase()
        .includes(query);

      const muscleMatch = workout.muscleGroups.some(
        (muscle) =>
          muscle.toLowerCase().includes(query)
      );

      const equipmentMatch = workout.equipment
        .toLowerCase()
        .includes(query);

      return (
        nameMatch ||
        muscleMatch ||
        equipmentMatch
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return a.duration - b.duration;
    });
  }, [workouts, search, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10"
    >
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
              The Library
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-5xl">
              Twelve Lifts.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500 md:text-right">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            {filteredWorkouts.length}{" "}
            {filteredWorkouts.length === 1
              ? "Workout"
              : "Workouts"}
          </p>

          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
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
      </div>

      {/* Workout Grid */}
      {filteredWorkouts.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 border border-dashed border-white/15 px-6 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            No Results
          </p>

          <h3 className="mt-4 text-3xl font-black uppercase text-white">
            No Workouts Found
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
            Try another workout name, muscle group, or equipment.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-7 bg-[#ccff00] px-5 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33]"
          >
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
}