"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface PlanWorkoutCardProps {
  workout: Workout;
  type: "today" | "saved";
}

export default function PlanWorkoutCard({
  workout,
  type,
}: PlanWorkoutCardProps) {
  const {
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [done, setDone] = useState(false);

  const handleDone = () => {
    setDone(true);

    toast.success(`${workout.name} marked as done`);
  };

  const handleRemove = () => {
    if (type === "today") {
      removeFromPlan(workout.id);

      toast.success(`${workout.name} removed from today's plan`);
    } else {
      removeFromSaved(workout.id);

      toast.success(`${workout.name} removed from saved`);
    }
  };

  return (
    <article
      className={`group relative overflow-hidden border bg-[#111216] transition ${
        done
          ? "border-[#ccff00]/50"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="grid md:grid-cols-[220px_1fr]">
        {/* Thumbnail */}
        <Link
          href={`/workout/${workout.id}`}
          className="relative min-h-[210px] overflow-hidden"
        >
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className={`object-cover transition duration-500 group-hover:scale-105 ${
              done ? "opacity-50 grayscale" : ""
            }`}
          />
        </Link>

        {/* Content */}
        <div className="flex flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-5">
            <div>
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups
                  .slice(0, 3)
                  .map((muscle) => (
                    <span
                      key={muscle}
                      className="border border-white/15 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-500"
                    >
                      {muscle}
                    </span>
                  ))}
              </div>

              <Link href={`/workout/${workout.id}`}>
                <h3
                  className={`mt-3 text-2xl font-black uppercase tracking-tight transition ${
                    done
                      ? "text-zinc-500 line-through"
                      : "text-white group-hover:text-[#ccff00]"
                  }`}
                >
                  {workout.name}
                </h3>
              </Link>

              <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
                {workout.equipment}
              </p>
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={handleRemove}
              aria-label={`Remove ${workout.name}`}
              className="shrink-0 p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white"
            >
              <X size={19} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-y border-white/10 py-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <Clock3 size={15} />
              <span className="text-xs font-semibold">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <Flame size={15} />
              <span className="text-xs font-semibold">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <Star size={15} />
              <span className="text-xs font-semibold">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              href={`/workout/${workout.id}`}
              className="inline-flex items-center justify-center border border-white/20 px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white transition hover:border-white"
            >
              View Details
            </Link>

            {type === "today" && (
              <button
                type="button"
                onClick={handleDone}
                disabled={done}
                className="inline-flex items-center justify-center gap-2 bg-[#ccff00] px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33] disabled:cursor-default disabled:opacity-60"
              >
                <Check size={15} />

                {done ? "Done" : "Mark as Done"}
              </button>
            )}
          </div>

          {done && (
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ccff00]">
              Completed
            </p>
          )}
        </div>
      </div>
    </article>
  );
}