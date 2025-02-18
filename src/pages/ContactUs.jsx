import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div className="bg-gray-100 text-black py-12 w-11/12 mx-auto">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center mb-6">
                    Contact Us
                </h1>
                <p className="text-lg text-center text-gray-900 mb-10">
                    We're here to assist you! Reach out to us anytime, and we’ll get back
                    to you as soon as possible.
                </p>

                {/* Contact Form and Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">
                            Send Us a Message
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-800 mb-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800 mb-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-800 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <Link
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition btn border-none duration-300"
                            >
                                Send Message
                            </Link>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div id="contact-us my-10">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-900 mb-6">
                            Have questions or need support? Feel free to contact us using the
                            details below.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold">
                                    📍 Address
                                </h3>
                                <p className="text-gray-900">
                                    123 Sport Avenue, Athletics City, World 2023
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    📞 Phone
                                </h3>
                                <p className="text-gray-900">+1 (234) 567-890</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    ✉️ Email
                                </h3>
                                <p className="text-gray-900">support@sportkek.com</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    🌐 Social Media
                                </h3>
                                <div className="mx-5 mt-2">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline block"
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline block"
                                    >
                                        Twitter
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline block"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
