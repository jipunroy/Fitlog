import { notFound } from "next/navigation";

import WorkoutDetails from "@/components/workout/WorkoutDetails";
import { getWorkout } from "@/lib/api";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutPage({
  params,
}: WorkoutPageProps) {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}