import Image from "next/image";
import React from "react";
import {
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoInstagramAlt,
  BiLogoFacebookCircle,
} from "react-icons/bi";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import FooterImage from "../../../public/images/footer-bottom-img.png";

// Utility classes
const flexClasses = " flex lg:justify-between flex-wrap justify-center";

// Footer links data
const Links = [
  { id: 1, li: "HOME", url: "/" },
  { id: 2, li: "Movie", url: "/Movie" },
  { id: 3, li: "Tv Show", url: "/Tv-show" },
  { id: 4, li: "Pricing", url: "/Pricing" },
  { id: 5, li: "CONTACTS", url: "/Contacts" },
];

const Footer = () => {
  return (
    <div className="footerBG">
      {/* Email Subscription Section */}
      <div
        className={`emailBG flex justify-around p-14 text-gray-900 flex-wrap `}
      >
        <div className="lg:text-left text-center">
          <h1 className="text-3xl font-black">TRIAL START FIRST 30 DAYS.</h1>
          <p className="text-sm">
            Enter your email to create or restart your membership.
          </p>
        </div>
        <form
          className={`flex bg-white w-[400px] justify-between rounded-xl ${flexClasses} lg:mt-0 mt-6`}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent pl-4"
          />
          <button className="font-bold text-yellow-500 bg-gray-900 p-4 m-1 rounded-xl">
            GET STARTED
          </button>
        </form>
      </div>

      {/* Main Footer Section */}
      <div className={` py-20 ${flexClasses} container m-auto`}>
        <div className={`items-center pb-16 w-full  ${flexClasses}`}>
          <Image src={Logo} alt="Logo" width={180} height={180} />
          {/* Navigation Links */}
          <ul
            className={` space-x-6 items-center lg:mt-0 mt-12 ${flexClasses}`}
          >
            {Links.map((link) => (
              <li key={link.id} className="hover:text-yellow-500">
                <Link href={link.url}>{link.li}</Link>
              </li>
            ))}
            {/* Search Input */}
          </ul>
        </div>

        <div className={` ${flexClasses} w-full`}>
          <ul className="flex space-x-6">
            <li className="hover:text-yellow-500 cursor-pointer">FAQ</li>
            <li className="hover:text-yellow-500 cursor-pointer">HELP CENTER</li>
            <li className="hover:text-yellow-500 cursor-pointer">TERMS OF USE</li>
            <li className="hover:text-yellow-500 cursor-pointer">PRIVACY</li>
          </ul>
          {/* Social Icons */}
          <ul className="flex space-x-6 text-3xl lg:mt-0 mt-6">
            <BiLogoGmail className="hover:text-yellow-500 cursor-pointer" />
            <BiLogoLinkedinSquare className="hover:text-yellow-500 cursor-pointer" />
            <BiLogoInstagramAlt className="hover:text-yellow-500 cursor-pointer" />
            <BiLogoFacebookCircle className="hover:text-yellow-500 cursor-pointer" />
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={`py-6  ${flexClasses} container m-auto w-full border-solid border-t-2 border-gray-800 `}>
        <p>Copyright © 2022. All Rights Reserved By</p>
        <Image src={FooterImage} alt="FooterImage" />
      </div>
    </div>
  );
};

export default Footer;
