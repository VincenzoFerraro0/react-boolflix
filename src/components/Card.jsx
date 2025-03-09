import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Card({ data, type }) {
  const [isHovered, setIsHovered] = useState(false);

  const title = type === "movies" ? data.title : data.name;
  const originalTitle = type === "movies" ? data.original_title : data.original_name;
  const starRating = Math.min(Math.ceil(data.vote_average / 2), 5);
  const formattedLang = data.original_language.toUpperCase() === "EN"
    ? "GB"
    : data.original_language.toUpperCase() === "JA"
      ? "JP"
      : data.original_language.toUpperCase();

  return (
    <li
      className="relative flex-none w-48 h-72 sm:w-56 sm:h-80 cursor-pointer overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:z-10 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
        alt={title}
        className="w-full h-full object-cover aspect-video"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-70% via-transparent to-transparent p-4 flex flex-col justify-end opacity-100 group-hover:opacity-0 transition-opacity duration-300`}>
        <h3 className="text-white text-sm font-bold truncate">{title}</h3>
      </div>
      <div
        className={`absolute inset-0 bg-black bg-opacity-90 text-white p-4 flex flex-col justify-center opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
      >
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">{originalTitle}</p>
        <div className="flex items-center gap-2 mb-3">
          <ReactCountryFlag
            countryCode={formattedLang}
            svg
            className="w-5 h-5 rounded-sm overflow-hidden"
          />
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < starRating ? solidStar : regularStar}
                className="text-sm"
              />
            ))}
          </div>
        </div>
        <p className="text-xs line-clamp-4 text-gray-300">{data.overview}</p>
      </div>
    </li>
  );
}

