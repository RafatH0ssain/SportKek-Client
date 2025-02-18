import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut, loading, userDetails } = useContext(AuthContext);

    return (
        <div className="pb-10 bg-gray-100 px-5 text-black">
            <div className="navbar bg-gray-100 py-8 flex justify-between">
                <Link className="lg:text-6xl md:text-4xl text-2xl md:font-extrabold font-bold" to={'/'}>SportKek</Link>
                <div className="login flex">
                    {
                        user && user?.email ?
                            <div className="px-5">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={user.name} className="w-12 h-12 rounded-full" />
                                {/* <p>{user.displayName}</p> */}
                            </div> :
                            <img src="https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg" alt="Dummy User Picture" className="w-10 h-10 rounded-full" />
                    }
                    {user && user?.email ? (
                        <div className='flex flex-row gap-2'>
                            <Link to="/myList" className="btn bg-gray-600 text-white border-none rounded-xl">My List</Link>
                            <button onClick={logOut} className="btn bg-red-600 text-white border-none rounded-xl">Log Out</button>
                        </div>
                    ) : (
                        <Link to="/auth/login" className="btn bg-black text-white rounded-xl">Login</Link>
                    )}
                </div>
            </div>
            <hr className="border-t-2 border-black" />
            <div className="menu menu-horizontal bg-gray-100 w-full flex justify-around">
                <Link className='w-1/6 hover:bg-gray-200 border-black border-2 h-10 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l bg-white font-bold py-6' to={"/"}>Home</Link>
                <Link className='w-1/6 hover:bg-gray-200 h-10 border-black border-2 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l bg-white font-bold py-6' to={'/equipment'}>All Equipment</Link>
                <Link className='w-1/6 hover:bg-gray-200 border-black border-2 h-10 items-center justify-center flex rounded-xl lg:text-2xl md:text-xl text-l bg-white font-bold py-6' to={'/addequipment'}>Add Equipment</Link>
            </div>
            <hr className="border-t-2 border-black" />
        </div>
    );
}
export default Header;