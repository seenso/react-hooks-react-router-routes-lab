import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>{/*{code here}*/}
      <h1>Movies Page</h1>
      {movies.map(m => {
        return (<div key={m.title}>
          Title: {m.title} Time: {m.time} <br />
          <ul>
            {m.genres.map(genre => {
              return (<li>{genre}</li>);
            })}
          </ul>
        </div>
        );
      })}
    </div>
  );
}

export default Movies;
