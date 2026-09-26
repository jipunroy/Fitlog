import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090b]">
      <div className="mx-auto flex max-w-360 flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/footer/logo.png"
            alt="FitLog"
            width={28}
            height={28}
          />

          <span className="text-base font-black tracking-tight text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-[10px] leading-5 text-zinc-500 sm:text-xs md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}