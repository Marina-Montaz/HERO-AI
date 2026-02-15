import React from 'react'; // <--- ADD THIS LINE
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* ... the rest of your code is perfect ... */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-700 pb-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="HERO.IO Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-tight">HERO.IO</span>
          </Link>

          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Social Links</p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-violet-500 transition-colors">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-violet-500 transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-violet-500 transition-colors">
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-slate-400 text-sm">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;