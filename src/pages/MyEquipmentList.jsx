import Header from "../components/Header";
import Footer from '../components/Footer';
import AuthProvider, { AuthContext } from '../provider/AuthProvider.jsx';
import EquipmentCard from '../components/EquipmentCard.jsx';
import { useLoaderData } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import MyEquipmentCard from "../components/MyEquipmentCard.jsx";

const MyEquipmentList = () => {
    let loadedData;
    try {
        loadedData = useLoaderData();
    } catch (error) {
        console.error("useLoaderData error:", error);
        loadedData = { equipments: [], categories: [] };
    }

    const { user } = useContext(AuthContext);
    const [equipments, setEquipment] = useState([]);

    console.log("loadedData:", loadedData);

    useEffect(() => {
        if (loadedData?.equipments && user?.email) {
            // Filter only the logged-in user's equipment
            const userEquipments = loadedData.equipments.filter(
                (item) => item.userEmail === user.email
            );
            setEquipment(userEquipments);
        }
    }, [loadedData, user]);

    const handleDelete = (id) => {
        const updatedList = equipments.filter((equipment) => equipment._id !== id);
        setEquipment(updatedList);
    };

    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-around py-20 bg-gray-100">
                {equipments.length > 0 ? (
                    equipments.map((equipment) => (
                        <MyEquipmentCard
                            key={equipment._id}
                            equipment={equipment}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p className="mx-auto text-xl">Add a new equipment to see it here.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyEquipmentList;