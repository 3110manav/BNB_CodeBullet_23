import React , {useState} from "react";
import ParkDetails from "./ParkDetails";
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import parkData from "../../constant/parkInfo.json";

const Parks = () => {

 const navigate = useNavigate();

  const handleClick = () => {
    navigate('/park-details');
  };

  return (
    <div className="flex flex-col items-center mt-10 min-h-screen">
      {/* Search Bar */}
      <div className="w-[60%] mb-8">
        <div className="relative">
          <div className="absolute inset-y-5 left-4 flex items-center pointer-events-none">
            <SearchIcon color="success"/>
            {/* <svg
              className="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-6-6M13 7h6m0 0L13 13M13 13H6m0 0l-1 1m1-1l6-6"
              />
            </svg> */}
          </div>
          <input
            type="search"
            className="block w-full pl-12 pr-4 py-2.5 text-sm text-gray-900 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Horizontal Cards */}
      <div className="max-w-3xl rounded-lg shadow-md lg:flex md:flex shadow-green-600 mb-10" onClick={handleClick}>
        <img
          className="object-cover w-full md:w-1/3 lg:w-1/3 rounded-l-md"
          src="https://media.gettyimages.com/id/670706912/photo/nelspruit-south-africa-4-may-2016-care-for-wild-africa-is-a-donor-run-ngo-that-specializes-in.jpg?s=612x612&w=gi&k=20&c=gE5OibfLpNNL-czcuJR8m2TQOwZOJkbBmpoKhDr8hk4="
          alt="image"
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-base font-semibold tracking-tight text-green-600">
            Sanjay Gandhi National Park
          </h4>
          <p className="mb-2 text-sm leading-normal text-justify text-green-900">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
          <button
            className="
        px-4
        py-2
        text-sm
        shadow
        bg-green-100
        shadow-green-600
        text-green-700
        hover:bg-green-600 hover:text-green-100"
          >
            View Detailed Info
          </button>
        </div>
      </div>

      <div className="max-w-3xl rounded-lg shadow-md lg:flex md:flex shadow-green-600">
        <img
          className="object-cover w-full md:w-1/3 lg:w-1/3 rounded-l-md"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ankeny_National_Wildlife_Refuge.jpg/414px-Ankeny_National_Wildlife_Refuge.jpg"
          alt="image"
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-base font-semibold tracking-tight text-green-600">
            Gir National Park
          </h4>
          <p className="mb-2 text-sm leading-normal text-justify text-green-900">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
          <button
            className="
        px-4
        py-2
        text-sm
        shadow
        bg-green-100
        shadow-green-600
        text-green-700
        hover:bg-green-600 hover:text-green-100"
          >
            View Detailed Info
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Parks;
