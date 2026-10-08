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
    <div>
      <div className="flex mt-6 gap-8 ml-6">
        {data.map((d) => (
          <div key={d.id} className="flex gap-1">
            <div>{d.icon}</div>
            <div>{d.nameBn}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
