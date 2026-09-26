"use client";

import {
  Bookmark,
  Check,
  Plus,
} from "lucide-react";
import { toast } from "sonner";

import type { Workout } from "@/types/workout";
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
      toast.info("This workout is already in today's plan.");
      return;
    }

    if (planFull) {
      toast.error(
        "Today's plan is full. Maximum 5 lifts allowed."
      );
      return;
    }

    const added = addToPlan(workout);

    if (added) {
      toast.success("Added to today's plan.");
    } else {
      toast.error("Could not add this workout.");
    }
  };

  const handleSave = () => {
    if (alreadySaved) {
      toast.info("This workout is already saved.");
      return;
    }

    const saved = saveWorkout(workout);

    if (saved) {
      toast.success("Saved for later.");
    } else {
      toast.error("Could not save this workout.");
    }
  };

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {/* Add to Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={alreadyInPlan || planFull}
        className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadyInPlan ? (
          <Check size={16} />
        ) : (
          <Plus size={16} />
        )}

        {alreadyInPlan
          ? "Already In Plan"
          : planFull
            ? "Plan Full — 5/5"
            : "Add To Today's Plan"}
      </button>

      {/* Save */}
      <button
        type="button"
        onClick={handleSave}
        disabled={alreadySaved}
        className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/15 px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white transition hover:border-[#ccff00] hover:text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadySaved ? (
          <Check size={16} />
        ) : (
          <Bookmark size={16} />
        )}

        {alreadySaved
          ? "Saved For Later"
          : "Save For Later"}
      </button>
    </div>
  );
}