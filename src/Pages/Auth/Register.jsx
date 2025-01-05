import React from "react";
import bg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import auth from "../../assets/others/authentication1.png";

// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-row-reverse justify-between w-11/12 md:w-9/12 items-center">
        <img className="w-1/2 h-full hidden md:block" src={auth} alt="" />
        <form className="flex-grow">
          <h2 className="text-center mb-5 text-2xl font-bold">Sign Up</h2>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type here"
              className="mt-1 w-full input border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#dbb884]"
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type here"
              className="mt-1 w-full input border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#dbb884]"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full input border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#dbb884]"
            />
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="btn w-full bg-[#dbb884] text-white  rounded-lg hover:bg-yellow-600"
          >
            Sign In
          </button>

          {/* Create Account Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already registered?{" "}
            <a
              href="/create-account"
              className="text-yellow-600 hover:underline"
            >
              Go to log in
            </a>
          </p>

          {/* Social Media Sign In */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or, sign in with</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                type="button"
                className="w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <FaFacebookF />
              </button>
              <button
                type="button"
                className="w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <FaGoogle />
              </button>
              <button
                type="button"
                className="w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
