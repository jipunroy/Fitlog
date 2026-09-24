export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="h-3 w-32 animate-pulse bg-zinc-800" />

            <div className="mt-6 space-y-3">
              <div className="h-12 w-full max-w-xl animate-pulse bg-zinc-800 sm:h-16" />
              <div className="h-12 w-4/5 max-w-lg animate-pulse bg-zinc-800 sm:h-16" />
            </div>

            <div className="mt-7 h-16 w-full max-w-xl animate-pulse bg-zinc-900" />

            <div className="mt-8 h-12 w-48 animate-pulse bg-zinc-800" />
          </div>

          <div className="min-h-[300px] animate-pulse bg-zinc-900 sm:min-h-[400px]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="h-3 w-28 animate-pulse bg-zinc-800" />
          <div className="h-10 w-64 animate-pulse bg-zinc-800" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden border border-white/10 bg-[#111216]"
            >
              <div className="aspect-[4/3] animate-pulse bg-zinc-900" />

              <div className="space-y-4 p-5">
                <div className="h-4 w-24 animate-pulse bg-zinc-800" />
                <div className="h-6 w-3/4 animate-pulse bg-zinc-800" />
                <div className="h-3 w-1/2 animate-pulse bg-zinc-900" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}