import Sidbar from "./components/Sidbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import Searchbar from "./components/Searchbar";
import TopArtists from "./pages/TopArtists";
function App() {
  return (
    <div className="App">
      <Sidbar />
      <div className="main">
        <Searchbar />
        <div className="music">
        <div >
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/top-artists" element={<TopArtists />} />

          </Routes>
          </div>
        </div>
        <div className="top_play">
          topplay
        </div>
      </div>
    </div>
  );
}

export default App;
