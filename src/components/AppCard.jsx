import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/app/${app.id}`)}
      className="bg-white p-4 rounded-xl border hover:shadow-md cursor-pointer transition"
    >
      <img src={app.image} className="w-full h-40 object-contain rounded-lg bg-gray-50 mb-4" alt={app.title} />
      <h3 className="font-bold truncate">{app.title}</h3>
      <div className="flex justify-between mt-3">
        <span className="text-emerald-600 font-bold text-sm">⬇ {app.downloads / 1000000}M</span>
        <span className="text-orange-500 font-bold text-sm">★ {app.ratingAvg}</span>
      </div>
    </div>
  );
};

export default AppCard;