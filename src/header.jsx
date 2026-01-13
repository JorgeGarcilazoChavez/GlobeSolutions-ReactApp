import { PopUp, PopUpContent} from './popUp';
import { Link } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';

function Header(){
    const { isAuthed, logout } = useAuth();
    return (
        <header className="bg-blue-950 w-full text-cyan-100 font-['Google_Sans'] p-10 text-center flex items-center">
        <Link to={'/'}><div className='flex'><h1 className="text-6xl font-medium p-3 flex-1 justify-self-center">Globe Solutions</h1><i className='bx text-7xl bx-light-bulb'></i></div></Link>
        <div className="flex-2"></div>
        <div className="ml-auto flex-3">
            <div className="hidden md:grid grid-cols-6">
            <Link to={'/'} className='p-2 justify-self-center font-medium hover:text-cyan-900'><button>Home</button></Link>
            <Link to={'/about'} className='p-2 justify-self-center font-medium hover:text-cyan-900'><button>About Us</button></Link>
            <Link to={'/products'} className='p-2 justify-self-center font-medium hover:text-cyan-900'><button>Products</button></Link>
    
          {isAuthed && (
            <Link to={'/dashboard'} className='p-2 justify-self-center font-medium hover:text-cyan-900'>
              <button>Dashboard</button>
            </Link>
          )}
            
            <div className="p-2 justify-self-center font-medium hover:text-cyan-900"><PopUp PopUpBox={PopUpContent}>Contact Us</PopUp></div>
            {isAuthed ? (<button onClick={logout} className="justify-self-center border-2 rounded-full p-2 border-cyan-400 font-medium hover:border-pink-600 hover:bg-slate-900 hover:shadow-xl/10 shadow-pink-600 hover:text-pink-400">Logout</button>) 
            : (<Link to={'/signin'}><button className="justify-self-center border-2 rounded-full p-2 border-cyan-400 font-medium hover:border-pink-600 hover:bg-slate-900 hover:shadow-xl/10 shadow-pink-600 hover:text-pink-400">Sign in</button></Link>
          )}
            </div>
        </div>
        </header>
    );
};

export default Header 