"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const { data: session } = useSession();

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    const { data: resData, error } = await updateUser({
      name: data.name as string,
      //   image: data.imane as string,
    });
    console.log(resData, error);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-green-50/50">
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
            <p className="text-sm text-gray-500">
              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>
          </div>

          {/* Profile card */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
                {session?.user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {session?.user.name}
                </h2>
                <p className="text-sm text-gray-500">{session?.user.email}</p>
              </div>
            </div>
            <Link href="/sign-in">
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
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                ↩ সাইন আউট
              </button>
            </Link>
          </div>

          {/* Info card */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <h3 className="text-base font-semibold text-gray-900">তথ্য</h3>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-5 p-6">
              <div className="form-control">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  নাম
                </label>

                <input
                  type="text"
                  name="name"
                  className="w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600/40 active:scale-[0.99]"
              >
                আপডেট
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
