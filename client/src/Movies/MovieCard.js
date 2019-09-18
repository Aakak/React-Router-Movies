import React from "react";
import { Link } from "react-router-dom";

const MovieCard = props => {
  // const { id, title, director, metascore, stars } = props.movie;
  const id = props.id;
  const title = props.title;
  const director = props.director;
  const metascore = props.metascore;
  const stars = props.stars;

  return (
    <div className="movie-card">
      <h2 className="movie-title"> {title}</h2>
      <div>
        <Link to={"/Movie/" + id}>
          <button className="details-button">Movie Details</button>
        </Link>
      </div>
      <div className="movie-director">
        <em>Director:{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
