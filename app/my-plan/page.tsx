"use client";

import { useMemo, useState } from "react";

import PlanStats from "@/components/plan/PlanStats";
import PlanTabs from "@/components/plan/PlanTabs";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import EmptyPlan from "@/components/plan/EmptyPlan";
import PlanSearch from "@/components/plan/PlanSearch";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] =
    useState<"today" | "saved">("today");

  const [search, setSearch] = useState("");

  const { plan, saved } = useFitLog();

  const currentWorkouts =
    activeTab === "today" ? plan : saved;

  const filteredWorkouts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return currentWorkouts;
    }

    return currentWorkouts.filter((workout) => {
      const nameMatch = workout.name
        .toLowerCase()
        .includes(query);

      const muscleMatch = workout.muscleGroups.some(
        (muscle) =>
          muscle.toLowerCase().includes(query)
      );

      const equipmentMatch = workout.equipment
        .toLowerCase()
        .includes(query);

      return (
        nameMatch ||
        muscleMatch ||
        equipmentMatch
      );
    });
  }, [currentWorkouts, search]);

  const handleTabChange = (
    tab: "today" | "saved"
  ) => {
    setActiveTab(tab);
    setSearch("");
  };

  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <div className="mx-auto max-w-360 px-5 py-12 sm:px-8 md:py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Your Log
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-6xl">
            My Plan
          </h1>

          <p className="mt-5 text-sm leading-6 text-zinc-500 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-10">
          <PlanStats />
        </div>

        <div className="mt-12">
          <PlanTabs
            activeTab={activeTab}
            onChange={handleTabChange}
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            {filteredWorkouts.length}{" "}
            {filteredWorkouts.length === 1
              ? "Workout"
              : "Workouts"}
          </p>

          <PlanSearch
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="mt-8 space-y-4">
          {filteredWorkouts.length === 0 ? (
            search ? (
              <div className="border border-dashed border-white/15 px-6 py-16 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
                  No Results
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase text-white">
                  No Workouts Found
                </h2>

                <p className="mt-3 text-sm text-zinc-500">
                  Try another workout name or muscle group.
                </p>
              </div>
            ) : (
              <EmptyPlan type={activeTab} />
            )
          ) : (
            filteredWorkouts.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                type={activeTab}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}