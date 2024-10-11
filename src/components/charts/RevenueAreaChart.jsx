import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RevenueAreaChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const data = {
    daily: {
      series: [
        {
          name: 'Revenue',
          data: [45, 52, 38, 45, 19, 23, 2],
        },
      ],
      categories: ['2024-10-01', '2024-10-02', '2024-10-03', '2024-10-04', '2024-10-05', '2024-10-06', '2024-10-07'],
    },
    weekly: {
      series: [
        {
          name: 'Revenue',
          data: [310, 402, 280, 510, 420, 1090, 1000],
        },
      ],
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    },
    monthly: {
      series: [
        {
          name: 'Revenue',
          data: [1100, 3200, 4500, 3200, 3400, 5200, 4100],
        },
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yearly: {
      series: [
        {
          name: 'Revenue',
          data: [22000, 63000, 44000, 56000, 89000, 73000, 98000],
        },
      ],
      categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    },
  };

  const chartData = {
    series: data[selectedPeriod].series,
    options: {
      chart: {
        type: 'area',
        height: 350,
        foreColor: '#CBD5E1',
        toolbar: {
          show: false,
        },
      },
      colors: ['#4F46E5'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'category',
        categories: data[selectedPeriod].categories,
      },
      yaxis: {
        title: {
          text: 'Revenue ($)',
        },
      },
      grid: {
        borderColor: '#374151',
      },
      legend: {
        labels: {
          colors: '#D1D5DB',
        },
      },
      tooltip: {
        theme: 'dark',
      },
    },
  };

  return (
    <div className="bg-[#222738] p-4 rounded-md shadow-md">
      <h2 className="text-xl text-gray-200 mb-4">Revenue Analysis</h2>

      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-md ${selectedPeriod === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setSelectedPeriod('daily')}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 rounded-md ${selectedPeriod === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setSelectedPeriod('weekly')}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 rounded-md ${selectedPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setSelectedPeriod('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-md ${selectedPeriod === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setSelectedPeriod('yearly')}
        >
          Yearly
        </button>
      </div>

      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default RevenueAreaChart;
