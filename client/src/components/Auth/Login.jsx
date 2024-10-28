import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import backImgae from '../../assets/cool-background.svg'
import { useDispatch } from "react-redux";
import authslice from "../../redux/slice/authslice";
import { useAuth } from '../Context/AuthContext'

const Login = () => {
  const navigate = useNavigate();
  const {login}=useAuth(); 
  const [errorMessage, setErrorMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleVisible = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    setShowMessage(false);
    setErrorMessage(null);
    e.preventDefault();
    try {
      await login(formData)
      navigate("/");
    }
    catch (error) {
      setShowMessage(true);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backImgae})` }}>
      <div className="border w-[90%] max-w-[700px] p-4 md:p-12 rounded-xl shadow-lg flex flex-col items-center justify-center gap-6 bg-white">
        <h2 className="text-3xl font-semibold">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          {/* {showMessage && (
            <div className="text-red-500 mt-2 text-sm text-center border border-red-500 p-2 rounded-md bg-red-50">
              <FontAwesomeIcon icon={faTriangleExclamation} className="pr-2" />
              {errorMessage}
            </div>
          )} */}
          <Input
            type="email"
            label="Email"
            name="email"
            variant="faded"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Contraseña"
            name="password"
            variant="faded"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
            endContent={
              <button className="focus:outline-none text-gray-400 h-full" type="button" onClick={toggleVisible}>
                {isVisible ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
          />

          <Button
            type="submit"
            color="primary"
            radius="sm"
            className="w-full"
          >
            Iniciar Sesión
          </Button>
        </form>
        <div className="flex items-center gap-2">
          <p className="text-md text-gray-600">No tienes cuenta?</p>
          <Link to={'/register'} className="text-blue-600 cursor-pointer">Registrate aquí</Link>
        </div>
      </div>
    </div>
  )
}

export default Login