import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
} from "lucide-react";

import type { Workout } from "@/types/workout";
import WorkoutActions from "./WorkoutActions";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <div className="mx-auto max-w-360 px-5 py-8 sm:px-8 md:py-12 lg:px-10">
        {/* Back */}
        <Link
          href="/"
          className="mb-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={15} />
          Back To Library
        </Link>

        {/* Main two-column layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-md border border-white/10 bg-[#15171c] lg:aspect-auto lg:min-h-155">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />

            <div className="absolute left-5 top-5">
              <span className="bg-[#ccff00] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-black">
                {workout.difficulty}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
              Workout Details
            </p>

            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#ccff00] px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">
              {workout.description}
            </p>

            {/* Key Specs */}
            <div className="mt-7 overflow-hidden border border-white/10">
              <div className="border-b border-white/10 bg-[#15171c] px-4 py-3">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ccff00]">
                  Key Specs
                </p>
              </div>

              <div className="grid sm:grid-cols-2">
                <Spec
                  label="Equipment"
                  value={workout.equipment}
                />

                <Spec
                  label="Difficulty"
                  value={workout.difficulty}
                />

                <Spec
                  label="Sets"
                  value={String(workout.sets)}
                />

                <Spec
                  label="Reps"
                  value={workout.reps}
                />

                <Spec
                  label="Duration"
                  value={`${workout.duration} min`}
                />

                <Spec
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                />

                <Spec
                  label="Rating"
                  value={String(workout.rating)}
                />
              </div>
            </div>

            {/* Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>

        {/* Instructions */}
        <section className="mt-16 border-t border-white/10 pt-10 md:mt-20 md:pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
                Instructions
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.035em] text-white sm:text-5xl">
                How To
              </h2>
            </div>

            <ol className="space-y-4">
              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={`${workout.id}-${index}`}
                    className="flex gap-4 border-b border-white/10 pb-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#ccff00] text-[10px] font-black text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-zinc-400">
                      {instruction}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>
        </section>

        {/* Target muscle groups */}
        <section className="mt-12 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <Target
              size={17}
              className="text-[#ccff00]"
            />

            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
              Target Muscle Groups
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="border border-white/10 bg-[#15171c] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white"
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

function Spec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-14 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 last:border-b-0 sm:odd:border-r">
      <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600">
        {label}
      </span>

      <span className="text-right text-xs font-bold text-white">
        {value}
      </span>
    </div>
  );
}