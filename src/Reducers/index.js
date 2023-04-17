// movies.js
const initialState = {
  allMovies: {},
  movieDetails: {},
  movieCharacters: {},
  loading: true,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES_SUCCESS":
      return { ...state, allMovies: action.payload, loading: false};
    case "GET_MOVIES_ERROR":
      return { ...state, error: action.payload };
    case "GET_MOVIE_DETAILS_SUCCESS":
      return {
        ...state,
        movieDetails: { ...state.movieDetails, ...action.payload },
      };
    case "GET_MOVIE_DETAILS_ERROR":
      return {
        ...state,
        error: { ...state.error, [action.payload.episode_id]: action.payload.error },
      };
    case "GET_CHARACTER_SUCCESS":
      return {
        ...state,
        movieCharacters: {
          ...state.movieCharacters,
          [action.payload.episode_id]: {
            ...state.movieCharacters[action.payload.episode_id],
            [action.payload.character_id]: action.payload.data,
          },
        },
      };
    case "GET_CHARACTER_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.episode_id]: {
            ...state.error[action.payload.episode_id],
            [action.payload.character_id]: action.payload.error,
          },
        },
      };
    default:
      return state;
  }
}
