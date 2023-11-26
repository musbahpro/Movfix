import Button from "@/Components/Extensions/Button";
import TopSection from "@/Components/TopSection/TopSection.jsx";
import React from "react";
import { BiMap, BiPhone, BiLogoGmail } from "react-icons/bi";
export default function Contacts() {
  const Styling =
    " my-6 mr-2 rounded-full bg-yellow-500 p-1 text-3xl text-gray-900";
  return (
    <>
      <TopSection name="Contact " span="Us" />
      <div className="pricingBg flex flex-wrap items-center justify-evenly ">
        <div className=" relative">
          <p className=" mb-2 ml-6 mt-6 lg:mt-0">Contact Form</p>
          <div className=" mb-6 ml-6 mt-6 h-1 w-10 bg-yellow-500 lg:mt-0" />
          <form className=" contact-form border border-gray-800  p-14 ">
            <div className=" flex gap-10">
              <input placeholder="You Name *" />
              <input placeholder="You  Email *" />
            </div>
            <input placeholder="Subject *" />
            <textarea placeholder="Type Your Message..." />
            <Button name="Send Message" url="" />
          </form>
        </div>

        <div >
          <p className=" mb-2">Information</p>
          <div className=" mb-6 h-1 w-10 bg-yellow-500" />
          <div className=" w-[400px] border border-gray-800 bg-gray-900 p-14 ">
            <p className=" text-sm font-medium">
              <span className=" text-lg font-black">Find solutions :</span> to
              common problems, or get help from a support agent industry s
              standard .
            </p>
            <div className="flex items-center">
              <BiMap className={Styling} />
              <p>
                <span className=" font-black">Address :</span> W38 Park Road New
                York
              </p>
            </div>
            <div className="flex items-center">
              <BiPhone className={Styling} />
              <p>
                <span className=" font-black">Phone :</span> (09) 123 854 365
              </p>
            </div>
            <div className="flex items-center">
              <BiLogoGmail className={Styling} />
              <p>
                <span className=" font-black">Email :</span> support@movflx.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
