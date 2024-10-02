import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiNotification3Fill } from 'react-icons/ri';
import { IoMail } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className='bg-[#222738] h-[70px] flex items-center justify-between px-7 '>
      {/* search bar */}
      <div className='bg-[#222738] flex items-center gap-2 rounded-sm p-2 text-white text-[14px]  border border-[#5e5e5f]'>
        <FiSearch className='text-lg' />
        <input
          type='text'
          placeholder='Search...'
          className='bg-[#222738] focus:outline-none'
        />
      </div>

      <div className='flex items-center gap-7'>
        <RiNotification3Fill className='text-2xl text-[#8A92A6]' />
        <IoMail className='text-2xl text-[#8A92A6]' />
        <div className='flex gap-2'>
          <img
            src='https://as1.ftcdn.net/v2/jpg/03/67/46/48/1000_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg'
            alt=''
            className='w-[45px] h-[45px] rounded-full object-cover'
          />
          <div>
            <p className='text-white text-sm'>John Doe</p>
            <p className='text-slate-500 text-[12px]'>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
