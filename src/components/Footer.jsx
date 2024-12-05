import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-black">
            <hr class="border-t-2 border-black" />
            <footer className="footer bg-white p-10 w-full flex flex-row justify-around">
                <nav className="flex flex-col items-center justify-center w-1/4">
                    <h6 className="footer-title">SportKek</h6>
                    <Link><a className="link link-hover">All Items</a></Link>
                    <Link><a className="link link-hover">Cart</a></Link>
                    <Link><a className="link link-hover">Account</a></Link>
                </nav>
                <nav className="flex flex-col items-center justify-center w-1/4">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">XXXXXXTBD</a>
                </nav>
                <nav className="flex flex-col items-center justify-center w-1/4">
                    <h6 className="footer-title">Socials</h6>
                    <Link to={"https://x.com"} target="_blank"><a className="link link-hover">Twitter</a></Link>
                    <Link to={"https://facebook.com"} target="_blank"><a className="link link-hover">Facebook</a></Link>
                    <Link to={"https://instagram.com"} target="_blank"><a className="link link-hover">Instagram</a></Link>
                </nav>
            </footer>
            <footer className="footer bg-white text-base-content border-base-300 border-t px-10 py-4 text-center">
                <aside className="grid-flow-col text-center m-auto">
                    <p>&copy;2024 Rafat Hossain. Some rights reserved.</p>
                </aside>
            </footer>
            <hr class="border-t-2 border-black" />
        </div>
    );
}

export default Footer;