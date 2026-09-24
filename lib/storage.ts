import { Workout } from "@/types/workout";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

export function getStoredPlan(): Workout[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(PLAN_KEY);

    if (!stored) {
      return [];
    }

    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function getStoredSaved(): Workout[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(SAVED_KEY);

    if (!stored) {
      return [];
    }

    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function savePlan(workouts: Workout[]) {
  localStorage.setItem(PLAN_KEY, JSON.stringify(workouts));
}

export function saveSaved(workouts: Workout[]) {
  localStorage.setItem(SAVED_KEY, JSON.stringify(workouts));
}