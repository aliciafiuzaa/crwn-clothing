import React from 'react';
import './category-item.scss';

// it structures where each collection item prop appears
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
    <div 
      className="background-image" 
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}

export default CategoryItem;


