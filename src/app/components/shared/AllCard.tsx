interface IAllCard {
  id: string;
  image: string;
  nameBn: string;
  change: {
    dir: string;
    pct: number;
  };
}

const AllCard = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
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
    <div className="container mx-auto mt-15">
      <div className="">
        <h2 className="text-2xl font-bold">সব পণ্য</h2>
        <h4 className="mt-3">মোট ৩৩টি পণ্য দেখানো হচ্ছে</h4>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {sortedData.map((d) => (
          <div key={d.id} className="">
            <div className="">
              <div className="">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                      {d.image}
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold leading-tight text-gray-900">
                        {d.nameBn}
                      </h3>
                      <p className="text-sm text-gray-500">প্রতি</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-600">আজকের দাম</p>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">
                        <span className="text-lg font-medium">টাকা</span>
                      </p>
                      {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-red-600 text-sm font-medium">
                        <span className="text-xs">▲</span>
                        <span>{d.change.pct}%</span>
                      </div> */}

                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium ${
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
        ))}
      </div>
    </div>
  );
};

export default AllCard;
