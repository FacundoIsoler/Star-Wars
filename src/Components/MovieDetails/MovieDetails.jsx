import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { episode_id } = useParams();
  const { title, director } = useSelector(
    (state) => state.allMovies[episode_id]
  );

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.name}>{title}</h1>
        <h3 className={styles.director}>{director}</h3>
        <h1>TO BE CONTINUE...</h1>
      </div>
      <button>
      <Link to={'/home'} className={styles.Volver}>Home</Link>
      </button>
    </div>
  );
}
