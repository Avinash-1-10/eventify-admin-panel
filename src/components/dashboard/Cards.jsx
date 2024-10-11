import React from 'react';
import { FaUsers, FaPaintBrush, FaUserShield, FaCalendarAlt, FaTicketAlt, FaDollarSign } from 'react-icons/fa';
import Card from './Card'; // Import the Card component

const Cards = () => {
  const data = {
    usersCount: 1024,
    artistsCount: 134,
    adminsCount: 5,
    totalEvents: 48,
    totalTickets: 5678,
    totalRevenue: '₹10,56,000',
  };

  return (
    <div className="p-8 bg-[#222738]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="Users Count" count={data.usersCount} icon={<FaUsers />} />
        <Card title="Perfomers Count" count={data.artistsCount} icon={<FaPaintBrush />} />
        <Card title="Admins Count" count={data.adminsCount} icon={<FaUserShield />} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Events" count={data.totalEvents} icon={<FaCalendarAlt />} />
        <Card title="Total Tickets" count={data.totalTickets} icon={<FaTicketAlt />} />
        <Card title="Total Revenue" count={data.totalRevenue} icon={<FaDollarSign />} />
      </div>
    </div>
  );
};

export default Cards;
