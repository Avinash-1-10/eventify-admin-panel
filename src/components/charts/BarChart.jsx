import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [chartData] = useState({
    series: [{
      name: 'Ticket Sales',
      data: [200, 300, 150, 400] // Dummy data for ticket sales
    }],
    options: {
      chart: {
        type: 'bar',
      },
      colors: ['#10B981'], // Tailwind green
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Concerts', 'Workshops', 'Conferences', 'Sports'], // Event categories
        labels: {
          style: {
            colors: '#D1D5DB', // Tailwind gray-400 for dark mode
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#D1D5DB', // Tailwind gray-400 for dark mode
          },
        },
      },
      grid: {
        borderColor: '#374151', // Tailwind gray-700 for dark mode
      },
      tooltip: {
        theme: 'dark',
      },
    },
  });

  return (
    <div className="bg-[#171B27] p-6 rounded-lg shadow-lg">
      <h2 className="text-xl text-gray-200 mb-4">Ticket Sales by Event</h2>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
