import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Movie = props => {
  const [movie, setMovie] = useState({ stars: [] });

  useEffect(() => {
    const id = props.id;
    console.log(id);
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  console.log(movie);
  return (
    <div className="save-wrapper">
      <MovieCard {...movie}></MovieCard>
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
    </div>
  );
};

export default Movie;
