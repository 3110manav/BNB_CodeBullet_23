import React , {useState} from "react";
import ParkDetails from "./ParkDetails";
import { useNavigate } from 'react-router-dom';

const Parks = () => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/park-details');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Search Bar */}
      <div className="w-[60%] mb-8">
        <div className="relative">
          <div className="absolute inset-y-5 left-4 flex items-center pointer-events-none">
            <svg
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
            </svg>
          </div>
          <input
            type="search"
            className="block w-full pl-12 pr-4 py-2.5 text-sm text-gray-900 rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Horizontal Cards */}
      <div className="max-w-3xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600" onClick={handleClick}>
        <img
          className="object-cover w-full md:w-1/3 lg:w-1/3"
          src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
          alt="image"
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
            Christmas Tree Decoration
          </h4>
          <p className="mb-2 text-sm leading-normal text-justify text-sky-900">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
          <button
            className="
        px-4
        py-2
        text-sm
        shadow
        bg-sky-100
        shadow-sky-600
        text-sky-700
        hover:bg-sky-600 hover:text-sky-100"
          >
            Read more
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Parks;
