import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white text-center px-4">
            <div className="bg-white bg-opacity-85 text-green-600 rounded-2xl px-8 py-9">
                <h1 className="text-5xl font-bold mb-4">Plant Haven</h1>
                <p className="text-lg max-w-xl mb-8">
                    Welcome to Plant Haven, your online store for a wide variety of indoor and outdoor plants. Our
                    plants are carefully selected to bring the best benefits to your home, adding a touch of nature to
                    your space. Explore our collection and find the perfect plant for you!
                </p>
                <Link to="/products">
                    <button
                        className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300">Get
                        Started
                    </button>
                </Link>
            </div>
        </div>
    );
}
