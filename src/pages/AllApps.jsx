import React, { useState } from 'react';
import appsData from '../apps.json';
import { useNavigate } from 'react-router-dom';

const AllApps = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Live Search Logic (Case-insensitive)
  const filteredApps = appsData.filter(app => 
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold">({filteredApps.length}) Apps Found</h2>
        <input 
          type="text"
          placeholder="Search Apps..."
          className="border p-2 rounded-lg w-64 focus:ring-2 focus:ring-indigo-500 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map(app => (
            <div 
              key={app.id} 
              onClick={() => navigate(`/app/${app.id}`)}
              className="bg-white p-4 rounded-2xl border hover:shadow-lg cursor-pointer transition"
            >
              <img src={app.image} className="w-full h-40 object-contain mb-4 bg-slate-100 rounded-lg" />
              <h3 className="font-bold truncate">{app.title}</h3>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-emerald-600 font-bold">⬇ {app.downloads / 1000000}M</span>
                <span className="text-orange-500 font-bold">★ {app.ratingAvg}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl">
           <img src="/assets/notfound.png" className="mx-auto w-40 mb-4" />
           <p className="text-gray-500 font-bold">No App Found</p>
        </div>
      )}
    </div>
  );
};
export default AllApps;