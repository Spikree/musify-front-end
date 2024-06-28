import React from 'react'
import './Home.css'
import categories from '../../assets/categoriesData';
import Categories from '../../components/categories/Categories';
import CategoryCard from '../../components/category card/CategoryCard';

const Home = () => {
  return (
    <div className="home-main">
    <div className='home'>
        <div className="left">
            <h1>Your Music</h1>
            <h1>PlayGround</h1>
            <p>Where Every Click Hits a Right note</p>
        </div>

        <div className="right">
            
        </div>
    </div>

    <Categories/>
    {
      categories.map((categories) => {
        return (
          <CategoryCard Category={categories.name} />
        )
      })
    }
    </div>
  )
}

export default Home