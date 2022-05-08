import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ArtistAlbums from "./components/ArtistAlbums";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<ArtistAlbums />} />
      </Routes>
    </div>
  );
}

export default App;
