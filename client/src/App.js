import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route
          path="/Movie/:id"
          render={props => (
            <Movie addToSavedList={addToSavedList} id={props.match.params.id} />
          )}
        />
      </div>
    </div>
  );
};

export default App;
