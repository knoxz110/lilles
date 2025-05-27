import React from 'react';

const MealModal = ({ meal, quantity, onClose, onAdd, onRemove, onConfirmAdd }) => {

  if (!meal) return null;
  return (
    <div className="fixed inset-0 bg-[#102B2A] bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-60 object-contain rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{meal.name}</h2>
        <p className="text-gray-600 mb-4">{meal.fullDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">₦{meal.price}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onRemove}
              className="text-xl px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={onAdd}
              className="text-xl px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
          
        </div>
        <div className="mt-6 px-6 text-center">
          <button
            onClick={() => { onConfirmAdd(); window.location.reload(); }}
            className="bg-[#102B2A] hover:bg-green-700 transition text-white px-6 py-2 rounded-md text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default MealModal;
