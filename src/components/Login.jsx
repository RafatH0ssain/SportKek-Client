import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for toast notifications

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // This prevents the default form submit action (page reload)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                setError({ ...error, login: errorCode });

                // Show toast if login fails
                toast.error("Incorrect email or password. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="mt-6 min-h-screen flex justify-center items-center bg-white text-black">
            <div className="card bg-gray-400 w-full max-w-lg mx-auto shrink-0 rounded-none p-10">
                <h2 className="font-bold text-center text-3xl pt-5">Login your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                        {
                            error.login && (
                                <label className="label text-sm text-red-600">
                                    {error.login}
                                </label>
                            )
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-success text-white rounded-xl border-none hover:bg-black">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Don't Have An Account? <Link className="text-red-500" to="/auth/register">Register</Link></p>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}

export default Login;