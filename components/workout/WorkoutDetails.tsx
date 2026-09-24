import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
} from "lucide-react";

import { Workout } from "@/types/workout";
import WorkoutActions from "./WorkoutActions";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 md:py-14 lg:px-10">
        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={16} />
          Back to Library
        </Link>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 lg:aspect-auto lg:min-h-[650px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute left-5 top-5">
              <span className="bg-[#ccff00] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-black">
                {workout.difficulty}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
              Workout Details
            </p>

            {/* Title */}
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {workout.name}
            </h1>

            {/* Muscle Groups */}
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              {workout.description}
            </p>

            {/* Key Specs */}
            <div className="mt-8 border-y border-white/10">
              <div className="border-b border-white/10 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                  Key Specs
                </p>
              </div>

              <div className="grid sm:grid-cols-2">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:border-r">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Equipment
                  </span>
                  <span className="text-sm font-bold text-white">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Difficulty
                  </span>
                  <span className="text-sm font-bold text-white">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:border-r">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Sets
                  </span>
                  <span className="text-sm font-bold text-white">
                    {workout.sets}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Reps
                  </span>
                  <span className="text-sm font-bold text-white">
                    {workout.reps}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:border-r">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Duration
                  </span>
                  <span className="text-sm font-bold text-white">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Calories
                  </span>
                  <span className="text-sm font-bold text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-4 sm:border-r">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Rating
                  </span>
                  <span className="text-sm font-bold text-white">
                    {workout.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Muscle Groups
                  </span>
                  <span className="text-right text-sm font-bold text-white">
                    {workout.muscleGroups.join(", ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>

        {/* Instructions */}
        <section className="mt-20 border-t border-white/10 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
                Instructions
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-5xl">
                How To
              </h2>
            </div>

            <ol className="space-y-5">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={`${workout.id}-${index}`}
                  className="flex gap-5 border-b border-white/10 pb-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#ccff00] text-xs font-black text-black">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-7 text-zinc-400">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Target */}
        <section className="mt-16 border-t border-white/10 pt-10">
          <div className="flex items-center gap-3">
            <Target className="text-[#ccff00]" size={20} />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              Target Muscle Groups
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
              >
                {muscle}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}