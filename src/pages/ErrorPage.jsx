import { useNavigate } from 'react-router-dom';
import errorImg from '../assets/error-404.png';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <img 
        src={errorImg} 
        alt="404 Error" 
        className="max-w-lg w-full mb-8 animate-float" 
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Oops, page not found!
      </h1>
      <p className="text-slate-500 text-lg mb-8 max-w-md">
        The page you are looking for is not available or has been moved.
      </p>
      <button 
        onClick={() => navigate('/')}
        className="bg-violet-500 hover:bg-violet-600 text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-violet-200"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;