import Header from "../components/Header";
import Footer from '../components/Footer';
import AuthProvider from '../provider/AuthProvider.jsx';

const HomePage = () => {
    return (
        <div>
            <AuthProvider>
                <Header />
            </AuthProvider>
            <div>

            </div>
            <Footer />
        </div>
    );
}

export default HomePage;