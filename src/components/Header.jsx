import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut, loading, userDetails } = useContext(AuthContext);

    return (
        <div className="pb-10 bg-gray-100 px-4 md:px-10 text-black">
            <div className="navbar bg-gray-100 py-6 md:py-8 flex justify-between items-center">
                <Link className="text-3xl md:text-5xl font-extrabold" to={'/'}>SportKek</Link>
                <div className="login flex items-center">
                    {
                        user && user?.email ?
                            <div className="px-2 md:px-5">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={user.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                            </div> :
                            <img src="https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg" alt="Dummy User Picture" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                    }
                    {user && user?.email ? (
                        <div className='flex flex-row gap-2 md:gap-4 text-white'>
                            <Link to="/myList" className="md:btn p-2 bg-gray-600 md:bg-gray-600 md:text-white border-none md:rounded-xl rounded-lg text-sm md:text-base">My List</Link>
                            <button onClick={logOut} className="md:btn p-2 bg-red-600 md:bg-red-600 md:text-white border-none md:rounded-xl rounded-lg text-sm md:text-base">Log Out</button>
                        </div>
                    ) : (
                        <Link to="/auth/login" className="btn bg-black text-white rounded-xl text-sm md:text-base">Login</Link>
                    )}
                </div>
            </div>
            <hr className="border-t-2 border-black" />
            <div className="menu menu-horizontal bg-gray-100 w-full flex justify-evenly md:justify-around py-4">
                <Link className='w-1/4 md:w-1/6 hover:bg-gray-200 border-black border-2 h-10 items-center justify-center flex md:rounded-xl rounded-md text-sm md:text-lg bg-white font-bold py-4 md:py-6' to={"/"}>Home</Link>
                <Link className='w-1/4 md:w-1/6 hover:bg-gray-200 h-10 border-black border-2 items-center justify-center flex md:rounded-xl rounded-md text-sm md:text-lg bg-white font-bold py-4 md:py-6' to={'/equipment'}>All Equipment</Link>
                <Link className='w-1/4 md:w-1/6 hover:bg-gray-200 border-black border-2 h-10 items-center justify-center flex md:rounded-xl rounded-md text-sm md:text-lg bg-white font-bold py-4 md:py-6' to={'/addequipment'}>Add Equipment</Link>
            </div>
            <hr className="border-t-2 border-black" />
        </div>
    );
}
export default Header;