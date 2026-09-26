"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "@/types/workout";

import {
  getStoredCompleted,
  getStoredPlan,
  getStoredSaved,
  saveCompleted,
  savePlan,
  saveSaved,
} from "@/lib/storage";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  completedIds: number[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => boolean;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
  isDone: (id: number) => boolean;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;

  planCount: number;
  savedCount: number;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Load stored data as the initial state
  const [plan, setPlan] = useState<Workout[]>(() => getStoredPlan());

  const [saved, setSaved] = useState<Workout[]>(() =>
    getStoredSaved()
  );

  const [completedIds, setCompletedIds] = useState<number[]>(() =>
    getStoredCompleted()
  );

  // Persist today's plan
  useEffect(() => {
    savePlan(plan);
  }, [plan]);

  // Persist saved workouts
  useEffect(() => {
    saveSaved(saved);
  }, [saved]);

  // Persist completed workouts
  useEffect(() => {
    saveCompleted(completedIds);
  }, [completedIds]);

  /**
   * Add workout to today's plan.
   *
   * Maximum allowed workouts = 5.
   */
  const addToPlan = (workout: Workout): boolean => {
    if (plan.length >= 5) {
      return false;
    }

    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    setPlan((current) => {
      if (current.length >= 5) {
        return current;
      }

      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });

    return true;
  };

  /**
   * Remove workout from today's plan.
   */
  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );

    // Also remove its completed state
    setCompletedIds((current) =>
      current.filter((completedId) => completedId !== id)
    );
  };

  /**
   * Save workout for later.
   */
  const saveWorkout = (workout: Workout): boolean => {
    if (saved.some((item) => item.id === workout.id)) {
      return false;
    }

    setSaved((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });

    return true;
  };

  /**
   * Remove workout from saved list.
   */
  const removeFromSaved = (id: number) => {
    setSaved((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  /**
   * Mark workout as done.
   */
  const markAsDone = (id: number) => {
    setCompletedIds((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [...current, id];
    });
  };

  /**
   * Check if workout is completed.
   */
  const isDone = (id: number) => {
    return completedIds.includes(id);
  };

  /**
   * Check if workout is in today's plan.
   */
  const isInPlan = (id: number) => {
    return plan.some((workout) => workout.id === id);
  };

  /**
   * Check if workout is saved.
   */
  const isSaved = (id: number) => {
    return saved.some((workout) => workout.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        completedIds,

        addToPlan,
        removeFromPlan,

        saveWorkout,
        removeFromSaved,

        markAsDone,
        isDone,

        isInPlan,
        isSaved,

        planCount: plan.length,
        savedCount: saved.length,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}