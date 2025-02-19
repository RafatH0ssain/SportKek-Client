import Header from "../components/Header";
import Footer from '../components/Footer';
import AuthProvider from '../provider/AuthProvider.jsx';
import EquipmentCard from '../components/EquipmentCard.jsx';
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./ContactUs.jsx";

const HomePage = () => {
    let loadedEquipment;
    try {
        loadedEquipment = useLoaderData();
    } catch (error) {
        console.error("useLoaderData error:", error);
        loadedEquipment = { equipments: [], categories: [] }; // Default values if error occurs
    }

    const [equipments, setEquipment] = useState(loadedEquipment.equipments);
    const [categories, setCategories] = useState(loadedEquipment.categories);

    return (
        <div className="text-black">
            <Header />
            <div className="bg-gray-100">
                {/* Slider */}
                <div className="flex w-full bg-gray-100">
                    <div className="carousel carousel-center rounded-box mt-10 w-11/12 mx-auto">
                        <div className="carousel-item w-[300px] h-[300px]">
                            <img src="https://i.ibb.co/wL6CbGj/skates1.jpg" alt="Pizza" className="w-full h-full object-cover" />
                        </div>
                        <div className="carousel-item w-[300px] h-[300px]">
                            <img src="https://i.ibb.co/ZXHR9fg/bike-Goggles.jpg" alt="Pizza" className="w-full h-full object-cover" />
                        </div>
                        <div className="carousel-item w-[300px] h-[300px]">
                            <img src="https://i.ibb.co/b697N73/ball1.jpg" alt="Pizza" className="w-full h-full object-cover" />
                        </div>
                        <div className="carousel-item w-[300px] h-[300px]">
                            <img src="https://i.ibb.co/VLTY2TH/baseball-Bat1.jpg" alt="Pizza" className="w-full h-full object-cover" />
                        </div>
                        <div className="carousel-item w-[300px] h-[300px]">
                            <img src="https://i.ibb.co/qj3jdRg/ball4.jpg" alt="Pizza" className="w-full h-full object-cover" />
                        </div>
                        <div className="carousel-item w-[300px] h-[300px]">
                            <img src="https://i.ibb.co/pwDyghy/cricekt-Bat2.jpg" alt="Pizza" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* About Us */}
                <AboutUs />

                {/* Product Section */}
                <h2 className="font-extrabold lg:text-3xl md:text-2xl sm:text-xl md:px-16 px-4 pt-5 bg-gray-100">Popular Now:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16 px-4 justify-around py-10 bg-gray-100">
                    {equipments.slice(0, 6).map((equipment) => (
                        <EquipmentCard
                            key={equipment._id}
                            equipment={equipment}
                            equipments={equipments}
                            setEquipment={setEquipment}
                        />
                    ))}
                </div>

                {/* Sports Categories */}
                <div className="sports-categories py-10 px-4 bg-gray-100 mx-auto w-11/12">
                    <h2 className="text-2xl font-bold text-left mb-6">Categories:</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-around">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white hover:bg-gray-200 transition rounded-lg shadow-md text-center p-4"
                            >
                                <p className="text-lg font-medium text-gray-700">{category}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Contact Us */}
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;