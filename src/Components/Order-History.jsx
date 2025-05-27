// src/pages/OrderHistory.jsx
import React from 'react';

const mockOrders = [
  {
    id: 'ORD123456',
    items: ['Jollof Rice', 'Chicken Wings'],
    status: 'Delivered',
    total: '₦4500',
    date: '2025-05-25'
  },
  {
    id: 'ORD123457',
    items: ['Egusi Soup', 'Pounded Yam'],
    status: 'Dispatched',
    total: '₦3200',
    date: '2025-05-24'
  },
  {
    id: 'ORD123458',
    items: ['Fried Rice', 'Beef'],
    status: 'Preparing',
    total: '₦3800',
    date: '2025-05-23'
  }
];

const OrderHistory = () => {
  return (
    <div className="bg-white pb-7">
      <div className="max-w-md mx-auto p-6 bg-white mt-[16%] md:mt-[10%] rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="border p-4 rounded shadow-sm">
              <div className="font-semibold">Order ID: {order.id}</div>
              <div className="text-sm text-gray-600">Date: {order.date}</div>
              <div className="mt-2">Items: {order.items.join(', ')}</div>
              <div className="text-sm mt-1">Total: <strong>{order.total}</strong></div>
              <div className={`text-sm font-medium mt-1 ${
                order.status === 'Delivered' ? 'text-green-600' : order.status === 'Dispatched' ? 'text-yellow-600' : 'text-blue-600'
              }`}>
                Status: {order.status}
              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  );
};

export default OrderHistory;
