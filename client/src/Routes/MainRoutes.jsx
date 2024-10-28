import { Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar";
import Home from "../components/Home/Home";
import PagePatient from "../pages/PagePatient";
import ContactForm from "../components/ContactForm";

const MainRoutes = () => {
    const location = useLocation();

    const showNavbar = location.pathname !== '/login' && location.pathname !== '/register';

    return (
        <div className="flex flex-col lg:flex-row">
            {showNavbar && <Navbar />}
            <div>
                <Routes>
                    <Route path='/' element={"hola home"}/>
                    <Route path="/Turnos" element={<PagePatient/>}/>
                    <Route path="/contacto" element={<ContactForm/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default MainRoutes;
