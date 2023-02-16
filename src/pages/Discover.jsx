import React,{ useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SongCard from '../components/SongCard'
import {genres} from '../assets/constantes'
import axios from 'axios'



function Discover() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //api call
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        "X-RapidAPI-Key": "9162fd2d6cmshc039b9bda0d6bb4p159f01jsn4d136b001cb2",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com"
      };
      const params = {
        'key':'484129036',
        'locale' : 'en-Us'
      }
      const response = await axios.get(
        "https://shazam.p.rapidapi.com/songs/list-recommendations",
        { headers,params }
      );
      setData(response.data.tracks);
    };

    fetchData();
  }, []);
  //end  of api call
if(data)
{  return (
    <div className='discover'>
      <div className='song_genre'>
          <h2 className=''>Discover</h2>

          <select className='select' name="" id="">
            {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
          </select>
      </div>

    <div className='songs_container'>
      {data.map((song,i)=>(
        <SongCard 
          key={song.key}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          i={i}
        />
      ))}
    </div>

    </div>
    )}
    else
    return(
      <>waiting .......</>
    )
}

export default Discover
