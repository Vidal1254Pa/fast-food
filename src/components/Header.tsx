import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <header className="bg-gray-900 text-white py-4 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="text-3xl font-bold text-yellow-500">Burger Craft</Link>
                <div className="flex space-x-6">
                    <Link to="/productos" className="hover:text-yellow-500 transition">Productos</Link>
                    <Link to="/carrito" className="hover:text-yellow-500 transition relative">
                        Carrito
                        <span className="bg-yellow-500 text-gray-900 rounded-full px-2 py-0.5 ml-2 text-sm font-bold">{totalQuantity}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
