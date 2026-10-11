"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-base-100 px-4 py-16">
      {/* Background Decoration */}{" "}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />{" "}
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center sm:h-60 sm:w-60">
          <div className="absolute inset-0 rounded-full border border-green-500/20 bg-green-500/5" />

          <div className="absolute inset-5 rounded-full border border-dashed border-green-500/30" />

          <div className="relative flex items-center justify-center rounded-3xl bg-base-100 p-6 shadow-xl shadow-red-500/10 ring-1 ring-base-300 sm:p-8">
            <span className="text-7xl font-black tracking-tighter text-green-600 sm:text-8xl">
              404
            </span>
          </div>

          <span className="absolute right-2 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-2xl text-white shadow-lg shadow-red-600/30 sm:right-0">
            !
          </span>

          <span className="absolute bottom-6 left-0 h-4 w-4 rounded-full bg-green-400 shadow-lg shadow-orange-400/40" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Page Not Found
          </p>

          <h1 className="text-3xl font-black tracking-tight text-base-content sm:text-5xl">
            ওহ! পেজটি খুঁজে পাওয়া যায়নি
          </h1>

          <p className="mx-auto max-w-lg text-sm leading-7 text-base-content/60 sm:text-base">
            আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, ঠিকানা পরিবর্তন করা হয়েছে
            অথবা পেজটি আর বিদ্যমান নেই।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl hover:shadow-red-600/30 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="m15 18-6-6 6-6" />
              <path d="M20 12H9" />
            </svg>
            হোম পেজে ফিরে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-base-300 bg-base-100 px-6 py-3.5 text-sm font-bold text-base-content transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-base-200 sm:w-auto"
          >
            আগের পেজে ফিরে যান
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-base-content/40">Error Code: 404</p>
      </div>
    </main>
  );
}
