import Hero from "@/components/home/Hero";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10"
      >
        <h2 className="text-4xl font-black uppercase text-white">
          The Library
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="overflow-hidden border border-white/10 bg-zinc-900"
            >
              <img
                src={workout.image}
                alt={workout.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-white">
                  {workout.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  {workout.equipment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}