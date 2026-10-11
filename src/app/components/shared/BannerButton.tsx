"use client";

const BannerButton = () => {
  return (
    <div>
      <div className="mt-6">
        <button
          onClick={() =>
            document.getElementById("all-products")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="btn border-0 bg-green-600 px-6 text-white shadow-md shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
        >
          সব পণ্য দেখুন
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default BannerButton;
