import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  return (
    <section
      id="library"
      className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10"
    >
      {/* Heading */}
      <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">
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

      {/* Workout Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}