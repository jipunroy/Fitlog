import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        FitLog
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {workout.name}
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                {workout.equipment}
              </p>

              <div className="mt-4 flex gap-4 text-sm text-zinc-300">
                <span>{workout.duration} min</span>
                <span>{workout.caloriesBurned} kcal</span>
                <span>★ {workout.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}