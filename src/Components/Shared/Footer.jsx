import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="min-h-[64] flex flex-col md:flex-row text-white w-full">
        <div className="w-full bg-[#1f2937] text-center py-12 space-y-3">
          <h4 className="uppercase text-xl lg:text-2xl">contact us</h4>
          <p className="text-xs leading-[20px]">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className=" w-full bg-[#111827] text-center py-12 space-y-3">
          <h4 className="capitalize text-xl lg:text-2xl r">follow US</h4>
          <p className="text-xs">Join us onsocial media</p>
          <div className="flex gap-3 w-fit mx-auto text-xl">
            <FaFacebook className="hover:opacity-50 cursor-pointer" />
            <FaInstagram className="hover:opacity-50 cursor-pointer" />{" "}
            <FaTwitter className="hover:opacity-50 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#151515]">
        <p className="text-xs text-center text-white py-2">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
