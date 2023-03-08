import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";
import axios from "axios";
function Search() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { searchTerm } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async (term) => {
      const headers = {
        "X-RapidAPI-Key": "9162fd2d6cmshc039b9bda0d6bb4p159f01jsn4d136b001cb2",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      };
      const params = {
        term: searchTerm,
        locale: "en-Us",
        offset: "0",
        limit: "5",
      };

      const response = await axios.get("https://shazam.p.rapidapi.com/search", {
        headers,
        params,
      });
      setData(response.data.tracks.hits);
    };
    fetchData();
  }, [searchTerm]);
  if (!data) {
    return <>....</>;
  } else
    return (
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Showing results for <span className="font-black">{searchTerm}</span>
        </h2>

        <div className="songs_container">
          {data.map((song, i) => (
            <SongCard
              key={song.track.key}
              song={song.track}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div>
      </div>
    );
}

export default Search;
