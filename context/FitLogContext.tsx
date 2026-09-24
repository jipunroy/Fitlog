"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { Workout } from "@/types/workout";
import {
  getStoredPlan,
  getStoredSaved,
  savePlan,
  saveSaved,
} from "@/lib/storage";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

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
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPlan(getStoredPlan());
    setSaved(getStoredSaved());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    savePlan(plan);
  }, [plan, loaded]);

  useEffect(() => {
    if (!loaded) return;

    saveSaved(saved);
  }, [saved, loaded]);

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    if (plan.length >= 5) {
      return false;
    }

    setPlan((current) => [...current, workout]);

    return true;
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const isInPlan = (id: number) => {
    return plan.some((workout) => workout.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((workout) => workout.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
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