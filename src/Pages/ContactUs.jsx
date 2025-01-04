import React from "react";

import banner from "../assets/contact/banner.jpg";
import SharedBanner from "../Components/Shared/SharedBanner";
import SectionTitle from "../Components/Shared/SectionTitle";

// React icon
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-white" size={20} />,
      heading: "phone",
      value: "+38 056 890 98",
    },
    {
      icon: <FaMapMarkerAlt className="text-white" size={20} />,
      heading: "address",
      value: "169/5 west dolairpar,pantha nibas,dhaka,1204",
    },
    {
      icon: <FaClock className="text-white" size={20} />,
      heading: "working hours",
      value: " Mon-Fri: 08:00 - 22:00 Sat - sun: 10:00 - 23:00",
    },
  ];

  return (
    <div className=" w-10/12 mx-auto">
      <SharedBanner
        title={"our menu"}
        subtitle={"would you like to try a dish?"}
        banner={banner}
      ></SharedBanner>
      <div className="my-20">
        <SectionTitle
          subtitle={"---visit us---"}
          title={"our location"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
        {contactInfo.map((info) => (
          <div className="flex flex-col border border-gray-100">
            <div className="bg-[#D1A054] flex justify-center py-3">
              {info.icon}
            </div>
            <div className="bg-[#f3f3f3] mx-5 mb-5 text-center space-y-2 flex-grow p-5 py-10">
              <h5 className="text-xl lg:text-2xl uppercase font-semibold">
                {info.heading}
              </h5>
              <p className="capitalize">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <SectionTitle
          subtitle={"---send us a message---"}
          title={"contact us"}
        ></SectionTitle>
      </div>

      <form className="bg-gray-100 p-10 my-20 lg:w-10/12 mx-auto">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
              Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mt-4">
          <label htmlFor="phone" className="block text-gray-600 text-sm mb-2">
            Phone*
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Message */}
        <div className="mt-4">
          <label htmlFor="message" className="block text-gray-600 text-sm mb-2">
            Message*
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here"
            className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Captcha */}
        <div className="mt-4 flex items-center bg-white w-fit py-2 px-4 border">
          <input
            type="checkbox"
            name="captcha"
            id="captcha"
            className="mr-2"
            required
          />
          <label htmlFor="captcha" className="text-gray-600 text-sm">
            I'm not a robot
          </label>
          <img
            className="w-8 ml-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpudsG6K7X3Ifj37QyV4nqgzbknV2wwsq0QQ&s"
            alt=""
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 w-fit mx-auto">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#855f24] to-[#b48030] text-white px-6 py-3 flex items-center gap-2 hover:opacity-50 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
