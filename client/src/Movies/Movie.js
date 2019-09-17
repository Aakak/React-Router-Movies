import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = props => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
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



  componentProps(Props){
    if(this.props.match.params.id !== Props.match.params.id)
    this.fetchMovie(Props.match.params.id);
  }


  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };



  if (!movie) {
    return <div>Loading movie information...</div>;
  }



  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        <div className="movie-star">{stars}</div>
      </div>
      <div onClick={this.saveMovie} className="save-button">
        Save
      </div>
    </div>
  );
};

export default Movie;
