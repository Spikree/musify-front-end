import React from 'react';
import categories from '../../assets/categoriesData.js';
import './Categories.css';
import Box from '../box/Box.jsx';

const Categories = () => {
  return (
    <div className="categories">
      <div className="header">Categories</div>

      <div className="categories-list">
        {categories.map((category) => {
          return (
            <div className="cards" key={category.id}> 
              <Box key={category} a={category.name} value={category.name} /> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;