import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import auth from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
  LoadCanvasTemplateNoReload,
} from "react-simple-captcha";
// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { signInWithGoogle, signInUser, user, setUser } = useAuth();
  console.log(user);

  const captchaRef = useRef(null);
  const [disableLogin, setDisableLogin] = useState(true);
  const [disableValidate, setDisableValidate] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Captcha
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

  // Authentication

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in");
      })
      .catch(() => alert("Invalid email or password"));
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast.success("Successfully Signed in");
      })
      .catch((error) => alert(error));
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-11/12 md:w-9/12 mx-auto flex justify-between items-center">
        <img className="hidden md:block w-1/2 h-full" src={auth} alt="" />
        <form onSubmit={handleLogin} className="flex-grow">
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
              <LoadCanvasTemplateNoReload />
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
            <Link
              to="/sign-up"
              href="/create-account"
              className="text-yellow-600 hover:underline"
            >
              Create a New Account
            </Link>
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
                onClick={handleSignInWithGoogle}
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
