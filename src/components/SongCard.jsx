import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause'
// import {img} from '../assets'
import { playPause, setActiveSong } from '../Redux/features/playerSlice'


function SongCard({song,isPlaying,activeSong,data,i}) {

    const dispatch = useDispatch();

    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
  
    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };
  return (
    <div className='songcard'>
        <div className='img_group'>
            <div className='play_pause'>
                <PlayPause 
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick}
                />
            </div>
        <img src={song.images?.coverart} alt="" className='song_img' />
        </div>

    <div className='description'>
        <p className='song_title'>
            {song.title}
        </p>
        <p className='song_subtitle'>
            {song.subtitle}
        </p>
    </div>
    </div>
    
  )
}

export default SongCard