import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className='py-4 bg-slate-800 w-screen px-4 md:px-12 flex justify-between items-center'>
      <Link to='/' className='text-2xl font-bold text-white'>News App</Link>
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`flex-col md:flex md:flex-row md:items-center gap-4 md:gap-10 text-white font-semibold absolute md:static top-16 left-0 w-full md:w-auto bg-slate-800 md:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <Link to='/business' className='block md:inline-block px-4 py-2 hover:cursor-pointer hover:scale-105'>Business</Link>
        <Link to='/technology' className='block md:inline-block px-4 py-2 hover:cursor-pointer hover:scale-105'>Technology</Link>
        <Link to='/entertainment' className='block md:inline-block px-4 py-2 hover:cursor-pointer hover:scale-105'>Entertainment</Link>
        <Link to='/sports' className='block md:inline-block px-4 py-2 hover:cursor-pointer hover:scale-105'>Sports</Link>
        <Link to='/politics' className='block md:inline-block px-4 py-2 hover:cursor-pointer hover:scale-105'>Politics</Link>
      </div>
    </div>
  );
};

export default Navbar;