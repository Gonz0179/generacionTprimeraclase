// src/components/ProductCard.js
import React from 'react';
import { useTheme } from '../contexts/themecontext';
import './ProductCard.css';

const ProductCard = ({ name, description, image }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`product-card ${isDarkMode ? 'dark' : ''}`}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
