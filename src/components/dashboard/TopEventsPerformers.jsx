import React from 'react';
import TopEventsTable from './TopEventsTable'; // Import Top Events Table
import TopPerformersTable from './TopPerformersTable'; // Import Top Performers Table

const TopEventsPerformers = () => {
  return (
    <div className="p-8 bg-[#222738]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopEventsTable /> {/* Top Events Table */}
        <TopPerformersTable /> {/* Top Performers Table */}
      </div>
    </div>
  );
};

export default TopEventsPerformers;
