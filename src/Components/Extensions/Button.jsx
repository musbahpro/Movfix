import Link from "next/link";
import React from "react";

export default function Button({ name, icon, url }) {
  return (
    <button
      className=" bg-slate-700 px-8 py-3 mr-3 rounded-full  my-6
    border-2 border-slate-900 hover:border-yellow-500 transition-all flex  items-center">
      <Link href={url} className="  bg-red-600"></Link>{" "}
      <span className=" text-yellow-500 mr-2">{icon}</span> {name}
    </button>
  );
}
