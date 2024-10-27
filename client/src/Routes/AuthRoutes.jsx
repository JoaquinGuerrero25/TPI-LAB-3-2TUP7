import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
};

export default AuthRoutes;