import Header from "../components/Header";
import Footer from '../components/Footer';
import AuthProvider from '../provider/AuthProvider.jsx';

const HomePage = () => {
    return (
        <AuthProvider>
            <div>
                <Header />
                <div>
                    {/* Slider */}


                    {/* Product Section */}

                    {/* Sports CAtegories */}
                </div>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default HomePage;