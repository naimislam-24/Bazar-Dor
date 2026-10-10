interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}
interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: { dir: string; pct: number };
  markets: IMarket[];
}

const formatPrice = (price: number) => `${price.toLocaleString("bn-BD")} টাকা`;

const Details = async ({ params }: { params: { detailsId: string } }) => {
  const { detailsId } = await params;
  const res = await fetch(
    // `https://api.api-store.workers.dev/api/bazardor/products/${detailsId}`,
    `https://api.abcz.workers.dev/api/bazardor/products/${detailsId}`,
  );
  const data: IProduct = await res.json();
  // console.log(data);

  const comparisons = [
    {
      title: "সর্বনিম্ন দাম",
      price: data.yesterday,
      color: "text-emerald-600",
      text: "সবচেয়ে কম দামের বাজার",
    },
    {
      title: "সর্বাধিক দাম",
      price: data.lastWeek,
      color: "text-red-500",
      text: "সবচেয়ে বেশি দামের বাজার",
    },
    {
      title: "গড় দাম",
      price: data.lastMonth,
      color: "text-emerald-600",
      text: "প্রতি কেজি-এর হিসাবে",
    },
  ];

  return (
    <div>
      <main className="min-h-screen bg-[#f0f5f0] px-3 py-6 sm:px-5 lg:px-8">
        <div className="container mx-auto">
          <div className="mt-5 flex flex-wrap items-center gap-2 text-[18px] text-gray-500">
            <span>হোম</span> <span>›</span> <span>{data.categoryNameBn}</span>
            <span>›</span>
            <span className="text-gray-800">{data.nameBn}</span>
          </div>
          <section className="mt-8 flex flex-col justify-between gap-4 rounded-xl border border-[#e2eae2] bg-white p-4 sm:flex-row sm:items-center sm:p-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
                {data.image}
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-[#26342a] sm:text-4xl">
                  {data.nameBn}
                </h1>
                <p className="mt-1 text-[15px] text-gray-500">
                  প্রতি কেজি · {data.categoryNameBn}
                </p>
                <p className="mt-2 text-[15px] text-gray-900">
                  গতকালের তুলনায় দামের পরিবর্তন
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-[#f0f5f0] px-5 py-3 text-center sm:min-w-32">
              <p className="text-[14px] text-gray-500">আজকের দাম</p>
              <p className="my-1 text-2xl font-bold text-[#26342a]">
                {data.today.toLocaleString("bn-BD")}
              </p>
              <p className="text-[14px] text-gray-500"> টাকা / কেজি </p>
              <p
                className={`mt-1 text-xs font-semibold ${data.change.dir === "up" ? "text-red-600" : data.change.dir === "down" ? "text-emerald-600" : "text-gray-500"}`}
              >
                {data.change.dir === "up"
                  ? "▲"
                  : data.change.dir === "down"
                    ? "▼"
                    : "●"}
                {data.change.pct.toLocaleString("bn-BD")}%
              </p>
            </div>
          </section>
          <section className="mt-4 rounded-xl border border-[#e2eae2] bg-white p-4 sm:p-5">
            <h2 className="mb-3 text-[22px] font-bold text-[#2d3830]">
              দামের সারসংক্ষেপ
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {comparisons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e5ece5] bg-[#fbfdfb] p-4"
                >
                  <p className="text-[15px] text-gray-500">{item.title}</p>{" "}
                  <p className={`mt-1 text-3xl font-bold ${item.color}`}>
                    {formatPrice(item.price)}
                  </p>
                  <p className="mt-1 text-[15px] text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-4 rounded-xl border border-[#e2eae2] bg-white p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base text-[22px] font-bold text-[#2d3830]">
                বাজারভিত্তিক আজকের দাম
              </h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-[#e5ece5]">
              <table className="w-full min-w-155 border-collapse text-left text-sm">
                <thead className="bg-[#f8fbf8] text-[19px] text-gray-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">বাজার</th>
                    <th className="px-4 py-3 font-medium">বিভাগ</th>
                    <th className="px-4 py-3 text-right font-medium">
                      সর্বনিম্ন
                    </th>
                    <th className="px-4 py-3 text-right font-medium">
                      সর্বোচ্চ
                    </th>
                    <th className="px-4 py-3 text-right font-medium">গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {data.markets.map((market, index) => (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-t border-[#e1e8e1] transition-colors hover:bg-[#f4f8f4]"
                    >
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-[15px] text-gray-700">
                        {market.market}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-[15px] text-gray-600">
                        {market.division}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-[15px] text-gray-700">
                        {market.min.toLocaleString("bn-BD")} টাকা
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-[15px] text-gray-700">
                        {market.max.toLocaleString("bn-BD")} টাকা
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-[15px] text-gray-700">
                        {Math.round(
                          (market.min + market.max) / 2,
                        ).toLocaleString("bn-BD")}
                        টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Details;
