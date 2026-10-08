interface INavLink {
  id: string;
  icon: string;
  nameBn: string;
}

const NavLink = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data: INavLink[] = await res.json();
  //   console.log(data);

  return (
    <div className="border border-base-300 py-4 mt-6">
      <div className="container mx-auto">
        <div className="flex gap-8 ml-6">
          {data.map((d) => (
            <div key={d.id} className="flex gap-1">
              <span>{d.icon}</span>
              <span>{d.nameBn}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLink;
