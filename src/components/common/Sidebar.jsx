import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FaUsers } from 'react-icons/fa';
import { FaList } from "react-icons/fa";
import { IoSettings } from 'react-icons/io5';
import { BiError } from 'react-icons/bi';
import { NavLink, useLocation } from 'react-router-dom';

const data = [
  {
    title: 'Dashboard',
    icon: <RxDashboard />,
    route: '/dashboard',
  },
  {
    title: 'Users',
    icon: <FaUsers />,
    route: '/users',
  },
  {
    title: 'Data',
    data: [
      {
        title: 'Genre',
        icon: <FaList />,
        route: '/data/genre',
      },
      {
        title: 'Categories',
        icon: <FaList />,
        route: '/data/categories',
      },
      {
        title: 'Locations',
        icon: <FaList />,
        route: '/data/locations',
      },
    ],
  },
  {
    title: 'Settings',
    icon: <IoSettings />,
    route: '/settings',
  },
  {
    title: 'Error Logs',
    icon: <BiError />,
    route: '/error-logs',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  return (
    <div className='h-screen bg-[#222738] border-r border-[#606161]'>
      <div className='h-[70px] text-white text-lg flex items-center justify-center border-b border-[#606161]'>
        <p>Eventify Admin</p>
      </div>
      <ul className='text-white p-4'>
        {data.map((item, index) => (
          <li key={index} className='mb-2'>
            <NavLink to={item.route} className={`flex items-center gap-2 text-[#8A92A6] p-2 rounded-sm cursor-pointer ${path === item.route ? 'bg-[#3A57E8] text-white hover:text-white' : 'hover:text-[#3A57E8]'}`} >
              <div className='text-[22px]'>{item.icon}</div>
              <span>{item.title}</span>
            </NavLink>
            {/* If the item has sub-items, render them here */}
            {item.data && (
              <ul className='ml-6 mt-2'>
                {item.data.map((subItem, subIndex) => (
                  <li key={subIndex} className='mb-2'>
                    <NavLink to={subItem.route} className={`flex items-center gap-2 text-[#8A92A6] p-2 rounded-sm cursor-pointer ${path === subItem.route ? 'bg-[#3A57E8] text-white hover:text-white' : 'hover:text-[#3A57E8]'}`} >
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </NavLink>
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
