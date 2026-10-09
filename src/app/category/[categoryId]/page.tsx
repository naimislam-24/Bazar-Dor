interface ICategory {
  image: string;
  nameBn: string;
  today: string;
}

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;
  console.log(categoryId);

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data: ICategory[] = await res.json();
  console.log(data);

  return (
    <div className="container mx-auto">
      {
        <div className="grid grid-cols-3 gap-4 mt-5">
          {data.map((d, ind) => (
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Category;
