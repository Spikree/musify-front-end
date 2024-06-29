import React from 'react'
import './CategoryCard.css'
import MusicCard from '../music card/MusicCard'
import musicData from '../../assets/musicData'

const CategoryCard = (props) => {
  return (
    <div id={props.id} className='categoryCard'>

        <div className="c-header" id={props.Category}>
            <h2>{props.Category}</h2>
        </div>

        <div className="cards-category">
            {
              musicData.map((musicData) => {
                return (
                  <MusicCard  key={musicData.id} image={musicData.albumArt} songName={musicData.songName} singer={musicData.artist}/>
                )
              })
            }
        </div>

        <div className="bottom-button">
            <button>View All</button>
        </div>
    </div>
  )
}

export default CategoryCard