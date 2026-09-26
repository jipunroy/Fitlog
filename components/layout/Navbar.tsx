"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import Brand from "./Brand";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = useFitLog();

  const isWorkout =
    pathname === "/" || pathname.startsWith("/workout");

  const isPlan = pathname.startsWith("/my-plan");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0f]/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <Brand />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] transition ${
              isWorkout
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] transition ${
              isPlan
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Plan */}
          <Link
            href="/my-plan"
            aria-label={`Today's plan: ${planCount} workouts`}
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-black transition hover:scale-105 sm:px-3"
          >
            <span>Plan</span>

            <span className="flex min-w-4.25 items-center justify-center rounded-full bg-black/10 px-1">
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            aria-label={`Saved workouts: ${savedCount}`}
            className="flex items-center gap-1.5 rounded-full border border-white/25 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-white transition hover:border-white sm:px-3"
          >
            <span>Saved</span>

            <span className="flex min-w-4.25 items-center justify-center rounded-full border border-white/20 px-1">
              {savedCount}
            </span>
          </Link>

          {/* Mobile My Plan */}
          <Link
            href="/my-plan"
            className="ml-1 flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-white md:hidden"
            aria-label="Go to My Plan"
          >
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}