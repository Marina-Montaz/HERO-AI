import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-black tracking-tighter text-slate-800">
            HERO<span className="text-violet-600">.AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
          <NavLink to="/" className={({isActive}) => isActive ? "text-violet-600" : "hover:text-violet-500"}>Home</NavLink>
          <NavLink to="/apps" className={({isActive}) => isActive ? "text-violet-600" : "hover:text-violet-500"}>All Apps</NavLink>
          <NavLink to="/installation" className={({isActive}) => isActive ? "text-violet-600" : "hover:text-violet-500"}>Installation</NavLink>
        </div>

        {/* Action Button */}
        <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-slate-800 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
};

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default Navbar;