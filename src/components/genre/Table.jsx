import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-[#222738] text-white shadow-lg rounded-md overflow-hidden">
      <table className="min-w-full table-auto border-collapse border border-[#2e2f39]">
        <thead>
          <tr className="bg-[#161824] text-gray-300">
            <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">#</th>
            <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">Genre</th>
            <th className="px-6 py-3 text-center text-sm font-semibold border-b border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`hover:bg-[#1b1e2d] transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-[#222738]' : 'bg-[#1f2230]'
              }`}
            >
              <td className="px-6 py-4 border-b border-gray-700 text-sm">{index + 1}</td>
              <td className="px-6 py-4 border-b border-gray-700 text-sm">{item.genre}</td>
              <td className="px-6 py-4 border-b border-gray-700 text-sm text-center">
                <button
                  onClick={() => onEdit(item)}
                  className="text-blue-400 hover:text-blue-500 transition duration-150 ease-in-out mr-3"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-400 hover:text-red-500 transition duration-150 ease-in-out"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
