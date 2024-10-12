import React from 'react';
import DonutChart from '../charts/DonutChart'; // Import DonutChart
import BarChart from '../charts/BarChart'; // Import BarChart

const EventSales = () => {
  return (
    <div className="p-8 bg-[#222738]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DonutChart /> 
        <BarChart />
      </div>
    </div>
  );
};

export default EventSales;
