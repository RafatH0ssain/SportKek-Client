import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12" id="about-us">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h1 className="text-4xl font-extrabold text-center mt-10 text-black mb-6">
                    About Us
                </h1>
                <p className="text-lg text-center text-gray-700 mb-10">
                    Welcome to <span className="font-semibold">SportKek</span> – The ultimate platform for employees to manage their inventory effortlessly!
                </p>

                {/* Mission and Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center md:w-11/12 w-full mx-auto">
                    {/* Mission */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            At <span className="font-semibold">SportKek</span>, our mission is to empower employees by providing a seamless and efficient way to track, manage, and organize their sports equipment. We aim to create a dynamic platform where employees can easily manage their inventory and stay connected with the admin team for any needs or updates.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            We envision a platform where employees can effortlessly track their items, contact the admin in real-time for support, and stay up-to-date with their sports gear. Our goal is to streamline the experience through real-time APIs, Firebase authentication, and a dynamic Node.js-based platform that caters to employees’ needs.
                        </p>
                    </div>
                </div>

                {/* About SportKek */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Why Choose SportKek?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Since our launch in 2024, <span className="font-semibold">SportKeK</span> has been designed as a dynamic platform for employees to manage their inventory, with features such as:
                    </p>
                    <ul className="mt-6 space-y-4 text-left w-5/6 mx-auto text-gray-700">
                        <li>✅ A dynamic, real-time system to track your sports equipment and items.</li>
                        <li>✅ Firebase authentication for secure and easy user login.</li>
                        <li>✅ Real-time communication with admins via our contact page.</li>
                        <li>✅ Node.js and MongoDB backend to handle data efficiently and securely.</li>
                        <li>✅ A user-friendly platform built with ReactJS and Tailwind CSS for a smooth experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;