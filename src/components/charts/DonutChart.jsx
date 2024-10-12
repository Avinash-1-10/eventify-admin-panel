import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const [chartData] = useState({
    series: [44, 55, 13, 43], // Dummy data for event categories
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Concerts', 'Workshops', 'Conferences', 'Sports'],
      colors: ['#6366F1', '#10B981', '#F59E0B', '#EF4444'], // Tailwind colors
      legend: {
        position: 'bottom',
        labels: {
          colors: '#D1D5DB', // Tailwind gray-400 for dark mode
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
          },
        },
      },
      tooltip: {
        theme: 'dark',
      },
    },
  });

  return (
    <div className="bg-[#171B27] p-6 rounded-lg shadow-lg">
      <h2 className="text-xl text-gray-200 mb-4">Event Categories</h2>
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;
