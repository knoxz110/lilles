import React from 'react';

const MealCard = ({ meal, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl pb-12 shadow-md md:w-[100%] overflow-hidden cursor-pointer hover:shadow-lg transition-all"
    >
      <div className="flex mt-7 gap-2 justify-between items-center relative">
        {meal.badge && (
          <span className={`absolute left-2 top-4 px-2 py-1 text-xs text-white rounded-full ${meal.badge === 'New' ? 'bg-teal-500' : 'bg-[#00302E]'}`}>
            {meal.badge}
          </span>
        )}
        {meal.category && (
          <span className={`absolute right-2 top-4 px-2 py-1 text-xs text-white rounded-full ${meal.category === 'New' ? 'bg-teal-500' : 'bg-purple-500'}`}>
            {meal.category}
          </span>
        )}
      </div>
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full mb-2 mt-8 h-40 object-contain"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold py-3 mb-3">{meal.name}</h4>
        <p className="text-sm text-gray-600">{meal.description}</p>
        <div className="pt-8 flex justify-between items-center">
          <span className="font-bold text-[#102B2A]">₦{meal.price}</span>
          <button className="text-sm px-3 py-1 bg-[#102B2A] text-white rounded-md hover:bg-green-600">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;