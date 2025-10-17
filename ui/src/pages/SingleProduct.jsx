import BreadcrumbWithCustomSeparator from "@/Comp/BreadCrumb";
import React from "react";

const FreeReturnSlab = () => {
  return (
    <div className="flex justify-between px-5 py-2 bg-[#61894d] text-white">
      <div className="left flex gap-6">
        <div className="flex gap-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span className="text-sm">+91 9370185533</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <span className="text-sm">saurabh@business.com</span>
        </div>
      </div>
      <div className="right flex gap-3 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-facebook-icon lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-linkedin-icon lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-youtube-icon lucide-youtube"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      </div>
    </div>
  );
};

const SingleProduct = () => {
  return (
    <div className="w-full px-20 py-16">
      {/* <FreeReturnSlab /> */}
      <div className="flex justify-between">
        <div>
          <BreadcrumbWithCustomSeparator />
        </div>
        <div className="flex gap-2 ">
          Share
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-10 w-full my-5">
        {/* Image */}
        <div className="flex-1">
          <img
            src="/assets/Images/ProductImg.png"
            alt=""
            className="w-full h-full object-cover rounded "
          />
        </div>

        <div className="flex-1">
          {/* New Arriaval, and discount */}
          <div className="flex items-start gap-3 ">
            <span className="text-white bg-red-600 py-1 px-2 text-sm rounded-2xl">
              -25%
            </span>
            <span className="text-white bg-green-600 py-1 px-2 text-sm rounded-2xl">
              New Arrival
            </span>
          </div>

          {/* Product Name */}
          <div className="text-4xl font-medium py-5 ">
            Napoli 2025-26 De Bruyne Third Jersey
          </div>

          {/* Discounted Price */}
          <div className="text-3xl font-medium py-3 ">₹399.00</div>

          {/* Original Price, and availability of product */}
          <div className="flex justify-between">
            <span className="text-gray-600 line-through text-2xl">₹899</span>
            <span className="text-green-600">Available in stock</span>
          </div>

          {/* Size Chart */}

          <div className="my-8 flex gap-3 flex-col">
            <span className="text-gray-700 ">Size</span>
            {/* Sizes */}
            <div className="flex gap-8">
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                S
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                M
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                L
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                XL
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                XXL
              </span>
            </div>
          </div>

          {/* Counter */}
          <div className="p-6 border border-black inline-block my-8">
            <div className="flex gap-10">
              <button className="border border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <span className="text-xl">1</span>
              <button className="border border-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Add to Cart and buy now buttons */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
