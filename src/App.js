import Sidbar from "./components/Sidbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Discover from "./pages/Discover";
import Searchbar from "./components/Searchbar";
import TopArtists from "./pages/TopArtists";
import TopPlay from "./components/TopPlay";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  const { activeSong } = useSelector((state) => state.player);

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
          <TopPlay/>
        </div>
      </div>
      {
        activeSong?.title && (
          <div className="music_player_container"> 
              <MusicPlayer/>
          </div>
        )
      }
    </div>
  );
}

export default App;
