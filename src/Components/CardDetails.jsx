import React, { useState } from 'react';

const CardDetails = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle card update logic here
    alert('Card details saved successfully!');
  };

  return (
    <div className="bg-white pb-7">
      <div className="max-w-md mx-auto rounded shadow-lg  bg-white mt-[16%] md:mt-[10%]  p-4">
        <h2 className="text-xl font-bold mb-4">Card Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Card Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-2 border border-gray-300 rounded"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Save Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardDetails;
