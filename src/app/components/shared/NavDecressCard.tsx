interface INavIncress {
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
    "https://api.api-store.workers.dev/api/bazardor/products",
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
    <div className="container mx-auto mt-15">
      <div className="flex gap-1">
        <span className="text-green-600 text-2xl">▼</span>
        <h2 className="text-2xl font-bold">আজ দাম কমেছে</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {filterData.map((d, ind) => (
          <div key={ind}>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                  {d.image}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold leading-tight text-gray-900">
                    {d.nameBn}
                  </h3>
                  <p className="text-sm text-gray-500">প্রতি কেজি</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-600">আজকের দাম</p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">
                    {d.today}
                    <span className="text-lg font-medium">টাকা</span>
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-green-600 text-sm font-medium">
                    <span className="text-xs">▼</span>
                    <span>{d.change.pct}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavDecressCard;
