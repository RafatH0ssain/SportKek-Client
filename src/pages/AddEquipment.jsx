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
            <div className="bg-gray-100 pb-10">
                <form className="space-y-6 w-11/12 md:w-3/4 mx-auto py-5" onSubmit={handleSubmit}>
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold text-black underline">
                        Add an Equipment:
                    </h1>

                    <label className="input input-bordered flex items-center gap-2 bg-white border-black">
                        Image
                        <input
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            type="text"
                            className="grow bg-white"
                            placeholder="Enter Image URL"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 bg-white border-black">
                        Item Name
                        <input
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="Enter Item Name"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 bg-white border-black">
                        Category Name
                        <input
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="Enter Category"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 bg-white border-black">
                        Description
                        <input
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            type="text"
                            className="grow"
                            placeholder="Enter Description"
                        />
                    </label>

                    <div className="flex flex-col md:flex-row justify-between gap-5">
                        <label className="input input-bordered flex items-center gap-2 bg-white w-full md:w-1/2 border-black">
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
                        <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2 bg-white border-black">
                            Processing Time
                            <input
                                name="processingTime"
                                value={formData.processingTime}
                                onChange={handleChange}
                                type="text"
                                className="grow"
                                placeholder="Enter Delivery Time"
                            />
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                        <label className="input input-bordered flex items-center gap-2 w-full md:w-1/3 bg-white border-black">
                            Price
                            <input
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                type="number"
                                className="grow"
                                placeholder="Enter Price"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full md:w-1/3 bg-white border-black">
                            Rating
                            <input
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                type="number"
                                className="grow"
                                placeholder="Enter Rating"
                                min="1"
                                max="5"
                                step="0.1"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full md:w-1/3 bg-white border-black">
                            Stock Status
                            <input
                                name="stockStatus"
                                value={formData.stockStatus}
                                onChange={handleChange}
                                type="number"
                                className="grow"
                                placeholder="Enter Available Quantity"
                            />
                        </label>
                    </div>

                    <button type="submit" className="btn text-lg md:text-xl hover:bg-green-800 bg-green-600 w-full md:w-1/6 text-white mx-auto">
                        Submit
                    </button>
                </form>

            </div>
            <Footer />
        </div>
    );
};

export default AddEquipment;
