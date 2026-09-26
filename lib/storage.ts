import type { Workout } from "@/types/workout";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const COMPLETED_KEY = "fitlog-completed";

function getStoredArray<T>(key: string): T[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return [];
    }

    const parsed: unknown = JSON.parse(stored);

    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function saveStoredArray<T>(key: string, data: T[]): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // Ignore localStorage errors
  }
}

export function getStoredPlan(): Workout[] {
  return getStoredArray<Workout>(PLAN_KEY);
}

export function getStoredSaved(): Workout[] {
  return getStoredArray<Workout>(SAVED_KEY);
}

export function getStoredCompleted(): number[] {
  return getStoredArray<number>(COMPLETED_KEY);
}

export function savePlan(workouts: Workout[]): void {
  saveStoredArray(PLAN_KEY, workouts);
}

export function saveSaved(workouts: Workout[]): void {
  saveStoredArray(SAVED_KEY, workouts);
}

export function saveCompleted(ids: number[]): void {
  saveStoredArray(COMPLETED_KEY, ids);
}