import React from 'react';
import appsData from '../apps.json';
import AppCard from '../components/AppCard';
import heroImg from '../assets/hero.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold mb-4">We Build <span className="text-violet-600">Productive</span> Apps</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
        
        <div className="flex justify-center gap-4 mb-12">
           <button className="border px-6 py-2 rounded-lg flex items-center gap-2 font-bold">Google Play</button>
           <button className="border px-6 py-2 rounded-lg flex items-center gap-2 font-bold">App Store</button>
        </div>

        <img src={heroImg} alt="Hero" className="mx-auto w-full max-w-md" />
      </div>

      {/* Stats Section */}
      <div className="bg-violet-600 text-white py-12 flex justify-around text-center px-4">
        <div><h2 className="text-3xl font-bold">29.6M</h2><p>Total Downloads</p></div>
        <div><h2 className="text-3xl font-bold">906K</h2><p>Total Reviews</p></div>
        <div><h2 className="text-3xl font-bold">132+</h2><p>Active Apps</p></div>
      </div>

      {/* Trending Apps */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Trending Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button 
            onClick={() => navigate('/apps')}
            className="bg-violet-600 text-white px-8 py-2 rounded-lg font-bold"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;