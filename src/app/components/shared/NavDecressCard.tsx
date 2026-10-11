import Link from "next/link";

interface INavIncress {
  id: number;
  image: string;
  nameBn: string;
  today: string;
  change: {
    dir: string;
    pct: number;
  };
}

const NavDecressCard = async () => {
  const res = await fetch(
    // "https://api.api-store.workers.dev/api/bazardor/products",
    // "https://api.abcz.workers.dev/api/bazardor/products",
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  // console.log(data.filter((item) => item.change.dir == "up"));
  // const filterData = data.filter((f) => f.change.dir === "up");
  // console.log(filterData);
  const filterData: INavIncress[] = data
    .filter((f: INavIncress) => f.change.dir === "down")
    .sort((a: INavIncress, b: INavIncress) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto mt-8 w-full sm:mt-10">
      <div className="flex items-center gap-2">
        <span className="text-xl text-green-600 sm:text-2xl">▼</span>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          আজ দাম কমেছে
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {filterData.map((d, ind) => (
          <Link href={`/details/${d.id}`} key={d.id}>
            <div key={ind}>
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
                      প্রতি কেজি
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-gray-600 sm:text-sm">আজকের দাম</p>

                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="min-w-0 text-xl font-bold text-gray-900 sm:text-2xl">
                      {d.today}
                      <span className="ml-1 text-base font-medium sm:text-lg">
                        টাকা
                      </span>
                    </p>

                    <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-green-600 sm:gap-1.5 sm:px-3 sm:text-sm">
                      <span className="text-xs">▼</span>
                      <span>{d.change.pct}%</span>
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

export default NavDecressCard;
