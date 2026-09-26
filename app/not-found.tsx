import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#0b0c0f]">
      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 text-center sm:px-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ccff00]">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl font-black uppercase tracking-tighter text-white sm:text-8xl">
          Not Found
        </h1>

        <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33]"
        >
          <ArrowLeft size={15} />
          Back To Workouts
        </Link>
      </div>
    </main>
  );
}