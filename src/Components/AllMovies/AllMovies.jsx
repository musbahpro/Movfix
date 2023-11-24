"use client";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../api/MovieApi.js";
import MovieList from "./MovieList";
import LanguageSelect from "../../Components/Extensions/LanguageSelect";
import TypeSelect from "@/Components/Extensions/TypeSelect.jsx";
import SearchInput from "@/Components/Extensions/SearchInput.jsx";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const [type, setType] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const constructApiUrl = (endpoint, queryParams) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    return `${baseUrl}${endpoint}?api_key=${apiKey}${queryParams}`;
  };

  const fetchMoviesByTypeAndLanguage = () => {
    const url = constructApiUrl(
      process.env.NEXT_PUBLIC_ALL_MOVIES,
      `&language=${language}&with_genres=${type}`,
    );

    fetchMovies(url)
      .then((result) => setMovies(result))
      .finally(() => setLoading(false));
  };

  const SearchByKeyword = () => {
    const url = constructApiUrl(
      "search/movie",
      `&language=${language}&query=${searchKeyword}`,
    );

    fetchMovies(url)
      .then((result) => setMovies(result))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMoviesByTypeAndLanguage();
  }, [language, type]);

  const handleSearch = () => {
    SearchByKeyword();
  };

  return (
    <div className=" mb-36">
      <div
        className="ml-12 mt-36 flex flex-wrap 
      justify-evenly space-y-6 px-20 lg:ml-0 lg:space-y-0"
      >
        {/* SearchInput  */}
        <SearchInput
          value={searchKeyword}
          onChange={(value) => setSearchKeyword(value)}
          onSearch={handleSearch}
        />
        {/* Language Select  */}
        <LanguageSelect language={language} setLanguage={setLanguage} />
        {/* Type Select  */}
        <TypeSelect type={type} setType={setType} onSearch={handleSearch} />
      </div>
      <MovieList movies={movies} loading={loading} />
    </div>
  );
}
