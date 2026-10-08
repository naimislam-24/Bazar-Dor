import Logo from "@/app/assets/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  //   console.log(date);

  return (
    <div className="container mx-auto">
      <div className="flex mt-5 justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            width={30}
            height={30}
            alt="Logo"
            className="w-12 h-12 p-2 bg-green-500 rounded-2xl"
          />
          <div className="">
            <h1>বাজার দর</h1>
            <p>{date}</p>
          </div>
        </div>
        <div className=" flex gap-4">
          <Link href="/sign-in">
            <button className="btn btn-outline border border-none">
              সাইন ইন
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="btn btn-warning bg-green-500 border-none text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>
      <NavLink />
    </div>
  );
};

export default Navbar;
