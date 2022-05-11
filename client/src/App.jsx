import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchedArtists from "./components/SearchedArtists";

function App() {
  return (
    <div className="App d-flex flex-column">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched-artists" element={<SearchedArtists />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
