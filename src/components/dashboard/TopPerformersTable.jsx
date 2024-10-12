import React from 'react';

const TopPerformersTable = () => {
  const topPerformers = [
    { performerName: 'John Doe', totalShows: 12 },
    { performerName: 'Jane Smith', totalShows: 10 },
    { performerName: 'The Rock Band', totalShows: 8 },
    { performerName: 'DJ Mike', totalShows: 7 },
    { performerName: 'Sarah Lee', totalShows: 5 },
  ];

  return (
    <div className="bg-[#171B27] p-6 rounded-lg shadow-lg">
      <h2 className="text-xl text-gray-200 mb-4">Top Performers</h2>
      <table className="w-full text-left text-gray-300">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-3">Performer Name</th>
            <th className="p-3">Total Shows</th>
          </tr>
        </thead>
        <tbody>
          {topPerformers.map((performer, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-3">{performer.performerName}</td>
              <td className="p-3">{performer.totalShows}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPerformersTable;
