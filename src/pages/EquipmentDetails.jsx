import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EquipmentDetails = () => {
    const { id } = useParams(); // Get the equipment ID from URL
    const [equipment, setEquipment] = useState(null);

    useEffect(() => {
        const fetchEquipmentDetails = async () => {
            try {
                const response = await fetch(`https://sport-kek-server.vercel.app/equipment/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch equipment details");
                }
                const data = await response.json();
                setEquipment(data);
            } catch (error) {
                console.error("Error fetching equipment details:", error);
            }
        };

        fetchEquipmentDetails();
    }, [id]);

    if (!equipment) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <Header />
            <div className="md:max-w-6xl max-w-sm mx-auto my-10 mb-20 flex flex-col md:flex-row items-center gap-8">
                <img
                    src={`${equipment.image}`}
                    alt={equipment.itemName}
                    className="w-full md:w-1/2 rounded-lg shadow-xl bg-gray-100"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">{equipment.itemName}</h2>
                    <p className="text-gray-800"><strong>Category:</strong> {equipment.categoryName}</p>
                    <p className="text-gray-800"><strong>Price:</strong> ${equipment.price}</p>
                    <p className="text-gray-800"><strong>Rating:</strong> {equipment.rating} ⭐</p>
                    <p className="text-gray-800"><strong>Description:</strong> {equipment.description}</p>
                    <p className="text-gray-800"><strong>Customization:</strong> {equipment.customization}</p>
                    <p className="text-gray-800"><strong>Processing Time:</strong> {equipment.processingTime}</p>
                    <p className="text-gray-800"><strong>Stock Status:</strong> {equipment.stockStatus > 0 ? `${equipment.stockStatus} in stock` : "Out of stock"}</p>
                    <p className="text-gray-800"><strong>Added by:</strong> {equipment.userName} (<a href={`mailto:${equipment.userEmail}`} className="text-blue-400 hover:underline">{equipment.userEmail}</a>)</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EquipmentDetails;
