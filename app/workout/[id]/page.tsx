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

  try {
    const workout = await getWorkout(id);

    return <WorkoutDetails workout={workout} />;
  } catch {
    notFound();
  }
}