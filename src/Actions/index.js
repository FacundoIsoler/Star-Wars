// movies.js
import axios from "axios";

export const getMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("https://swapi.dev/api/films");
      const films = {};

      data.results.forEach((result) => {
        films[result.episode_id] = {
          ...result,
          characters: result.characters.map(
            (character) => character.split("/")[5]
          ),
        };
      });

      dispatch({ type: "GET_MOVIES_SUCCESS", payload: films });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_ERROR", payload: error.message });
    }
  };
};

export const getMovieDetails = (episode_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/films/${episode_id}`
      );

      dispatch({
        type: "GET_MOVIE_DETAILS_SUCCESS",
        payload: { [episode_id]: data },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIE_DETAILS_ERROR",
        payload: { episode_id, error: error.message },
      });
    }
  };
};

export const getCharacter = (episode_id, character_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/people/${character_id}`
      );

      dispatch({
        type: "GET_CHARACTER_SUCCESS",
        payload: { episode_id, character_id, data },
      });
    } catch (error) {
      dispatch({
        type: "GET_CHARACTER_ERROR",
        payload: { episode_id, character_id, error: error.message },
      });
    }
  };
};
