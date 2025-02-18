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
        <div className="min-h-screen bg-white text-black p-8">
            <Header />
            <div className="max-w-5xl mx-auto my-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src={`${equipment.image}`}
                        alt={equipment.itemName}
                        className="w-full md:w-1/2 rounded-lg shadow-lg bg-white"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4">{equipment.itemName}</h2>
                        <p className="text-gray-400"><strong>Category:</strong> {equipment.categoryName}</p>
                        <p className="text-gray-400"><strong>Price:</strong> ${equipment.price}</p>
                        <p className="text-gray-400"><strong>Rating:</strong> {equipment.rating} ⭐</p>
                        <p className="text-gray-400"><strong>Description:</strong> {equipment.description}</p>
                        <p className="text-gray-400"><strong>Customization:</strong> {equipment.customization}</p>
                        <p className="text-gray-400"><strong>Processing Time:</strong> {equipment.processingTime}</p>
                        <p className="text-gray-400"><strong>Stock Status:</strong> {equipment.stockStatus > 0 ? `${equipment.stockStatus} in stock` : "Out of stock"}</p>
                        <p className="text-gray-400"><strong>Added by:</strong> {equipment.userName} (<a href={`mailto:${equipment.userEmail}`} className="text-blue-400 hover:underline">{equipment.userEmail}</a>)</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 rounded-lg font-semibold text-white shadow-md transition">
                        Add to Cart
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EquipmentDetails;
