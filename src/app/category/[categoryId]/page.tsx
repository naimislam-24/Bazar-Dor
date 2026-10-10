import SortBy from "@/app/components/shared/SortBy";

interface ICategory {
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
  change: {
    dir: string;
    pct: number;
  };
}

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );

  const data: ICategory[] = await res.json();

  // console.log("Category ID", categoryId);
  // console.log("Products", data);

  return (
    <div className="container mx-auto mt-10 px-4">
      {data.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl">
              {data[0].image}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-lg font-semibold text-gray-900">
                {data[0].categoryNameBn}
              </h3>

              <p className="text-sm text-gray-500">
                {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </div>
      )}

      <SortBy data={data} />
    </div>
  );
};

export default Category;
