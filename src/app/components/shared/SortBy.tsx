"use client";
import Link from "next/link";
import { useState } from "react";
interface ICategory {
  id: number;
  image: string;
  nameBn: string;
  today: string | number;
  categoryNameBn: string;
  change: { dir: string; pct: number };
}
interface SortByProps {
  data: ICategory[];
}
const SortBy = ({ data }: SortByProps) => {
  const [sortBy, setSortBy] = useState("default");
  const sortedData = [...data].sort((a, b) => {
    const priceA = Number(a.today);
    const priceB = Number(b.today);
    if (sortBy === "price-asc") {
      return priceA - priceB;
    }
    if (sortBy === "price-desc") {
      return priceB - priceA;
    }
    return 0;
  });

  // console.log("SortBy data:", data);
  // console.log("Sorted data:", sortedData);

  return (
    <div className="mt-10 w-full">
      <div className="flex w-full items-center justify-end gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:px-6">
        <h4 className="text-sm font-medium text-gray-600 sm:text-base">
          সাজান
        </h4>
        <div className="relative w-48 sm:w-56">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-9 text-sm text-gray-800 outline-none focus:border-red-500"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>{" "}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            ▼
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((d, ind) => (
          <Link href={`/details/${d.id}`} key={d.id}>
            <div
              key={`${d.nameBn}-${ind}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                  {d.image}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-gray-900">
                    {d.nameBn}
                  </h3>
                  <p className="text-sm text-gray-500">প্রতি কেজি</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-600">আজকের দাম</p>{" "}
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-2xl font-bold text-gray-900">
                    {d.today}
                    <span className="text-lg font-medium">টাকা</span>{" "}
                  </p>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium
                     ${d.change.dir === "up" ? "text-red-600" : d.change.dir === "down" ? "text-green-600" : "text-gray-500"}`}
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
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SortBy;
