import { useNavigate } from 'react-router-dom';
import appNotFoundImg from '../assets/App-Error.png';

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 flex flex-col items-center text-center px-4 animate-fadeIn">
      <img src={appNotFoundImg} alt="App Not Found" className="w-80 mb-6 object-contain" />
      <h2 className="text-3xl font-bold text-slate-900 mb-2 uppercase tracking-tight">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        The App you are requesting is not found on our system. Please try searching for another application.
      </p>
      <button 
        onClick={() => navigate('/apps')}
        className="bg-violet-500 hover:bg-violet-600 text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg shadow-violet-100"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;