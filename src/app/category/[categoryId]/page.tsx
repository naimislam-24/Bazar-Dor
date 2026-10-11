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
    // `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );

  const data: ICategory[] = await res.json();

  // console.log("Category ID", categoryId);
  // console.log("Products", data);

  return (
    <div className="container mx-auto mt-6 w-full px-3 sm:mt-8 sm:px-4 md:mt-10 lg:px-6">
      {data.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-4 md:p-5">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
              {data[0].image}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-semibold text-gray-900 sm:text-lg">
                {data[0].categoryNameBn}
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
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
