import React from "react";
import forest_bg from "../../assets/images/forest_bg.jpg";

const Santuries = () => {
  return (
    <>
      <div className="relative bg-blue-teal-gradient overflow-hidden min-h-screen">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={forest_bg}
            alt="bg"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto my-auto relative z-10 mt-[140px]">
          <div className="relative">
            <div className="absolute inset-y-5 start-0 flex items-center ps-3 pointer-events-none w-full">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
            <div class="mb-3">
              <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-gray-200 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                  placeholder="Search Sancturies Near You"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                {/* <!--Search button--> */}
                <button
                  class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Santuries;
