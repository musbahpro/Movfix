"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiAlignRight, BiX } from "react-icons/bi";
import {
    BiLogoGmail,
    BiLogoLinkedinSquare,
    BiLogoInstagramAlt,
    BiLogoFacebookCircle,
  } from "react-icons/bi";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const Links = [
    { id: 1, li: "HOME", url: "/" },
    { id: 2, li: "MOVIE", url: "/Movie" },
    { id: 4, li: "PRICING", url: "/Pricing" },
    { id: 5, li: "CONTACTS", url: "/Contacts" },
  ];

  const handelClick = ()=> {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className=" flex cursor-pointer md:hidden" onClick={handelClick}>
        {!isOpen ? <BiAlignRight className="text-4xl"/> :<BiX className="text-4xl"/>}
        <div className={` absolute right-0 top-[84px] z-50 
          pt-12 transition-all w-96 h-screen bg-gray-900/80 backdrop-blur-md ${isOpen ? null : ` hidden`}`}>
          <nav className="flex h-full w-full flex-col space-y-12 text-lg tracking-wide transition-all">
            {Links.map(({ id, li, url }) => (
              <Link key={id} href={url} onClick={handelClick} className="pl-12 hover:bg-yellow-500
               hover:text-gray-900 font-black py-2">
                {li}
              </Link>
            ))}
            <ul className="flex space-x-6 text-3xl lg:mt-0 mt-6 pl-12">
            <BiLogoGmail className="hover:text-yellow-500 cursor-pointer" />
            <BiLogoLinkedinSquare className="hover:text-yellow-500 cursor-pointer" />
            <BiLogoInstagramAlt className="hover:text-yellow-500 cursor-pointer" />
            <BiLogoFacebookCircle className="hover:text-yellow-500 cursor-pointer" />
          </ul>
          </nav>
      
        </div>
      </div>
    </>
  );
}
