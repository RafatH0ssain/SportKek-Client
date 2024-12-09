import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UpdateEquipment = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [equipment, setEquipment] = useState(null);
    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        categoryName: "",
        description: "",
        price: 0,
        rating: 0,
        customization: "",
        processingTime: "",
        stockStatus: 0,
    });

    // Fetch the existing equipment data
    useEffect(() => {
        fetch(`https://sport-kek-server.vercel.app/equipment/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch equipment data");
                }
                return response.json();
            })
            .then((data) => {
                setEquipment(data);
                setFormData({
                    image: data.image,
                    itemName: data.itemName,
                    categoryName: data.categoryName,
                    description: data.description,
                    price: data.price,
                    rating: data.rating,
                    customization: data.customization,
                    processingTime: data.processingTime,
                    stockStatus: data.stockStatus,
                });
            })
            .catch((error) => console.error("Error fetching equipment data:", error));
    }, [id]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "price" || name === "rating" || name === "stockStatus" ? parseFloat(value) : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://sport-kek-server.vercel.app/equipment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update equipment");
                }
                return response.json();
            })
            .then(() => {
                alert("Equipment updated successfully");
                navigate("/myList"); // Redirect to the list page
            })
            .catch((error) => console.error("Error updating equipment:", error));
    };

    if (!equipment) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className="min-h-screen bg-white text-white flex flex-col items-center py-10">

                <h1 className="text-2xl font-bold mb-6">Update Equipment</h1>
                <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-400">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Item Name</label>
                        <input
                            type="text"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Category</label>
                        <input
                            type="text"
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Price (USD)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Customization</label>
                        <input
                            type="text"
                            name="customization"
                            value={formData.customization}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
                            value={formData.processingTime}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Stock Status</label>
                        <input
                            type="number"
                            name="stockStatus"
                            value={formData.stockStatus}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/myList")}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-700 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>

            </div>
            <Footer />
        </div>
    );
};

export default UpdateEquipment;
