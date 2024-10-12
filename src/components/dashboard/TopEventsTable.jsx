import React from 'react';

const TopEventsTable = () => {
  const topEvents = [
    { eventName: 'Concert in the Park', ticketsSold: 500 },
    { eventName: 'Tech Conference 2024', ticketsSold: 450 },
    { eventName: 'Food Festival', ticketsSold: 350 },
    { eventName: 'Startup Expo', ticketsSold: 300 },
    { eventName: 'Music Fiesta', ticketsSold: 280 },
  ];

  return (
    <div className="bg-[#171B27] p-6 rounded-lg shadow-lg">
      <h2 className="text-xl text-gray-200 mb-4">Top Events</h2>
      <table className="w-full text-left text-gray-300">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-3">Event Name</th>
            <th className="p-3">Tickets Sold</th>
          </tr>
        </thead>
        <tbody>
          {topEvents.map((event, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-3">{event.eventName}</td>
              <td className="p-3">{event.ticketsSold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopEventsTable;
