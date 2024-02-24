import React from "react";

const ParkDetails = () => {
  return (
    <>
      <div className="m-5 p-5 ">
        <div className="w-2/3">
          <h3 className="text-4xl font-bold mb-4">
            Sanjay Gandhi National Park
          </h3>
          <p className="text-lg text-gray-700">
            Sanjay Gandhi National Park, located in Mumbai, serves as a green
            sanctuary within the bustling city. Home to diverse flora and fauna,
            the park offers a tranquil retreat and a unique blend of nature and
            urban life. Explore its expansive landscapes, discover ancient caves
            like Kanheri, and witness the coexistence of wildlife amidst the
            urban sprawl.
          </p>
        </div>

        <div className="mt-5 lg:mt-10 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          <div className="text-[14px] leading-[36px] lg:text-[24px] lg:leading-[32px] font-[700] text-blue-500">
            <h2>370+</h2>
            <span className="w-16 h-2 bg-yellow-500 rounded-full block mt-[-10px]"></span>
            <p className="text-gray-600 text-[16px]">Wildlife Species</p>
          </div>

          <div className="text-[14px] leading-[36px] lg:text-[24px] lg:leading-[32px] font-[700] text-purple-500">
            <h2>15+</h2>
            <span className="w-16 h-2 bg-teal-400 rounded-full block mt-[-10px]"></span>
            <p className="text-gray-600 text-[16px]">Endangered Species</p>
          </div>

          <div className="text-[14px] leading-[36px] lg:text-[24px] lg:leading-[32px] font-[700] text-green-500">
            <h2>1526+</h2>
            <span className="w-16 h-2 bg-blue-500 rounded-full block mt-[-10px]"></span>
            <p className="text-gray-600 text-[16px]">Plant Species</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkDetails;
