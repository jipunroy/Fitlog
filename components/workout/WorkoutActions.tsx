"use client";

import { Bookmark, Check, Plus } from "lucide-react";
import { toast } from "sonner";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
    planCount,
  } = useFitLog();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  const planFull =
    planCount >= 5 && !alreadyInPlan;

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      return;
    }

    if (planFull) {
      toast.error("Today's plan is full. Maximum 5 lifts allowed.");
      return;
    }

    const added = addToPlan(workout);

    if (added) {
      toast.success(
        `${workout.name} added to today's plan`
      );
    }
  };

  const handleSave = () => {
    if (alreadySaved) {
      return;
    }

    saveWorkout(workout);

    toast.success(`${workout.name} saved for later`);
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={alreadyInPlan || planFull}
        className="inline-flex items-center justify-center gap-2 bg-[#ccff00] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadyInPlan ? (
          <Check size={17} />
        ) : (
          <Plus size={17} />
        )}

        {alreadyInPlan
          ? "Already in Today's Plan"
          : planFull
            ? "Plan Full — 5/5"
            : "Add to Today's Plan"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        disabled={alreadySaved}
        className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadySaved ? (
          <Check size={17} />
        ) : (
          <Bookmark size={17} />
        )}

        {alreadySaved ? "Saved for Later" : "Save for Later"}
      </button>
    </div>
  );
}