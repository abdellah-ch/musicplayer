import React from 'react'
// import { Link } from 'react-router-dom'
import PlayPause from './PlayPause'
import {img} from '../assets'

function SongCard() {
  return (
    <div className='songcard'>
        <div className='img_group'>
            <div className='play_pause'>
                <PlayPause />
            </div>
        <img src={img} alt="" className='song_img' />
        </div>

    <div className='description'>
        <p className='song_title'>
            song_title
        </p>
        <p className='song_subtitle'>
            song_subtitle
        </p>
    </div>
    </div>
    
  )
}

export default SongCard