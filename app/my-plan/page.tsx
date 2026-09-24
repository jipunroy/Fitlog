"use client";

import { useState } from "react";

import PlanStats from "@/components/plan/PlanStats";
import PlanTabs from "@/components/plan/PlanTabs";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import EmptyPlan from "@/components/plan/EmptyPlan";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<
    "today" | "saved"
  >("today");

  const { plan, saved } = useFitLog();

  const currentWorkouts =
    activeTab === "today" ? plan : saved;

  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:py-16 lg:px-10">
        {/* Header */}
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

        {/* Metrics */}
        <div className="mt-10">
          <PlanStats />
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <PlanTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* List */}
        <div className="mt-8 space-y-4">
          {currentWorkouts.length === 0 ? (
            <EmptyPlan type={activeTab} />
          ) : (
            currentWorkouts.map((workout) => (
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