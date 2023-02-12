import React from 'react'
import SongCard from '../components/SongCard'
import {genres} from '../assets/constantes'
function Discover() {
  return (
    <div className='discover'>
      <div className='song_genre'>
          <h2 className='discover'>Discover</h2>

          <select className='select' name="" id="">
            {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
          </select>
      </div>

    <div className='songs_container'>
      {[1,2,3,4,5,6,7,8,9].map((song)=>(
        <SongCard/>
      ))}
    </div>

    </div>
    )
}

export default Discover
