import Header from "../components/Header";
import Footer from '../components/Footer';
import AuthProvider from '../provider/AuthProvider.jsx';
import EquipmentCard from '../components/EquipmentCard.jsx';
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
    const loadedEquipment = useLoaderData();
    const [equipments, setEquipment] = useState(loadedEquipment);

    return (
        <AuthProvider>
            <div>
                <Header />
                <div>
                    {/* Slider */}

                    {/* About Us */}

                    {/* Product Section */}
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

                    {/* Contact Us */}
                </div>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default HomePage;