import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <Hero />
      <WorkoutLibrary workouts={workouts} />
    </main>
  );
}