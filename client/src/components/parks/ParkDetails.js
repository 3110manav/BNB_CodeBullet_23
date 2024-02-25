import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PlantTable from "./PlantTable";
import HabitateTable from "./HabitateTable";
import EndangerTable from "./EndangerTable";
import parkData from "../../constant/parkInfo.json";

const ParkDetails = () => {
  const [tab, setTab] = useState("habitate");
  const sanjayGandhiPark = parkData.find(
    (park) => park.name === "Sanjay Gandhi National Park"
  );

  if (!sanjayGandhiPark) {
    return <p>Sanjay Gandhi National Park data not found.</p>;
  }

  // Destructure data for easier use
  const {
    name,
    abstract,
    habitat,
    animals,
    extinctAnimals,
    climate,
    plants,
    threats,
    conservationActions,
  } = sanjayGandhiPark;

  //   const animalLabels = animals.map((animal) => animal.name);
  //   const animalData = animals.map((animal) => animal.population);

  //   // Use useRef to hold the chart instance
  //   const chartRef = useRef(null);

  //   // Create a new pie chart when the component is mounted
  //   useEffect(() => {
  //     const ctx = document.getElementById("animalPieChart");

  //     // Destroy the previous chart instance to avoid memory leaks
  //     if (chartRef.current) {
  //       chartRef.current.destroy();
  //     }

  //     chartRef.current = new Chart(ctx, {
  //       type: "pie",
  //       data: {
  //         labels: animalLabels,
  //         datasets: [
  //           {
  //             data: animalData,
  //             backgroundColor: [
  //               "#FF6384",
  //               "#36A2EB",
  //               "#FFCE56",
  //               "#4CAF50",
  //               "#FF9800",
  //               // Add more colors as needed
  //             ],
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //       },
  //     });
  //   }, [animalLabels, animalData]);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 p-5 mt-5">
          <div className="rounded-md shadow-md shadow-gray-400 p-2">
            <h3 className="text-4xl font-bold mb-4 ">{name}</h3>
            <p className="text-lg text-gray-700 border-black shadow-gray-300">{abstract}</p>
          </div>

          <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
            <button
              className={` ${
                tab === "habitate" &&
                "border-b border-solid border-primaryColor"
              } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              onClick={() => setTab("habitate")}
            >
              Habitate Species
            </button>
            <button
              className={` ${
                tab === "endanger" &&
                "border-b border-solid border-primaryColor"
              } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              onClick={() => setTab("endanger")}
            >
                Rare Species
            </button>
            <button
              className={` ${
                tab === "plant" && "border-b border-solid border-primaryColor"
              } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              onClick={() => setTab("plant")}
            >
              Plant Species
            </button>

            <div className="mt-[50px] shadow-lg shadow-gray-400">
              {tab === "habitate" && <HabitateTable data={animals} />}
              {tab === "plant" && <PlantTable data={plants} />}
              {tab === "endanger" && <EndangerTable data={extinctAnimals} />}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 p-9">
          <iframe
          className="shadow-lg shadow-gray-400"
            src="https://my.atlist.com/map/5e332bba-e701-47fe-aee8-8ddd4f610ecd?share=true"
            allow="geolocation 'self' https://my.atlist.com"
            width="100%"
            height="400px"
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>

          <div className="mt-8 p-4 border border-gray-200 rounded-md shadow-lg shadow-gray-400">
            <h4 className="text-xl font-semibold mb-4">Threats</h4>
            <ul className="list-disc pl-6">
              {Object.entries(threats).map(([threat, description], index) => (
                <li key={index}>
                  <strong>{threat}:</strong> {description}
                </li>
              ))}
            </ul>
          </div>

          {/* 
          <canvas id="animalPieChart" width="200" height="200"></canvas> */}
        </div>
      </div>
    </>
  );
};

export default ParkDetails;
