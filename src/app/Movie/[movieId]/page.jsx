"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import loadings from "../../../../public/images/loding.gif";
import Image from "next/image";
import { FaRegUser, FaCommentDots, FaDownload } from "react-icons/fa";

export default function FindById({ params }) {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      const Id = params.movieId;
      const Api_Key = process.env.NEXT_PUBLIC_API_KEY;
      const FIND_BY_ID = process.env.NEXT_PUBLIC_FIND_BY_ID;
      const Api_URL = `${FIND_BY_ID}/${Id}?api_key=${Api_Key}`;
      try {
        const response = await axios.get(Api_URL);
        setMovieData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [params]);


  return (
    <div>
      {loading ? (
        <div className=" flex items-center justify-center">
          <Image src={loadings} alt="Loading" />
        </div>
      ) : (
        <div className="movie_details flex w-full  flex-wrap items-center justify-evenly">
          <div className=" m-5 flex flex-wrap items-center space-x-5 md:flex-nowrap lg:m-0 lg:w-[800px]">
            <Image
              src={process.env.NEXT_PUBLIC_BASE_IMAGE + movieData.poster_path}
              width={260}
              height={300}
              alt="Movie Backdrop"
              className=" mb-6 mt-20 rounded-xl lg:mb-0"
            />
            <div>
              <h3 className="font-extrabold text-yellow-500">New Episodes</h3>
              <h1 className=" mt-6 text-4xl font-black">
                {movieData.original_title}
              </h1>
              <div className="mt-6 flex">
                <FaRegUser className="mr-3 text-yellow-500" />
                <p className=" items-center"> {movieData.popularity}</p>
              </div>
              <div className="mt-6 flex">
                <FaCommentDots className="mr-3 text-2xl text-yellow-500" />
                <p className="text-sm leading-relaxed">{movieData.overview}</p>
              </div>
            </div>
          </div>
          <div
            className=" mb-5 flex h-24 w-[280px] cursor-pointer items-center justify-around
             rounded-xl bg-yellow-500 font-black text-gray-900  lg:rotate-90"
          >
            <FaDownload />
            <p className="letterSpacing-widest">DOWNLOAD</p>
          </div>
        </div>
      )}
    </div>
  );
}
