import React from "react";

const CarouselCard = ({
  name,
  image,
  abstract,
  totalPopulation,
  populationTrend,
  habitat,
  threats,
  conservationAction,
}) => {
  return (
    <div className="flex space-x-4 p-4 overflow-hidden max-h-[600px] ">
  <div className="flex-none w-96 bg-white border border-gray-200 rounded-lg p-10 shadow-md overflow-y-auto h-full ">
    <h3 className="text-xl font-medium text-gray-500 mb-2 uppercase flex justify-center items-center">{name}</h3>
    <div>
      <img src={image} className="h-full mx-auto w-full rounded-lg" alt={name} />
    </div>
    <p className="text-gray-700 overflow-hidden">{abstract}</p>
    <div className="mt-4">
      <div className="mb-2">
        <strong>Total Population:</strong> {totalPopulation}
      </div>
      <div className="mb-2">
        <strong>Population Trend:</strong> {populationTrend}
      </div>
      <div className="mb-2">
        <strong>Habitat:</strong> {habitat}
      </div>
    </div>
  </div>
</div>

  );
};

export default CarouselCard;
