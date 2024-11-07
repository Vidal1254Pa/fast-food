import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

export default function Header() {
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <header className="bg-green-800 text-white py-4 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="text-3xl font-bold text-green-200">Plant Haven</Link>
                <div className="flex space-x-6">
                    <Link to="/products" className="hover:text-green-300 transition items-center flex">Plants</Link>
                    <Link to="/cart" className="hover:text-green-300 transition relative flex items-center">
                        Cart
                        <span
                            className="bg-green-300 text-green-900 rounded-2xl px-2 py-0.5 ml-2 text-sm font-bold flex items-center gap-1">{totalQuantity}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                 x="0" y="0"
                                 viewBox="0 0 64 64"
                                 className="w-8 h-8"><g><path d="m57.41 23.022-39.104-4.586-1.956-4.446a2.94 2.94 0 0 0-2.68-1.75h-1.28v-1.374a.997.997 0 0 0-1-1H7.177a3.207 3.207 0 0 0 0 6.413h4.213a1.004 1.004 0 0 0 1-1V14.24h1.28a.924.924 0 0 1 .85.559l2.139 4.86s3.908 20.567 3.993 20.76a4.209 4.209 0 0 0 1.324 8.21h3.953a3.751 3.751 0 1 0 6.634 0h9.417a3.751 3.751 0 1 0 6.633 0h3.03a1 1 0 0 0-.001-2.002H21.976a2.22 2.22 0 0 1 0-4.44c8.393.002 26.54 0 35.091 0A2.93 2.93 0 0 0 60 39.269V25.936a2.938 2.938 0 0 0-2.59-2.914zM26.48 40.188h-3.142a.936.936 0 0 1-.919-.752l-1.415-7.517 5.475.288zm0-9.985-5.857-.308-1.767-9.379 7.623.894zm8.432 9.985H28.48v-7.876l6.43.338zm0-9.542-6.431-.338v-8.663l6.43.754zm8.432 9.542h-6.431v-7.433l6.43.338zm0-9.1-6.431-.337v-8.117l6.43.754zm8.431 9.1h-6.43v-6.99l6.43.337zm0-8.656-6.43-.338v-7.571l6.43.754zm6.224 7.736a.938.938 0 0 1-.932.92h-3.29V33.64l4.222.221zm0-7.41-4.223-.221v-7.025l3.398.398a.923.923 0 0 1 .825.926z" fill="#166534" opacity="1" data-original="#166534" className=""></path></g></svg>
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
