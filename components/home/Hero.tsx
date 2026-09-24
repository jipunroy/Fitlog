import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-white/10 bg-[#0b0c0f]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-20">
        {/* Content */}
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 bg-[#ccff00] px-5 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33]"
          >
            Browse Workouts
            <ArrowDownRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
          <Image
            src="/images/hero/banner.png"
            alt="FitLog workout"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}