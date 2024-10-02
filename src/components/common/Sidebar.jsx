import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FaUsers } from 'react-icons/fa';
import { FaList } from "react-icons/fa";
import { IoSettings } from 'react-icons/io5';
import { BiError } from 'react-icons/bi';

const data = [
  {
    title: 'Dashboard',
    icon: <RxDashboard />,
  },
  {
    title: 'Users',
    icon: <FaUsers />,
  },
  {
    title: 'Data',
    data: [
      {
        title: 'Genre',
        icon: <FaList />,
      },
      {
        title: 'Categories',
        icon: <FaList />,
      },
      {
        title: 'Locations',
        icon: <FaList />,
      },
    ],
  },
  {
    title: 'Settings',
    icon: <IoSettings />,
  },
  {
    title: 'Error Logs',
    icon: <BiError />,
  },
];

const Sidebar = () => {
  return (
    <div className='h-screen bg-[#222738] border-r border-[#606161]'>
      <div className='h-[70px] text-white text-lg flex items-center justify-center border-b border-[#606161]'>
        <p>Eventify Admin</p>
      </div>
      <ul className='text-white p-4'>
        {data.map((item, index) => (
          <li key={index} className='mb-2'>
            <div className='flex items-center gap-2 text-[#8A92A6] hover:bg-[#3A57E8] hover:text-white p-2 rounded-sm cursor-pointer'>
              <div className='text-[22px]'>{item.icon}</div>
              <span>{item.title}</span>
            </div>
            {/* If the item has sub-items, render them here */}
            {item.data && (
              <ul className='ml-6 mt-2'>
                {item.data.map((subItem, subIndex) => (
                  <li key={subIndex} className='mb-2'>
                    <div className='flex items-center gap-2 text-[#8A92A6] hover:bg-[#3A57E8] hover:text-white p-2 rounded-sm cursor-pointer'>
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
