import Image from "next/image";
import banner from "@/app/assets/bazar-hero.png";
import BannerButton from "../shared/BannerButton";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <div>
      <div className="container mx-auto mt-10 w-full px-3 sm:px-4 lg:px-6">
        <section className="relative overflow-hidden rounded-3xl border border-base-300 bg-linear-to-br from-base-100 via-base-100 to-green-50 px-5 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-100/50 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-emerald-100/40 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10">
            <div className="w-full text-center md:max-w-2xl md:text-left">
              <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 ring-1 ring-green-200">
                {date}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-base-content sm:text-4xl lg:text-5xl">
                আজকের বাজারের দাম
                <span className="text-green-600"> এক নজরে</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-base-content/65 sm:text-base lg:text-lg">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
              </p>

              <BannerButton />
            </div>

            <div className="flex w-full justify-center md:w-[40%]">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-200/40 blur-3xl" />

                <Image
                  src={banner}
                  alt="bazar-hero.png"
                  className="relative w-56 object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105 sm:w-64 lg:w-72"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
