"use client";

import {
  Dumbbell,
  Flame,
  Timer,
} from "lucide-react";

import { useFitLog } from "@/context/FitLogContext";

export default function PlanStats() {
  const { plan } = useFitLog();

  const exercises = plan.length;

  const minutes = plan.reduce(
    (total, workout) =>
      total + workout.duration,
    0
  );

  const calories = plan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  const stats = [
    {
      label: "Exercises",
      value: exercises,
      icon: Dumbbell,
    },
    {
      label: "Minutes",
      value: minutes,
      icon: Timer,
    },
    {
      label: "Calories",
      value: calories,
      icon: Flame,
    },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="border border-white/10 bg-[#111216] p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>

              <Icon
                size={18}
                className="text-[#ccff00]"
              />
            </div>

            <p className="mt-4 text-3xl font-black text-white">
              {stat.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}