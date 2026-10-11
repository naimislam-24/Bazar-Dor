import Link from "next/link";

interface IAllCard {
  id: number;
  image: string;
  nameBn: string;
  change: {
    dir: string;
    pct: number;
  };
}

const AllCard = async () => {
  const res = await fetch(
    // "https://api.api-store.workers.dev/api/bazardor/products",
    // "https://api.abcz.workers.dev/api/bazardor/products",
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IAllCard[] = await res.json();
  // console.log(data);

  const sortedData = [...data].sort((a, b) => Number(a.id) - Number(b.id));

  // const filterDataIncress = data
  //   .filter((f) => f.change.dir === "up")
  //   .sort((a, b) => b.change.pct - a.change.pct);

  // const filterDataDecress = data
  //   .filter((f) => f.change.dir === "down")
  //   .sort((a, b) => b.change.pct - a.change.pct);

  return (
    <div
      id="all-products"
      className="container mx-auto mt-8 w-full px-3 sm:mt-10 sm:px-4 lg:px-6"
    >
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">সব পণ্য</h2>
        <h4 className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-base">
          মোট ৩৩টি পণ্য দেখানো হচ্ছে
        </h4>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {sortedData.map((d) => (
          <Link href={`/details/${d.id}`} key={d.id}>
            <div key={d.id} className="h-full">
              <div>
                <div>
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                        {d.image}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-base font-semibold leading-tight text-gray-900 sm:text-lg">
                          {d.nameBn}
                        </h3>
                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          প্রতি
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-gray-600 sm:text-sm">
                        আজকের দাম
                      </p>

                      <div className="mt-1 flex items-center justify-between gap-2">
                        <p className="min-w-0 text-xl font-bold text-gray-900 sm:text-2xl">
                          <span className="text-base font-medium sm:text-lg">
                            টাকা
                          </span>
                        </p>

                        <span
                          className={`inline-flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium sm:gap-1.5 sm:px-3 sm:text-sm ${
                            d.change.dir === "up"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {d.change.dir === "up"
                            ? "▲"
                            : d.change.dir === "down"
                              ? "▼"
                              : "—"}
                          {d.change.pct}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
