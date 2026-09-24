import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EmptyPlanProps {
  type: "today" | "saved";
}

export default function EmptyPlan({
  type,
}: EmptyPlanProps) {
  const isToday = type === "today";

  return (
    <div className="border border-dashed border-white/15 px-6 py-20 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
        Nothing Here Yet
      </p>

      <h2 className="mt-4 text-3xl font-black uppercase text-white">
        {isToday ? "Nothing Here Yet" : "No Saved Workouts"}
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
        {isToday
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts from the library and come back to them later."}
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33]"
      >
        Go to Workouts
        <ArrowRight size={17} />
      </Link>
    </div>
  );
}