"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const UserInfo = () => {
  const { data: session } = useSession();
  //   console.log(session);
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="flex items-center gap-4">
    //   {session?.user ? (
    //     <>
    //       <div className="flex items-center gap-3">
    //         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
    //           {session.user.name?.charAt(0).toUpperCase()}
    //         </div>

    //         <div className="hidden sm:block">
    //           <p className="text-sm font-semibold text-gray-800">
    //             {session.user.name}
    //           </p>
    //         </div>
    //       </div>

    //       <button
    //         onClick={() => signOut()}
    //         className="rounded-lg border border-green-200 px-4 py-2 text-sm font-semibold text-green-600 transition-all duration-200 hover:border-green-600 hover:bg-green-600 hover:text-white"
    //       >
    //         Log Out
    //       </button>
    //     </>
    //   ) : (
    //     <div className=" flex gap-4">
    //       <Link href="/sign-in">
    //         <button className="btn btn-outline border border-none">
    //           সাইন ইন
    //         </button>
    //       </Link>
    //       <Link href="/sign-up">
    //         <button className="btn btn-warning bg-green-600 border-none text-white">
    //           সাইন আপ
    //         </button>
    //       </Link>
    //     </div>
    //   )}
    // </div>

    <div className="flex items-center gap-4">
      {session?.user ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-green-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
              {session.user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="hidden text-sm font-semibold text-gray-800 sm:block">
              {session.user.name}
            </span>
            <svg
              className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
              <div className="border-b border-gray-100 px-3 py-2">
                <p className="truncate text-sm font-semibold text-gray-800">
                  {session.user.name}
                </p>
                <p className="text-xs text-gray-500">{session.user.email}</p>
              </div>
              <button
                onClick={() => signOut()}
                className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0-4-4m4 4H7m6 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1"
                  />
                </svg>
                Log Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-3">
          <Link href="/sign-in">
            <button className="btn btn-outline border-green-600 text-green-700 hover:border-green-700 hover:bg-green-600 hover:text-white">
              সাইন ইন
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="btn border-none bg-green-600 text-white hover:bg-green-700">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
