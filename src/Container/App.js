import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home.jsx";
import LandingPage from "../Components/LandingPage/LandingPage.jsx";
import Characters from "../Components/Characters/Characters.jsx";
import MovieDetails from "../Components/MovieDetails/MovieDetails.jsx";

function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/film/:episode_id" element={<MovieDetails />} />
        <Route path="/film/:episode_id/characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
