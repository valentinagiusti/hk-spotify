import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ArtistAlbums from "./components/ArtistAlbums";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App d-flex flex-column">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
