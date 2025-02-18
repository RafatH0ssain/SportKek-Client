import { Link } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const Footer = () => {
    return (
        <div className="text-black bg-gray-300">
            <hr className="border-gray-400" />
            <aside className="text-center m-auto p-4">
                <p>&copy;2025 Rafat Hossain. Some rights reserved.</p>
            </aside>
        </div>
    );
}

export default Footer;