import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faHouse, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import { useLocation, Link } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const buttonVariants = {
        '/': 'solid',
        '/turnos': 'light'
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const buttonVariant = buttonVariants[location.pathname] || "light";

    return (
        <div className="flex">
            <div className="hidden lg:flex flex-col w-64 bg-gray-50 h-screen text-white">
                <div className="p-4 text-2xl text-center text-blue-900 font-bold font-mono">Clínica UTN <FontAwesomeIcon icon={faStethoscope} /></div>
                <nav className="mt-8 flex flex-col justify-between mx-3 gap-3 h-full mb-2">
                    <div className="flex flex-col gap-4">
                        <Link to={'/'}>
                            <Button
                                className="w-full text-blue-700 relative font-medium text-lg "
                                color="primary"
                                variant={location.pathname === '/' ? 'flat' : 'light'}
                                radius="sm"
                            >
                                <FontAwesomeIcon icon={faHouse} className="absolute left-4" />
                                Inicio
                            </Button>
                        </Link>
                        <Link to={'/turnos'}>
                            <Button
                                className="w-full text-blue-700 relative font-medium text-lg "
                                color="primary"
                                variant={location.pathname === '/turnos' ? 'flat' : 'light'}
                                radius="sm"
                            >
                                <FontAwesomeIcon icon={faCalendarCheck} className="absolute left-4" />
                                Turnos
                            </Button>
                        </Link>
                        <Link to={'/contacto'}>
                            <Button
                                className="w-full text-blue-700 relative font-medium text-lg "
                                color="primary"
                                variant={location.pathname === '/contacto' ? 'flat' : 'light'}
                                radius="sm"
                            >
                                <FontAwesomeIcon icon={faCalendarCheck} className="absolute left-4" />
                                Contacto
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/login'}>
                            <Button
                                className="w-full font-medium text-md"
                                color="primary"
                                radius="sm"
                            >
                                Ingresar
                            </Button>
                        </Link>
                    </div>
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