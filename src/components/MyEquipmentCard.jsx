import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MyEquipmentCard = ({ equipment, onDelete }) => {
    const {
        _id,
        image,
        itemName,
        categoryName,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
    } = equipment;

    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`https://sport-kek-server.vercel.app/equipment/${_id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete the item");
                }
                return response.json();
            })
            .then(() => {
                onDelete(_id); // Notify the parent about the deletion
                setModalOpen(false);
            })
            .catch((error) => console.error("Error deleting equipment:", error));
    };

    return (
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover" src={image} alt={itemName} />
            <div className="px-6 py-4">
                <div className="font-bold md:text-2xl text-xl mb-2 text-center">
                    <h2 className="text-center">{itemName}</h2>
                </div>
                <p className="text-gray-700 text-base mb-2">{description}</p>
                <p className="text-gray-600">Category: {categoryName}</p>
                <p className="text-gray-600">Price: ${price}</p>
                <p className="text-gray-600">Rating: ⭐{rating}</p>
                <p className="text-gray-600">Customization: {customization}</p>
                <p className="text-gray-600">Processing Time: {processingTime}</p>
                <p className={`text-sm ${stockStatus > 0 ? "text-green-500" : "text-red-500"}`}>
                    Stock Status: {stockStatus > 0 ? `${stockStatus} available` : "Out of Stock"}
                </p>
            </div>
            <div className="px-6 py-4 flex justify-between">
                <button
                    onClick={() => navigate(`/update/${_id}`)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                >
                    Update
                </button>
                <button
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700 transition"
                >
                    Delete
                </button>
            </div>

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
                        <p>Are you sure you want to delete "{itemName}"?</p>
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md mr-2 hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700 transition"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyEquipmentCard;
