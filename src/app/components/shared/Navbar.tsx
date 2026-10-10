import Logo from "@/app/assets/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import UserInfo from "./UserInfo";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  //   console.log(date);

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex mt-5 justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src={Logo}
                width={30}
                height={30}
                alt="Logo"
                className="w-12 h-12 p-2 bg-green-600 rounded-2xl"
              />
            </Link>
            <div className="">
              <Link href="/">
                <h1 className="font-bold text-2xl">বাজার দর</h1>
              </Link>
              <p>{date}</p>
            </div>
          </div>
          {/* ****************************************************** */}
          <UserInfo />
          {/* ******************************************************** */}
        </div>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
