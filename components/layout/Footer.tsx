import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090b]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/images/footer/logo.png"
            alt="FitLog logo"
            width={34}
            height={34}
          />

          <div>
            <p className="text-lg font-black tracking-tight text-white">
              FITLOG
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Workout Library
            </p>
          </div>
        </div>

        <p className="text-xs leading-5 text-zinc-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
