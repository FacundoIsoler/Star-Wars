import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../../Actions/index.js";

export default function MovieCard({ episode_id, title, director }) {
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails[episode_id]);

  useEffect(() => {
    if (!movieDetails) {
      dispatch(getMovieDetails(episode_id));
    }
  }, [dispatch, episode_id, movieDetails]);

  return (
    <div>
      <h2 >{title}</h2>
      <h3>Episode  {episode_id}</h3>
      <h3>Directed by {director}</h3>
      <Link to={`/film/${episode_id}`}>View film details</Link>
      {movieDetails && (
        <Link to={`/film/${episode_id}/characters`}>View film characters</Link>
      )}
    </div>
  );
}
