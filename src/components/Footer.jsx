import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-8 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
          <img src="./logo.webp" alt="PS5 Logo" className="w-24 sm:w-32 md:w-40 h-auto" />
          <span className="font-[PhatBoy] text-xl sm:text-2xl md:text-3xl tracking-wide text-center md:text-left">PlayStation 5</span>
        </div>
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-base sm:text-lg font-semibold w-full md:w-auto items-center justify-center md:justify-end">
          <button className="cursor-pointer hover:text-blue-700 transition-colors bg-transparent border-none" onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}>Home</button>
          <button className="cursor-pointer hover:text-blue-700 transition-colors bg-transparent border-none" onClick={() => document.getElementById('games')?.scrollIntoView({behavior: 'smooth'})}>Games</button>
          <button className="cursor-pointer hover:text-blue-700 transition-colors bg-transparent border-none" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>About</button>
          <button className="cursor-pointer hover:text-blue-700 transition-colors bg-transparent border-none" onClick={() => navigate('/earn-more')}>Learn More</button>
        </nav>
      </div>
      <div className="mt-8 text-center text-xs sm:text-sm text-blue-200 px-2">
        &copy; {new Date().getFullYear()} PlayStation 5. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;