import React from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar Section */}
      <div className='w-[300px] h-screen overflow-y-auto'>
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className='flex-1 flex flex-col h-screen overflow-y-auto'>
        <Navbar />
        <div className='flex-1 overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
