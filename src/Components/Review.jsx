// src/pages/Review.jsx
import React, { useState } from 'react';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit review logic
    alert('Review submitted!');
  };

  return (
    <div className="bg-white pb-7">
      <div className="max-w-md bg-white mt-[16%] md:mt-[10%] rounded shadow-lg  mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              className="w-full p-2 border border-gray-300 rounded"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Comment</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
