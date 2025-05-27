// src/pages/Order.jsx
import React, { useEffect, useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('approvedOrders')) || [];
    setOrders(storedOrders);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getTotal = (items) => {
    if (!Array.isArray(items)) return 0;
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white pb-24">
      <div className="max-w-3xl mt-[13%] mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Approved Orders</h2>
        {orders.length === 0 ? (
          <p>No approved orders found.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order, index) => (
              <li
                key={index}
                className="p-4 bg-white shadow rounded cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Order #{index + 1}</p>
                    <p className="text-sm text-gray-600">Status: {order.status || 'Processing'}</p>
                    <p className="text-sm text-gray-600">Time: {order.timestamp}</p>
                    <p className="text-sm text-gray-600">Total: ₦{getTotal(order.items)}</p>
                    <p className="text-sm mt-2">
                      Meals: {Array.isArray(order.items) ? order.items.slice(0, 2).map(item => item.name).join(', ') : ''}
                      {Array.isArray(order.items) && order.items.length > 2 ? '...' : ''}
                    </p>
                  </div>
                </div>

                {expandedIndex === index && Array.isArray(order.items) && (
                  <ul className="mt-4 space-y-2">
                    {order.items.map((item, i) => (
                      <li key={i} className="border rounded p-2">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm">Quantity: {item.quantity}</p>
                        <p className="text-sm">Price: ₦{item.price}</p>
                        
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Order;
