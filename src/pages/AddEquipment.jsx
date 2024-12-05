import Header from "../components/Header";
import Footer from "../components/Footer";

const AddEquipment = () => {
    return (
        <div>
            <Header />
            <div className="bg-white">
                <form className="space-y-4 w-3/4 mx-auto py-5">
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold text-black underline">Add an Equipment:</h1>
                    <label className="input input-bordered flex items-center gap-2">
                        Image
                        <input type="url" className="grow" placeholder="Enter image URL" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Item Name
                        <input type="text" className="grow" placeholder="Enter item name" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Category Name
                        <input type="text" className="grow" placeholder="Enter category name" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Description
                        <textarea className="grow" placeholder="Enter item description"></textarea>
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Price
                        <input type="number" className="grow" placeholder="Enter price" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Rating
                        <input type="number" className="grow" placeholder="Enter rating (1-5)" min="1" max="5" step="0.1" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Customization
                        <input type="text" className="grow" placeholder="e.g., Extra grip, Hit paper" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Processing Time
                        <input type="text" className="grow" placeholder="Enter delivery time" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Stock Status
                        <input type="number" className="grow" placeholder="Enter available quantity" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        User Email
                        <input type="email" className="grow" value="user@example.com" readOnly />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        User Name
                        <input type="text" className="grow" value="John Doe" readOnly />
                    </label>

                    <button type="submit" className="btn bg-green-600 w-full text-white">
                        Submit
                    </button>
                </form>

            </div>
            <Footer />
        </div>
    );
}

export default AddEquipment;