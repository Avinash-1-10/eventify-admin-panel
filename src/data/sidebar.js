import { RxDashboard } from 'react-icons/rx';
import { FaUsers } from 'react-icons/fa';
import { FaList } from "react-icons/fa";
import { IoSettings } from 'react-icons/io5';
import { BiError } from 'react-icons/bi';

const sidebarData = [
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

export default sidebarData;

