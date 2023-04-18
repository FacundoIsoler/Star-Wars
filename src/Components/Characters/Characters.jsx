import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCharacter } from "../../Actions";
import styles from "./Characters.module.css";

function Characters() {
  const dispatch = useDispatch();
  const { episode_id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [characterDetails, setCharacterDetails] = useState({});
  const [filterEyeColor, setFilterEyeColor] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const { allMovies, movieDetails } = useSelector((state) => state);
  const { title, director } = allMovies[episode_id];
  
  useEffect(() => {
  dispatch(getCharacter(episode_id));
  }, [dispatch, episode_id]);
  
  useEffect(() => {
  if (movieDetails && movieDetails[episode_id]) {
  const charactersWithUrl = movieDetails[episode_id].characters.map((character) => ({
  name: character,
  url: character,
  }));
  setCharacters(charactersWithUrl);
  }
  }, [movieDetails, episode_id]);
  
  useEffect(() => {
  const fetchCharacterDetails = async (characterUrl) => {
  const response = await fetch(characterUrl);
  const data = await response.json();
  setCharacterDetails((prevState) => ({
  ...prevState,
  [characterUrl]: data,
  }));
  };
  
  characters.forEach((character) => {
    if (!characterDetails[character.url]) {
      fetchCharacterDetails(character.url);
    }
  });
  }, [characters, characterDetails]);
  
  const filterCharacters = (character) => {
  if (filterEyeColor && characterDetails[character.url]?.eye_color !== filterEyeColor) {
  return false;
  }
  if (filterGender && characterDetails[character.url]?.gender !== filterGender) {
  return false;
  }
  return true;
  };
  
  const eyeColorOptions = [
  "blue",
  "yellow",
  "red",
  "brown",
  "black",
  "orange",
  "hazel",
  "pink",
  ];
  
  const genderOptions = ["male", "female", "n/a"];
  
  if (!episode_id || characters.length === 0) return null;
  
  return (
  <div className={styles.container}>
  <h1>{title}</h1>
  <h3 className={styles.director}>Directed by: {director}</h3>
  <div className={styles.filters}>
  <div className={styles.filter}>
  <label >Filter by eyes color:</label>
  <select
  id="eyeColorSelect"
  value={filterEyeColor}
  onChange={(e) => setFilterEyeColor(e.target.value)}
  >
  <option className={styles.select} value="">All</option>
  {eyeColorOptions.map((option) => (
  <option key={option} value={option} className={styles.select}>
  {option}
  </option>
  ))}
  </select>
  </div>
  <div className={styles.filter}>
  <label>Filter by gender:</label>
  <select
  id="genderSelect"
  value={filterGender}
  onChange={(e) => setFilterGender(e.target.value)}
  >
  <option className={styles.select} value="">All</option>
  {genderOptions.map((option) => (
  <option key={option} value={option} className={styles.select}>
  {option}
  </option>
  ))}
  </select>
  </div>
  </div>
  {characters.filter(filterCharacters).map((character) => (
  <div key={character.url} className={styles["character-card"]}>
  <h2 className={styles["character-name"]}>
  {characterDetails[character.url]?.name}
  </h2>
  <div className={styles["character-info"]}>
  <div className={styles["character-info-item"]}>
              <span className={styles["character-info-label"]}>Eye color:</span> {characterDetails[character.url]?.eye_color}
            </div>
            <div className={styles["character-info-item"]}>
              <span className={styles["character-info-label"]}>Gender:</span> {characterDetails[character.url]?.gender}
            </div>
            <div className={styles["character-info-item"]}>
              <span className={styles["character-info-label"]}>Height:</span> {characterDetails[character.url]?.height} cm
            </div>
            <div className={styles["character-info-item"]}>
              <span className={styles["character-info-label"]}>Weight:</span> {characterDetails[character.url]?.mass} kg
            </div>
          </div>
        </div>
      ))}

      <button>
      <Link to={'/home'} className={styles.Volver}>Home</Link>
      </button>
      <br />
    </div>
  );
}

export default Characters;
