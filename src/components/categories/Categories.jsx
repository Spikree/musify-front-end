import React from 'react';
import categories from '../../assets/categories.js';
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
              <Box value={category.name} /> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
