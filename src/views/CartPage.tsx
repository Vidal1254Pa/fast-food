import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../redux/slices/cartSlice';
import { RootState } from "../redux/store";

export default function CartPage() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const dispatch = useDispatch();

    return (
        <div className="cart-page container mx-auto p-6 min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart</h2>
            <p className="text-xl mb-4">Total items: {cartItems.length}</p>
            <p className="text-xl font-semibold mb-8">Total cost: ${totalAmount.toFixed(2)}</p>
            <button
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 mb-4">
                Checkout (Coming Soon)
            </button>
            <button onClick={() => window.location.href = "/products"}
                    className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300 mb-6">
                Continue Shopping
            </button>
            <div className="cart-items grid grid-cols-1 gap-6">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item flex items-center bg-white p-4 rounded-lg shadow-lg">
                        <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4"/>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-gray-700">Unit price: ${item.price.toFixed(2)}</p>
                            <p className="text-gray-700">Quantity: {item.quantity}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button onClick={() => dispatch(incrementItem(item.id))}
                                    className="bg-green-500 text-white font-semibold py-1 px-2 rounded-full">+
                            </button>
                            <button onClick={() => dispatch(decrementItem(item.id))}
                                    className="bg-green-500 text-white font-semibold py-1 px-2 rounded-full">-
                            </button>
                            <button onClick={() => dispatch(removeItem(item.id))}
                                    className="bg-red-500 text-white font-semibold py-1 px-4 rounded-full">Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
