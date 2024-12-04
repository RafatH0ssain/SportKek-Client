import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
    return (
        <div className="p-5 font-poppins bg-gray-300">
            <header className="*:bg-inherit">
                <Header/>
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;