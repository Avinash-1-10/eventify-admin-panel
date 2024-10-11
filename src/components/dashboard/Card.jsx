import React from 'react';
import { FaUsers, FaPaintBrush, FaUserShield, FaCalendarAlt, FaTicketAlt, FaDollarSign } from 'react-icons/fa';

const Card = ({ title, count, icon }) => {
  return (
    <div className="bg-[#171B27] p-6 rounded-lg shadow-lg flex items-center space-x-4">
      <div className="text-blue-400 text-3xl">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-300 text-xl font-semibold">{title}</h4>
        <p className="text-gray-100 text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default Card;
