// src/pages/Cart.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleProceed = () => {
  if (cartItems.length === 0) return;

  const approvedOrders = JSON.parse(localStorage.getItem('approvedOrders')) || [];

  const newOrder = {
    status: 'Processing',
    timestamp: new Date().toLocaleString(),
    items: cartItems,
  };

  const newApprovedOrders = [...approvedOrders, newOrder];
  localStorage.setItem('approvedOrders', JSON.stringify(newApprovedOrders));
  localStorage.removeItem('cart');
  setCartItems([]);
  navigate('/orders');
};


  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  return (
    <div className='bg-white pb-24'>
        <div className="w-[70%] mt-[20%] bg-white shadow-lg rounded-2xl p-6 max-w-sm text-center border mx-auto ">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
            <>
            <p>Your cart is empty.</p>
            <button
                onClick={() => navigate('/menu')}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                Menu
            </button>
            </>
        ) : (
            <>
            <ul className="space-y-4">
                {cartItems.map((item, index) => (
                <li key={index} className="flex gap-4 items-center p-4 bg-white shadow rounded">
                    <img
                    src={item.image || '/placeholder.png'}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                    />
                    <div className="flex-1 text-left">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                    <p className="text-sm">Price: ₦{item.price}</p>
                    </div>
                    <button
                    onClick={() => handleRemove(index)}
                    className="text-red-600 text-sm hover:underline"
                    >
                    <XCircle className="w-5 h-5" />
                    </button>
                </li>
                ))}
            </ul>
            <div className="mt-4 font-bold text-lg">Total: ₦{getTotal()}</div>
            <button
                onClick={() => { handleProceed(); window.location.reload(); }}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                Proceed
            </button>
            </>
        )}
        </div>
    </div>
  );
};

export default Cart;
