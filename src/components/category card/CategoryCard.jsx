import React from 'react'
import MusicCard from '../music card/MusicCard'

const CategoryCard = () => {
  return (
    <div className='categoryCard'>

        <div className="c-header">
            <h2>Trending now</h2>
        </div>

        <div className="cards">
            <MusicCard/>
        </div>

        <div className="bottom-button">
            <button>View All</button>
        </div>
    </div>
  )
}

export default CategoryCard