import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const products = [
    {
        id: 1,
        name: 'Classic Burger',
        price: 8.99,
        category: 'Burgers',
        imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        id: 2,
        name: 'Cheese Burger',
        price: 9.99,
        category: 'Burgers',
        imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        id: 3,
        name: 'Vegan Burger',
        price: 10.99,
        category: 'Vegan',
        imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        id: 4,
        name: 'BBQ Burger',
        price: 11.99,
        category: 'Burgers',
        imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        id: 5,
        name: 'Fries',
        price: 3.49,
        category: 'Sides',
        imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        id: 6,
        name: 'Soft Drink',
        price: 1.99,
        category: 'Drinks',
        imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400'
    },
];

export default function ProductListPage() {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-100 min-h-screen">
            {products.map((product) => (
                <div key={product.id} className="product-item bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(product)} className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300 w-full">Añadir a la cesta</button>
                </div>
            ))}
        </div>
    );
}
