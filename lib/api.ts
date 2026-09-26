import type { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

/**
 * Fetch all workouts from the FitLog API.
 */
export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workouts: ${response.status} ${response.statusText}`
    );
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid workout data received from API.");
  }

  return data as Workout[];
}

/**
 * Find a single workout by ID.
 *
 * The provided API does not currently expose a working
 * /api/fitlog/:id endpoint, so we fetch the collection
 * and find the matching workout locally.
 */
export async function getWorkout(
  id: string | number
): Promise<Workout> {
  const workouts = await getWorkouts();

  const numericId =
    typeof id === "string" ? Number(id) : id;

  if (!Number.isInteger(numericId)) {
    throw new Error("Invalid workout ID.");
  }

  const workout = workouts.find(
    (item) => item.id === numericId
  );

  if (!workout) {
    throw new Error("Workout not found.");
  }

  return workout;
}