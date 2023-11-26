import React from "react";
import { BiCheck } from "react-icons/bi";
import TopSection from "../../Components/TopSection/TopSection.jsx";

const plans = [
  {
    id: 1,
    title: "PREMIUM",
    price: "$7.99",
    features: [
      { name: "Video quality", val: "Good" },
      { name: "Video quality", val: "480p" },
      { name: "watch", val: "1" },
      { name: "Cancel anytime", val: null },
    ],
  },
  {
    id: 2,
    title: "STANDARD",
    price: "$9.99",
    features: [
      { name: "Video quality", val: "Better" },
      { name: "Video quality", val: "1080p" },
      { name: "watch", val: "2" },
      { name: "Cancel anytime", val: null },
    ],
  },
  {
    id: 3,
    title: "PREMIUM",
    price: "$11.99",
    features: [
      { name: "Video quality", val: "Best" },
      { name: "Video quality", val: "4K+HDR" },
      { name: "watch", val: "4" },
      { name: "Cancel anytime", val: null },
    ],
  },
];
export const metadata = {
  title: "Movflx - Pricing",
  description: "Unlimited Movies TVsShows, & More.",
};  
export default function Pricing() {
  return (
    <div>
      <TopSection name="Our Pricing" span="Strategy" />
      <div className="pricingBg relative flex flex-wrap items-center justify-evenly py-64 lg:py-0">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="mb-12 flex h-[560px] w-[360px]
             cursor-pointer flex-col items-center rounded-md  border-2 border-gray-600 px-12 py-11 hover:border-yellow-500 lg:mb-0"
          >
            <h2 className="text-sm font-black">{plan.title}</h2>
            <div
              className="my-6 mb-12 w-32 rounded-md
             bg-yellow-500 py-4 text-center text-2xl font-semibold text-gray-900"
            >
              <p>{plan.price}</p>
              <span className="text-base">Monthly</span>
            </div>
            <ul>
              {plan.features.map((feature, index) => (
                <div
                  key={index}
                  className="my-4 flex w-[250px] justify-between"
                >
                  {typeof feature === "object" ? (
                    <div className=" flex w-full justify-between">
                      <h1 className="flex items-center">
                        <BiCheck className="mr-1" /> <span>{feature.name}</span>
                      </h1>
                      <h1 className="text-yellow-500">{feature.val}</h1>
                      <hr />
                    </div>
                  ) : (
                    <h1>{feature}</h1>
                  )}
                </div>
              ))}
            </ul>
            <button
              className=" mt-6 rounded-full border-2 border-yellow-500 px-6
               py-3 font-extrabold hover:bg-yellow-500 hover:text-gray-900"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
