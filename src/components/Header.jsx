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
                <div className="flex-none w-1/4 justify-around items-center">
                    <div className="w-5/6 login flex justify-around items-center">
                        {
                            user && user?.email ?
                                <div className="px-5">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={user.name} className="w-10 h-10 rounded-full" />
                                    <p>{user.displayName}</p>
                                </div> :
                                <img src="https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg" alt="Dummy User Picture" className="w-10 h-10 rounded-full" />
                        }
                        {user && user?.email ? (
                            <div className='flex flex-row gap-2'>
                                <Link to="/myList" className="btn bg-blue-700 border-none rounded-xl">My List</Link>
                                <button onClick={logOut} className="btn btn-error border-none rounded-xl">Log Out</button>
                            </div>                            
                        ) : (
                            <Link to="/auth/login" className="btn bg-black text-white rounded-xl">Login</Link>
                        )}
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-black" />
            <div className="menu menu-horizontal bg-white w-full flex justify-around">
                <Link className='w-1/6 hover:bg-blue-600 border-black hover:border-none border-2 h-10 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l font-bold py-6' to={"/"}><a>Home</a></Link>
                <Link className='w-1/6 hover:bg-blue-600 h-10 hover:border-none border-black border-2 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l font-bold py-6' to={'/equipment'}><a>All Equipment</a></Link>
                <Link className='w-1/6 hover:bg-blue-600 hover:border-none border-black border-2 h-10 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l font-bold py-6' to={'/addequipment'}><a>Add Equipment</a></Link>
            </div>
            <hr className="border-t-2 border-black" />
        </div>
    );
}
export default Header;