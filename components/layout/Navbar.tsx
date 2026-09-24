"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Brand from "./Brand";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isPlan = pathname === "/my-plan";

  // Temporary values.
  // FitLogContext তৈরি করার পর এগুলো live হবে.
  const planCount = 0;
  const savedCount = 0;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0f]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand */}
        <Brand />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition ${
              isHome
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition ${
              isPlan
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-black transition hover:scale-105"
          >
            <span>Plan</span>
            <span>{planCount}</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white transition hover:border-white"
          >
            <span>Saved</span>
            <span>{savedCount}</span>
          </Link>
        </div>

        {/* Mobile My Plan */}
        <Link
          href="/my-plan"
          className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white md:hidden"
        >
          My Plan
          <ChevronRight size={15} />
        </Link>
      </div>
    </header>
  );
}