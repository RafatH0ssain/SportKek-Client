import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const EquipmentCard = ({ equipment }) => {

    const [equipments, setEquipment] = useState(equipment);

    useEffect(() => {
        setEquipment(equipment);
    }, [equipment]);

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
        userEmail,
        userName
    } = equipment;

    return (
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover bg-white" src={image} alt={itemName} />
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
                <Link className="text-sm text-gray-800" to={`/equipment/${equipment._id}`}>Learn More</Link>
            </div>
            <div className="px-6 pt-4 pb-2">
                <p className="text-gray-500 text-sm">Posted by: {userName}</p>
                <p className="text-gray-500 text-sm">Contact: {userEmail}</p>
            </div>
        </div>
    );
};

export default EquipmentCard;
