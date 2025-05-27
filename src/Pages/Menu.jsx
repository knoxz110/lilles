import React, { useState } from 'react';
import FoodSection from '../Components/FoodSection';
import DrinkSection from '../Components/DrinkSection'

const Menu = () => {
  const [tab, setTab] = useState('food');

  return (
    <div className=" bg-white py-10 md:py-10 items-center px-10 w-[100%]  md:px-[8%] ">
      <div className="flex gap-6 ml-[20%] mt-12 md:ml-[40%] mb-8">
        <button
          onClick={() => setTab('food')}
          className={`px-5  py-2 rounded-full ${
            tab === 'food' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Food
        </button>
        <button
          onClick={() => setTab('drinks')}
          className={`px-4 py-2 rounded-full ${
            tab === 'drinks' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Drinks
        </button>
      </div>

      {tab === 'food' && <FoodSection />}
      {tab === 'drinks' && <DrinkSection />}
    </div>
  );
};

export default Menu;
