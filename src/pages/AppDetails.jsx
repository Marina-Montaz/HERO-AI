import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import toast from 'react-hot-toast';
import appsData from '../apps.json';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find(a => a.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setIsInstalled(installed.some(item => item.id === app?.id));
  }, [app]);

  if (!app) return <div className="text-center py-20 text-2xl font-bold">App Not Found</div>;

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem('installedApps') || '[]');
    localStorage.setItem('installedApps', JSON.stringify([...installed, app]));
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-fadeIn">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <img src={app.image} alt={app.title} className="w-48 h-48 rounded-3xl shadow-lg object-cover" />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-800">{app.title}</h1>
          <p className="text-violet-600 font-medium text-lg mb-6">Developed by {app.companyName}</p>
          
          <div className="flex gap-10 mb-8">
            <div className="text-center">
              <img src={downloadIcon} className="w-6 mx-auto mb-2" alt="downloads" />
              <p className="font-bold text-xl">{app.downloads / 1000000}M</p>
              <p className="text-xs text-gray-500 uppercase">Downloads</p>
            </div>
            <div className="text-center">
              <img src={ratingIcon} className="w-6 mx-auto mb-2" alt="rating" />
              <p className="font-bold text-xl">{app.ratingAvg}</p>
              <p className="text-xs text-gray-500 uppercase">Avg Rating</p>
            </div>
            <div className="text-center">
              <img src={reviewIcon} className="w-6 mx-auto mb-2" alt="reviews" />
              <p className="font-bold text-xl">{app.reviews / 1000}K</p>
              <p className="text-xs text-gray-500 uppercase">Reviews</p>
            </div>
          </div>

          <button 
            disabled={isInstalled}
            onClick={handleInstall}
            className={`px-8 py-3 rounded-xl font-bold transition-all shadow-md ${
              isInstalled ? 'bg-gray-200 text-gray-500' : 'bg-emerald-500 hover:bg-emerald-600 text-white'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 border-b pb-2">Ratings</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={[...app.ratings].reverse()}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={60} axisLine={false} tickLine={false} />
              <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                {app.ratings.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#f97316" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="text-slate-600 leading-relaxed">
        <h3 className="text-xl font-bold mb-4 text-slate-800">Description</h3>
        <p>{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;