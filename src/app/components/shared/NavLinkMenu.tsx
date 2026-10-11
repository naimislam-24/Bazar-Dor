"use client";

import { useState } from "react";
import Link from "next/link";

interface INavLink {
  id: string;
  icon: string;
  nameBn: string;
  slug: string;
}

const NavLinkMenu = ({ data }: { data: INavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-4 border-y border-base-300 py-3 sm:mt-6 sm:py-4">
      <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 md:hidden">
        <span className="text-sm font-semibold text-gray-700">
          ক্যাটাগরি মেনু
        </span>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-green-600 hover:bg-green-50 hover:text-green-700"
        >
          {isOpen ? (
            <>
              <span>বন্ধ করুন</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M6 6l12 12M18 6 6 18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </>
          ) : (
            <>
              <span>মেনু</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Desktop Category Menu */}
      <div className="hidden flex-wrap items-center gap-x-8 gap-y-3 px-3 sm:px-4 lg:px-6 md:flex">
        {data.map((d) => (
          <Link
            href={`/category/${d.slug}`}
            key={d.id}
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-green-50 hover:text-green-700"
          >
            <span>{d.icon}</span>
            <span>{d.nameBn}</span>
          </Link>
        ))}
      </div>

      {/* Mobile Category Menu */}
      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out md:hidden ${
          isOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3 sm:grid-cols-3">
            {data.map((d) => (
              <Link
                href={`/category/${d.slug}`}
                key={d.id}
                onClick={() => setIsOpen(false)}
                className="flex min-w-0 items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-3 text-sm text-gray-700 transition-all duration-200 hover:border-green-200 hover:bg-green-50 hover:text-green-700 active:scale-[0.98]"
              >
                <span className="shrink-0">{d.icon}</span>
                <span className="min-w-0 wrap-break-word font-medium">
                  {d.nameBn}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinkMenu;
