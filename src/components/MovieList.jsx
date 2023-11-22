import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ films, del, search, starrate }) => {
  return (
    <div
      style={{
        display: "flex",

        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "50px",
      }}
    >
      {films
        .filter(
          (el) =>
            el.name
              .toUpperCase()
              .trim()
              .includes(search.toUpperCase().trim()) && el.rating >= starrate
        )
        .map((el) => (
          <MovieCard el={el} key={el.id} del={del} />
        ))}
    </div>
  );
};

export default MovieList;
