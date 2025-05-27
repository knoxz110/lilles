import React, { useState } from 'react';
import MealCard from './MealCard';
import MealModal from '../Components/MealModal';
import jollof from '../assets/img8.png';
import burger from '../assets/burger.png';
import kebab from '../assets/kebab.png';
import beans from '../assets/dodo-beans.png';
import pizza from '../assets/pizza.png';
import ramen from '../assets/ramen-bowl.png';
import spag from '../assets/img12.png';

const categories = ['All', 'Local', 'Continental', 'snacks'];

const mealsData = [
  {
    name: 'Jollof Rice',
    category: 'Local',
    image: jollof,
    price: 1500,
    description: 'Delicious party jollof cooked with a blend of spices, served with fried plantains and meat.',
    fullDescription: 'Our jollof rice is cooked with a blend of spices, served with fried plantains and meat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!',
    badge: 'Popular',
  },
   {
      name: "Spagetti nd Meatballs",
      category: 'Local',
      description: "Classic Nigerian party spaghetti with meatballs",
      fullDescription: "A classic Nigerian party dish of spaghetti cooked with a rich tomato sauce and meatballs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!",
      price: 1500,
      image: spag
    },
    {
      name: "Beans Porridge",
      category: 'Local',
      fullDescription: "Soft-cooked beans in palm oil sauce with spices and seasonings. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!",
      description: "A healthy, rich blend of beans cooked in palm oil and seasonings.",
      price: 1200,
      image: beans,
      badge: 'Best Seller',
    },

  {
    name: 'Kebab',
    category: 'Continental',
    image: kebab,
    price: 2000,
    description: 'Grilled meat kebab seasoned and grilled to perfection.',
    fullDescription: 'Tender skewered kebabs seasoned and grilled to perfection. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!',
    badge: 'New',
  },

    {
      name: "Ramen",
      category: 'Continental',
      description: "Hot, savory broth with fresh noodles and toppings.",
      fullDescription: "A comforting bowl of ramen with rich broth, noodles, and toppings. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!",
   
      price: 2500,
      image: ramen
    },
    {
      name: "Kebab",
      category: 'Continental',
      description: 'Grilled meat kebab seasoned and grilled to perfection.',
      fullDescription: 'Tender skewered kebabs seasoned and grilled to perfection. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!',
      price: 2000,
      image: kebab,
      badge: 'New',
    },

  {
    name: 'Burger',
    category: 'snacks',
    image: burger,
    price: 2500,
    description: 'Classic beef burger with lettuce, cheese, tomato, and our signature sauce',
    fullDescription: 'Juicy beef patty with lettuce, cheese, tomato, and our signature sauce. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!',
    badge: 'Best Seller',
  },

  {
    name: "Pizza",
    category: 'snacks',
    image: pizza,
    price: 3000,
    description: "Cheesy pizza with fresh toppings",
    fullDescription: "Delicious pizza topped with fresh ingredients and melted cheese. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!",
    badge: 'New',
  },

   {
    name: "Burger",
    category: 'Snacks',
    price: 1800,
    image: burger,
    description: 'Classic beef burger with lettuce, cheese, tomato, and our signature sauce',
    fullDescription: 'Juicy beef patty with lettuce, cheese, tomato, and our signature sauce. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum quasi ad veritatis voluptas dolor repellat deleniti consequatur omnis nisi!',
    badge: 'Best Seller',
  },
];


const FoodSection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
  if (!selectedMeal) return;
  
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingIndex = cart.findIndex(item => item.name === selectedMeal.name);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({ ...selectedMeal, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  setSelectedMeal(null);
};


  const filteredMeals =
    filter === 'All' ? mealsData : mealsData.filter((meal) => meal.category === filter);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-3 rounded-full border ${
              filter === cat ? 'bg-red-600 text-white' : 'text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredMeals.map((meal, idx) => (
          <MealCard
            key={idx}
            meal={meal}
            onClick={() => {
              setSelectedMeal(meal);
              setQuantity(1);
            }}
          />
        ))}
      </div>
      <MealModal
        meal={selectedMeal}
        quantity={quantity}
        onClose={() => setSelectedMeal(null)}
        onAdd={() => setQuantity((q) => q + 1)}
        onRemove={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
        onConfirmAdd={handleAddToCart}
      />

    </div>
    
  );
};

export default FoodSection;