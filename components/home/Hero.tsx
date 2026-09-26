import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#0b0c0f] px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-300 items-center overflow-hidden rounded-xl border border-white/10 bg-[#15171c] px-6 py-10 sm:px-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
        {/* Content */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00] sm:text-xs">
            Workout Library
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[82px]">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33]"
          >
            Browse Workouts
            <ArrowDownRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative mt-8 min-h-70 sm:min-h-90 lg:mt-0 lg:min-h-107.5">
          <Image
            src="/images/hero/banner.png"
            alt="FitLog workout illustration"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}