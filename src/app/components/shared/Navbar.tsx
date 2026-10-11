import Logo from "@/app/assets/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import UserInfo from "./UserInfo";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="bg-white">
      <div className="container mx-auto px-3 sm:px-5">
        <div className="mt-4 flex items-center justify-between gap-2 sm:mt-5">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link href="/" className="shrink-0">
              <Image
                src={Logo}
                width={30}
                height={30}
                alt="Logo"
                className="h-10 w-10 rounded-2xl bg-green-600 p-2 sm:h-12 sm:w-12"
              />
            </Link>

            <div className="min-w-0">
              <Link href="/">
                <h1 className="text-xl font-bold sm:text-2xl">বাজার দর</h1>
              </Link>
              <p className="text-xs text-gray-600 sm:text-sm">{date}</p>
            </div>
          </div>

          <div className="shrink-0">
            <UserInfo />
          </div>
        </div>

        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
