export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0c0f]">
      <section className="mx-auto max-w-360 px-5 py-8 sm:px-8 lg:px-10">
        {/* Hero skeleton */}
        <div className="h-90 animate-pulse rounded-xl border border-white/10 bg-[#15171c] sm:h-90" />

        {/* Library skeleton */}
        <div className="mt-12">
          <div className="h-8 w-48 animate-pulse bg-[#15171c]" />

          <div className="mt-3 h-4 w-80 max-w-full animate-pulse bg-[#15171c]" />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden border border-white/10 bg-[#14161b]"
              >
                <div className="aspect-video animate-pulse bg-[#1b1d22]" />

                <div className="space-y-3 p-4">
                  <div className="h-3 w-20 animate-pulse bg-[#1b1d22]" />
                  <div className="h-5 w-40 animate-pulse bg-[#1b1d22]" />
                  <div className="h-3 w-28 animate-pulse bg-[#1b1d22]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}