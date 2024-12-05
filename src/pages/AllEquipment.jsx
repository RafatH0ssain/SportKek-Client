import Header from "../components/Header";
import Footer from '../components/Footer';
import AuthProvider from '../provider/AuthProvider.jsx';
import { useLoaderData } from "react-router-dom";

const AllEquipment = () => {
    // const {data} = useLoaderData();

    return (
        <AuthProvider>
            <div>
                <Header />
                <div>
                    {
                        // data.map((singleNews) => <NewsCard key={singleNews._id} news={singleNews} />)
                    }
                </div>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default AllEquipment;