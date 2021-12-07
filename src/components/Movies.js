import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => {
        return (<div key={m.title}>
          <h2>{m.title} (Time: {m.time})</h2>
          <ul>
            {m.genres.map(genre => {
              return (<li key={genre}>{genre}</li>);
            })}
          </ul>
        </div>
        );
      })}
    </div>
  );
}

export default Movies;
