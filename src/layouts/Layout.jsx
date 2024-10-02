import React from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

const Layout = () => {
  return (
    <div className='flex'>
      <div className='w-[300px]'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
