// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Arroz',
    description: 'Arroz de la mas alta calidad',
    image: product1,
  },
  {
    id: 2,
    name: 'Fideos Luchetti',
    description: 'Fideos mas liviano que vas a encontrar',
    image: product2,
  },
  {
    id: 3,
    name: 'Ñoquis Mama Cocina',
    description: 'Ñoquis como los que estan en la muni',
    image: product3,
  },
  {
    id: 4,
    name: 'Atun Enlatado',
    description: 'Cómo se llama el pez que se cae del décimo piso?',
    image: product4,
  },
  {
    id: 5,
    name: 'Atun enlatado',
    description: 'AAAAAAAAAAA TUN',
    image: product5,
  },
  {
    id: 6,
    name: 'Alfajor ',
    description: 'Llena la panza y el alma',
    image: product6,
  },
  {
    id: 7,
    name: 'agua embotellada',
    description: 'Refrescante para este calor.',
    image: product7,
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
