export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <div className="mx-auto flex min-h-[60vh] max-w-360 items-center justify-center px-5">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#ccff00]" />

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Loading workouts…
          </p>
        </div>
      </div>
    </main>
  );
}