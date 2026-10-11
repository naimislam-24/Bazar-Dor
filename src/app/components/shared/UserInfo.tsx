"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = useSession();
  //   console.log(session);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {session?.user ? (
        <>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex max-w-full cursor-pointer items-center gap-1.5 rounded-xl px-2 py-2 transition-all duration-200 hover:bg-green-50 hover:text-green-700 sm:gap-2 sm:px-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-base font-bold text-green-700 sm:h-10 sm:w-10 sm:text-lg">
                {session.user.name?.charAt(0).toUpperCase()}
              </div>
              <span className="hidden max-w-32 truncate text-sm font-semibold text-gray-800 sm:block sm:text-base md:max-w-40">
                {session.user.name}
              </span>
              <svg
                className={`h-4 w-4 shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
              <div className="absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-lg sm:w-72">
                <div className="border-b border-gray-100 px-3 py-2">
                  <p className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                    {session.user.name}
                  </p>
                  <p className="break-all text-xs text-gray-500 sm:text-sm">
                    {session.user.email}
                  </p>
                  <Link href="/profile">
                    <p className="mt-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-green-50 hover:text-green-700 sm:text-base">
                      👤 আমার প্রোফাইল
                    </p>
                  </Link>
                </div>
                <button
                  // onClick={() => signOut()}
                  onClick={async () => {
                    try {
                      await signOut();
                      setIsOpen(false);
                      toast.success("সফলভাবে লগ আউট হয়েছে!");
                    } catch {
                      toast.error("লগ আউট করতে সমস্যা হয়েছে!");
                    }
                  }}
                  className="mt-1 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  <svg
                    className="h-5 w-5 shrink-0"
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
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/sign-in">
              <button className="btn btn-sm border-green-600 px-3 text-green-700 transition-all duration-200 hover:border-green-700 hover:bg-green-600 hover:text-white sm:btn-md sm:px-4">
                সাইন ইন
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="btn btn-sm border-none bg-green-600 px-3 text-white transition-all duration-200 hover:bg-green-700 sm:btn-md sm:px-4">
                সাইন আপ
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
