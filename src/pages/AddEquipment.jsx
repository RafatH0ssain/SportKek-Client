import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";

const AddEquipment = () => {
    const { userDetails } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        categoryName: "",
        description: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        userEmail: userDetails?.userEmail || "",
        userName: userDetails?.userName || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://sport-kek-server.vercel.app/addEquipment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                setFormData({
                    image: "",
                    itemName: "",
                    categoryName: "",
                    description: "",
                    price: "",
                    rating: "",
                    customization: "",
                    processingTime: "",
                    stockStatus: "",
                    userEmail: "",
                    userName: "",
                });
            } else {
                alert("Error: " + result.error);
            }
        } catch (error) {
            alert("Error submitting the form: " + error.message);
            console.error(error);
        }
    };

    return (
        <div>
            <Header />
            <div className="bg-white">
                <form className="space-y-4 w-3/4 mx-auto py-5" onSubmit={handleSubmit}>
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold text-black underline">
                        Add an Equipment:
                    </h1>

                    <label className="input input-bordered flex items-center gap-2">
                        Image
                        <input
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="Enter image URL"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Item Name
                        <input
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="Enter item name"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Category Name
                        <input
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="Enter category name"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Description
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="grow"
                            placeholder="Enter item description"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Price
                        <input
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            type="number"
                            className="grow"
                            placeholder="Enter price"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Rating
                        <input
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            type="number"
                            className="grow"
                            placeholder="Enter rating"
                            min="1"
                            max="5"
                            step="0.1"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Customization
                        <input
                            name="customization"
                            value={formData.customization}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="e.g., Extra grip, Hit paper"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Processing Time
                        <input
                            name="processingTime"
                            value={formData.processingTime}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="Enter delivery time"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Stock Status
                        <input
                            name="stockStatus"
                            value={formData.stockStatus}
                            onChange={handleChange}
                            type="number"
                            className="grow"
                            placeholder="Enter available quantity"
                        />
                    </label>

                    <button type="submit" className="btn bg-green-600 w-full text-white">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddEquipment;
