import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12" id="about-us">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h1 className="text-4xl font-extrabold text-center text-black mb-6">
                    About Us
                </h1>
                <p className="text-lg text-center text-gray-700 mb-10">
                    Welcome to <span className="font-semibold">SportKek</span> – Your
                    one-stop online store for all sports enthusiasts!
                </p>

                {/* Mission and Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Mission */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            At <span className="font-semibold">SportKek</span>, we are dedicated
                            to inspiring and empowering athletes and sports enthusiasts around
                            the globe. We aim to deliver the highest quality equipment and
                            apparel, ensuring every customer can achieve their best performance.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            We envision a world where everyone has access to premium sports gear
                            and the opportunity to excel in their chosen discipline. Our goal is
                            to make quality sports equipment accessible, affordable, and
                            impactful for athletes at every level.
                        </p>
                    </div>
                </div>

                {/* About SportKek */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-bold text-black mb-4">
                        Why Choose SportKek?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Since our inception in 2023, <span className="font-semibold">SportKek</span> has
                        been committed to redefining the online sports shopping experience. We
                        offer:
                    </p>
                    <ul className="mt-6 space-y-4 text-left w-5/6 mx-auto text-gray-700">
                        <li>✅ A vast collection of premium sports accessories and apparel.</li>
                        <li>✅ Personalized customer service to meet your unique needs.</li>
                        <li>✅ Affordable pricing and exciting discounts.</li>
                        <li>✅ Fast and reliable shipping, ensuring you’re always game-ready.</li>
                        <li>✅ An easy-to-use platform tailored for athletes of all levels.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
