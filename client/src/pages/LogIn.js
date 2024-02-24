import React, { useState } from "react";
import SignUp from "./SignUp";

const LogIn = ({ onClose }) => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const openSignUpModal = () => {
    // onClose();
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // You can add your authentication code or API calls
    // After successful login, you can close the modal using onClose
    onClose();
  };

  return (
    <div className="bg-white relative w-full mt-5">
      <form
        className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-medium text-gray-900">
          Log In to our platform
        </h3>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required=""
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                required=""
              />
            </div>
            <div className="text-sm ml-3">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Remember me{" "}
              </label>
            </div>
          </div>
          <a href="#" className="text-sm text-blue-700 hover:underline">
            {" "}
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 flex items-center justify-center">          Not registered?{" "}
          <button
            className="text-blue-700 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              openSignUpModal(); // Open the signup modal
            }}
          >
            Create account
          </button>
        </div>

        {/* Sign Up Modal */}
        {isSignUpModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto w-full">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeSignUpModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="relative z-50 bg-white rounded-lg shadow-xl w-[500px] p-6">
              <button
                className="absolute top-0 right-0 p-2"
                onClick={closeSignUpModal}
              >
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

              <SignUp onClose={closeSignUpModal} />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default LogIn;
