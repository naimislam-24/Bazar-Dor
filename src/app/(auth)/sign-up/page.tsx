"use client";
import { authClient, signUp } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUp = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    const { data: resData, error } = await signUp.email({
      name: data.name as string,
      email: data.email as string,
      password: data.password as string,
      callbackURL: "/",
    });
    // console.log(resData, error);
    if (resData) {
      toast.success("সফলভাবে সাইন আপ হয়েছে।");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleGithub = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f1f6f1] px-4 py-10 sm:py-16">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm sm:p-8">
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              নাম
            </Label>
            <Input
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
            <FieldError className="mt-1 text-xs text-red-600" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              ইমেইল
            </Label>
            <Input
              placeholder="john@example.com"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
            <FieldError className="mt-1 text-xs text-red-600" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </Label>
            <Input
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            <FieldError className="mt-1 text-xs text-red-600" />
          </TextField>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button
              type="submit"
              className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>

            {/* <Button
              type="reset"
              variant="secondary"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Reset
            </Button> */}
          </div>
        </Form>
        <div className="mt-6 flex w-full flex-col gap-2 sm:flex-row sm:items-center">
          <button
            onClick={handleGoogle}
            className="btn h-9 min-h-9 w-full flex-1 gap-1.5 rounded-lg border border-[#e5e5e5] bg-white px-2.5 text-[14px] font-medium text-black shadow-none hover:border-[#d4d4d4] hover:bg-gray-50"
          >
            <svg
              aria-label="Google logo"
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <button
            onClick={handleGithub}
            className="btn h-9 min-h-9 w-full flex-1 gap-1.5 rounded-lg border border-[#e5e5e5] bg-white px-2.5 text-[14px] font-medium text-black shadow-none hover:border-[#d4d4d4] hover:bg-gray-50"
          >
            <svg
              aria-label="GitHub logo"
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10 10 0 0,0 12,2Z"
              ></path>
            </svg>
            Login with GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-[15px] text-base-content/70">
          অ্যাকাউন্ট আছে?
          <Link href="/sign-in">
            <button
              type="submit"
              className="cursor-pointer font-semibold text-green-600 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-green-700 hover:decoration-green-600"
            >
              সাইন ইন করুন
            </button>
          </Link>
        </p>
      </div>

      <Link href="/">
        <p className="mt-6 text-[15px] text-gray-500">← হোম পেজে ফিরে যান</p>
      </Link>
    </div>
  );
};

export default SignUp;
