"use client";
import React from 'react';
import MovieCard from "@/Components/MovieCard/MovieCard";
import Image from 'next/image';
import loadings from "../../../public/images/loding.gif";

const MovieList = ({ movies, loading }) => (
  <div className="movicBG flex flex-wrap gap-10 justify-center 
  items-center mt-36 border-b-gray-900 w-4/5 m-auto">
    {loading ? (
      <Image src={loadings} alt="Loading movies" />
    ) : (
      movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={`Movie/${movie.id}`}
            title={movie.original_title}
            poster={movie.poster_path}
            vote={movie.vote_average}
            date={movie.release_date}
          />
        ))
      ) : (
        <p className=' text-center text-yellow-500 text-4xl font-black'>No movies available</p>
      )
    )}
  </div>
);
export default MovieList;
