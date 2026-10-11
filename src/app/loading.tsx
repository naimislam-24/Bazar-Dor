const Loading = () => {
  return (
    <div className="container mx-auto mt-8 w-full px-3 sm:mt-10 sm:px-4 lg:px-6">
      <div className="space-y-3">
        <div className="skeleton h-7 w-32 rounded-lg sm:h-8 sm:w-40" />
        <div className="skeleton h-4 w-48 rounded-md sm:w-60" />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="h-full rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="skeleton h-12 w-12 shrink-0 rounded-xl sm:h-14 sm:w-14" />
              <div className="min-w-0 flex-1 space-y-2">
                <div className="skeleton h-5 w-3/4 rounded-md" />
                <div className="skeleton h-3 w-12 rounded-md" />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="skeleton h-4 w-24 rounded-md" />
              <div className="flex items-center justify-between gap-2">
                <div className="skeleton h-7 w-28 rounded-md sm:h-8" />
                <div className="skeleton h-7 w-16 shrink-0 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
