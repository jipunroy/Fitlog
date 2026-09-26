import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
} from "lucide-react";

import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-md border border-white/10 bg-[#14161b] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#1b1d22]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        {/* Muscle Tags */}
        <div className="flex min-h-5 flex-wrap gap-1.5">
          {workout.muscleGroups.slice(0, 3).map((muscle) => (
            <span
              key={muscle}
              className="bg-[#ccff00] px-2 py-0.5 text-[8px] font-black uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="mt-3 truncate text-sm font-black uppercase tracking-tight text-white transition group-hover:text-[#ccff00] sm:text-base">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 truncate text-[9px] uppercase tracking-wide text-zinc-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-1 text-zinc-500">
            <Clock3 size={11} />
            <span className="text-[9px] font-medium">
              {workout.duration} min
            </span>
          </div>

          <div className="flex items-center gap-1 text-zinc-500">
            <Flame size={11} />
            <span className="text-[9px] font-medium">
              {workout.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex items-center gap-1 text-zinc-500">
            <Star size={11} />
            <span className="text-[9px] font-medium">
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}