import React from 'react';
import MealCard from './MealCard';

const drinks = [
  {
    name: 'Coca-Cola',
    category: 'Carbonated',
    image: 'https://via.placeholder.com/200x120?text=Coke',
    price: 500,
    description: 'Chilled classic coke.',
    fullDescription: 'A 50cl bottle of Coca-Cola served chilled.',
  },
  {
    name: 'Yoghurt Drink',
    category: 'Yoghurt',
    image: 'https://via.placeholder.com/200x120?text=Yoghurt',
    price: 800,
    description: 'Creamy yoghurt drink.',
    fullDescription: 'Locally made yoghurt drink, thick and satisfying.',
  },
  {
    name: 'Red Wine',
    category: 'Wines',
    image: 'https://via.placeholder.com/200x120?text=Wine',
    price: 3500,
    description: 'Imported red wine.',
    fullDescription: 'Smooth dry red wine, perfect for dinner.',
  },
];

const DrinkSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {drinks.map((drink, i) => (
       <MealCard
          key={i}
          meal={drink}
          onClick={() => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingIndex = cart.findIndex(item => item.name === drink.name);
            if (existingIndex !== -1) {
              cart[existingIndex].quantity += 1;
            } else {
              cart.push({ ...drink, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${drink.name} added to cart`);
          }}
        />

      ))}
    </div>
  );
};

export default DrinkSection;