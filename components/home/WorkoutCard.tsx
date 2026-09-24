import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden border border-white/10 bg-[#111216] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <div className="absolute left-4 top-4">
          <span className="bg-[#ccff00] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black">
            {workout.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.slice(0, 3).map((muscle) => (
            <span
              key={muscle}
              className="border border-white/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-400"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mt-4 text-xl font-black uppercase tracking-tight text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Clock3 size={14} />
            <span className="text-xs font-semibold">
              {workout.duration}m
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <Flame size={14} />
            <span className="text-xs font-semibold">
              {workout.caloriesBurned}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <Star size={14} />
            <span className="text-xs font-semibold">
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}