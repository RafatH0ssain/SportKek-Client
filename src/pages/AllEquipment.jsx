import Header from "../components/Header";
import Footer from '../components/Footer';
import AuthProvider from '../provider/AuthProvider.jsx';
import EquipmentCard from '../components/EquipmentCard.jsx';
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

const AllEquipment = () => {
    let loadedData;
    try {
        loadedData = useLoaderData();
    } catch (error) {
        console.error("useLoaderData error:", error);
        loadedData = { equipments: [], categories: [] };
    }

    const [equipments, setEquipment] = useState([]);

    // Ensure we handle data properly after the component mounts
    useEffect(() => {
        if (loadedData?.equipments) {
            setEquipment(loadedData.equipments);
        }
    }, [loadedData]);

    return (
        <AuthProvider>
            <div>
                <Header />
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-around py-10">
                    {equipments.length > 0 ? (
                        equipments.map((equipment) => (
                            <EquipmentCard
                                key={equipment._id}
                                equipment={equipment}
                                equipments={equipments}
                                setEquipment={setEquipment}
                            />
                        ))
                    ) : (
                        <p>No equipment available at the moment.</p>
                    )}
                </div>
                <Footer />
            </div>
        </AuthProvider>
    );
};

export default AllEquipment;
