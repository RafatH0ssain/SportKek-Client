import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    return (
        <div className="pb-10 bg-white p-5 text-black">
            <div className="navbar bg-white pb-5">
                <div className="flex-1">
                    <a className="lg:text-6xl md:text-4xl text-2xl md:font-extrabold font-bold">SportKek</a>
                </div>
                <div className="flex-none w-1/6 justify-around items-center">
                    <div className="indicator">
                        <Link to={"/myList"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="w-3/4 login flex justify-around items-center">
                        {
                            user && user?.email ?
                                <div className="px-5">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={user.name} className="w-10 h-10 rounded-full" />
                                    <p>{user.displayName}</p>
                                </div> :
                                <img src="https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg" alt="Dummy User Picture" className="w-10 h-10 rounded-full" />
                        }
                        {user && user?.email ? (
                            <button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button>
                        ) : (
                            <Link to="/auth/login" className="btn bg-black text-white rounded-xl">Login</Link>
                        )}
                    </div>
                </div>
            </div>
            <hr class="border-t-2 border-black" />
            <div className="menu menu-horizontal bg-white w-full flex justify-around">
                <Link className='w-1/6 hover:bg-base-300 border-black border-2 h-10 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l font-bold py-6' to={"/"}><a>Home</a></Link>
                <Link className='w-1/6 hover:bg-base-300 h-10 border-black border-2 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l font-bold py-6' to={'/equipment'}><a>All Equipment</a></Link>
                <Link className='w-1/6 hover:bg-base-300 border-black border-2 h-10 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l font-bold py-6' to={'/addequipment'}><a>Add Equipment</a></Link>
            </div>
            <hr class="border-t-2 border-black" />
        </div>
    );
}
export default Header;