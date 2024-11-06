import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home flex flex-col items-center justify-center h-screen bg-cover bg-center text-white text-center px-4">
            <div className='bg-[#111827] bg-opacity-85 rounded-2xl px-7 py-9'>
                <h1 className="text-5xl font-bold mb-4">Burger Craft</h1>
                <p className="text-lg max-w-xl mb-8">
                    Somos una empresa apasionada por ofrecer las mejores hamburguesas. Nos dedicamos a preparar comida
                    de
                    alta calidad, con ingredientes frescos y una receta única que hace que cada hamburguesa sea una
                    experiencia inolvidable. Nuestra misión es brindar a nuestros clientes un sabor auténtico y una
                    experiencia culinaria que siempre quieran repetir. ¡Ven y descubre por qué nuestras hamburguesas son
                    las
                    favoritas de todos!
                </p>
                <Link to="/productos">
                    <button
                        className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300">Comenzar
                    </button>
                </Link>
            </div>
        </div>
    );
}
