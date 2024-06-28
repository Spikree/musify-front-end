import React from 'react';
import './MusicCard.css';

const MusicCard = (props) => {
  return (
    <div className='music-card' >
        <div className="image">
            <img src={props.image} alt="" />
        </div>

        <div className="song-name">
            <p>{props.songName}</p>
        </div>

        <div className="singer">
            <p>{props.singer}</p>
        </div>
    </div>
  );
};

export default MusicCard;
