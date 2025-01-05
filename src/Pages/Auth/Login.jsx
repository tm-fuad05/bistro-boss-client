import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import login from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const captchaRef = useRef(null);
  const [disableLogin, setDisableLogin] = useState(true);
  const [disableValidate, setDisableValidate] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisableLogin(false);
      setDisableValidate(true);
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-11/12 md:w-9/12 mx-auto flex justify-between items-center">
        <img className="hidden md:block w-1/2 h-full" src={login} alt="" />
        <form className="flex-grow">
          <h2 className="text-center mb-5 text-2xl font-bold">Login</h2>
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

          {/* Captcha */}
          <div className="mb-4">
            <label>
              <LoadCanvasTemplate />
            </label>

            <input
              ref={captchaRef}
              type="text"
              id="captcha"
              name="captcha"
              placeholder="Type the text above"
              className="mt-1 w-full input border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#dbb884]"
            />
            <button
              disabled={disableValidate}
              onClick={handleValidateCaptcha}
              className="btn btn-sm bg-transparent border-[2px] border-[#dbb884] mt-2"
            >
              Validate
            </button>
          </div>

          {/* Submit Button */}

          <button
            disabled={disableLogin}
            type="submit"
            className="btn w-full bg-[#dbb884] text-white  rounded-lg hover:bg-yellow-600"
          >
            Sign In
          </button>

          {/* Create Account Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            New here?{" "}
            <a
              href="/create-account"
              className="text-yellow-600 hover:underline"
            >
              Create a New Account
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

export default Login;
