import React, {useState} from "react";
import { Link } from "react-router-dom";
import LogIn from "../../pages/LogIn";
// import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = (e) => {
        e.preventDefault();
        setIsLoginModalOpen(true);
      };
    
      const onClose = (e) => {
        e.preventDefault();
        setIsLoginModalOpen(false);
      };
    

  return (
    <>
      <header className="top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 bg-black">
        <div className="flex flex-wrap items-center justify-between py-6">
          <div className="w-1/2 md:w-auto">
            <a href="index.html" className="text-white font-bold text-2xl">
            WildLifeWise
            </a>
          </div>

          <label for="menu-toggle" className="pointer-cursor md:hidden block">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>HOME</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>

          <div className="hidden md:block w-full md:w-auto" id="menu">
            <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
              <ul className="md:flex items-center">
                <li>
                  <Link
                    className="py-2 inline-block md:text-white md:hidden lg:block font-semibold"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="md:ml-4">
                  <Link
                    className="py-2 inline-block md:text-white md:px-2 font-semibold"
                    to="/park"
                  >
                    Habitat
                  </Link>
                </li>
                <li className="md:ml-4">
                  <Link
                    className="py-2 inline-block md:text-white md:px-2 font-semibold"
                    to="/events"
                  >
                    Events/Campaign
                  </Link>
                </li>
                <li className="md:ml-4 md:hidden lg:block">
                  <Link
                    className="py-2 inline-block md:text-white md:px-2 font-semibold"
                    to="/news"
                  >
                    Updates/News
                  </Link>
                </li>
                <li className="md:ml-4">
                  <a
                    className="py-2 inline-block md:text-white md:px-2 font-semibold"
                    href="#"
                  >
                    Help Us
                  </a>
                </li>
                <li className="md:ml-6 mt-3 md:mt-0">
                  <Link
                    className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"
                    to="/quiz"
                  >
                    Take a Quiz
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <Link to="/login"> */}
          <button className="absolute top-0 right-0 m-4 font-semibold bg-teal-500 text-white p-1 pl-3 pr-3 ml-5 rounded-sm"
          onClick={(e)=>openLoginModal(e)}
          type="button">
            Log In
          </button>
        {/* </Link> */}

        {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto w-full">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={(e)=>onClose(e)}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="z-50 bg-white rounded-lg shadow-xl w-[500px] p-6">
            <button className="top-0 right-0 p-2" onClick={(e)=>onClose(e)}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <LogIn onClose={onClose} />
          </div>
        </div>
      )}
      </header>
    </>
  );
};

export default Header;
