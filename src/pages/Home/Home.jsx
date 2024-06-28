import React from 'react'
import './Home.css'
import Category from '../../components/categories/Categories'
import CategoryCard from '../../components/category card/CategoryCard'

const Home = () => {
  return (
    <div className="home-main">
    <div className='home'>
        <div className="left">
            <h1>Your Music</h1>
            <h1>PlayGround</h1>
            <p>Where Every Click Hits a Right not</p>
        </div>

        <div className="right">
            <CategoryCard/>
        </div>
    </div>

    <Category/>
    </div>
  )
}

export default Home