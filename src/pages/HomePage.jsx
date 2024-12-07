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
        <div>
            <Header />
            <div>
                {/* Slider */}
                <div className="flex w-full bg-white">
                    <div className="carousel carousel-center rounded-box w-11/12 mx-auto">
                        <div className="carousel-item">
                            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                alt="Pizza" />
                        </div>
                    </div>
                </div>

                {/* About Us */}
                <AboutUs />

                {/* Product Section */}
                <h2 className="font-extrabold lg:text-3xl md:text-2xl sm:text-xl px-10 py-5 underline">Popular Now:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-around py-10">
                    {equipments.slice(0, 6).map((equipment) => (
                        <EquipmentCard
                            key={equipment._id}
                            equipment={equipment}
                            equipments={equipments}
                            setEquipment={setEquipment}
                        />
                    ))}
                </div>

                {/* Sports CAtegories */}
                <div className="sports-categories py-10 px-4">
                    <h2 className="text-2xl font-bold text-left mb-6">Sports Equipment Categories Currently Available At Our Shop:</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-around">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 hover:bg-gray-200 transition rounded-lg shadow-md text-center p-4"
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