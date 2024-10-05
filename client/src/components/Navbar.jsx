import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className="hidden lg:flex flex-col w-64 bg-gray-800 h-screen text-white">
                <div className="p-4 text-xl font-bold">Mi Aplicación</div>
                <nav className="mt-4">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Inicio</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Sobre Nosotros</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Servicios</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contacto</a>
                </nav>
            </div>

            <div className="lg:hidden w-full">
                <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
                    <div className="text-xl font-bold">Mi Aplicación</div>
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="bg-gray-800 text-white">
                        <nav className="flex flex-col p-4">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Inicio</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Sobre Nosotros</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Servicios</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contacto</a>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};