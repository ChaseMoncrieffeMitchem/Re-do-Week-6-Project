import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies/:searchTitle" element={<Movies />} />
        <Route path="/moviesinfo/:id" element={<MovieInfo />}/>
      </Routes>
    </Router>
  );
}

export default App;
