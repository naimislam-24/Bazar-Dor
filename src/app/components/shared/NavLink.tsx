import NavLinkMenu from "./NavLinkMenu";

interface INavLink {
  id: string;
  icon: string;
  nameBn: string;
  slug: string;
}

const NavLink = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  if (!res.ok) {
    throw new Error("ক্যাটাগরির তথ্য লোড করা যায়নি।");
  }

  const data: INavLink[] = await res.json();

  return <NavLinkMenu data={data} />;
};

export default NavLink;
