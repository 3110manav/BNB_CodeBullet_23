import React,{useState} from "react";
import {authenticateSignup} from '../service/api.js'
const SignUp = ({ onClose }) => {
  const [signUpData,setSignUpData] = useState({
    email:"",
    password:"",
    gender:"",
    password:""
  });

  const handleInputChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    console.log(signUpData)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("hello")
    // Handle login logic here
    // You can add your authentication code or API calls
    // After successful login, you can close the modal using onClose
    onClose(e);
    
  };

  return (
    <div className="bg-white relative w-full mt-5">
      <form
        className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 w-full"
        // onSubmit={(e)=>handleSubmit(e)}
      >
        <h3 className="text-xl font-medium text-gray-900">Sign Up</h3>
        <div>
          <label
            // htmlFor="email"
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
            onChange={(e) => handleInputChange(e)}
            value={signUpData.email}
          />
        </div>
        <div>
          <label
            // htmlFor="password"
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
            onChange={(e) => handleInputChange(e)}
            value={signUpData.password}
          />
        </div>
        <div>
          <label
            // htmlFor="gender"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required=""
            onChange={(e) => handleInputChange(e)}
            value={signUpData.gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            // htmlFor="mobile"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="phoneNumber"
            // pattern="[0-9]{10}"
            // maxLength="10"
            // minLength="10"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your mobile number"
            required=""
            onChange={(e) => handleInputChange(e)}
            value={signUpData.phoneNumber}
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
              <label 
              // htmlFor="remember"
               className="font-medium text-gray-900">
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
          // type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          
        >
          Sign In
        </button>
      </form>
        <div className="text-sm font-medium text-gray-500 flex items-center justify-center">          Already registered?{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Log In
          </a>
        </div>
    </div>
  );
};

export default SignUp;
