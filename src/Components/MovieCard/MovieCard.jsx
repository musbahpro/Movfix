import React from "react";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import Link from "next/link";

export default function MovieCard({ title, poster, vote, date , id}) {
  const shortTitle = title.length > 22 ? title.slice(0, 22) + '...' : title;
  const year = date.slice(0, 4);
  return (
    <div className=" border-2 border-yellow-200 hover:border-yellow-500 pb-4">
      <div className='w-[300px] h-[400px] bg-yellow-500 mb-5'>
        <Link href={`/${id}`}>
          <div style={{ position: 'relative'}}>
            <Image
            className="w-[340px] h-[400px]"
              src={ process.env.NEXT_PUBLIC_BASE_IMAGE + poster}
              alt={title}
              width={320}
              height={340}
              />
          </div>
        </Link>
      </div>
      <div className='flex justify-between mx-3'>
        <h1 className='font-extrabold text-lg'>{shortTitle}</h1>
        <span className=" text-yellow-500 font-extrabold">{year}</span>
      </div>
      <div className='flex justify-between mx-3'>
        <h1 className='flex items-center mt-3'>
          <BiLike className='text-yellow-500 mr-3' />
          {vote} <span>K</span>
        </h1>
        <span className='border-1 border-solid border-blue-gray-50 p-2'>4k</span>
      </div>
    </div>
  );
}