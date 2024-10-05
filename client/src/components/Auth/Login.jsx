import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleVisible = () => setIsVisible(!isVisible);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', formData);
      navigate("/")
      console.log('response del registro: ', response.data);
    }
    catch (error) {
      console.log(error)
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
    <>
      <form onSubmit={handleSubmit}>
        <Input
          className=""
          type="email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Contraseña"
          name="password"
          variant="faded"
          placeholder="Ingresa tu contraseña"
          isRequired
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
        >
          Iniciar Sesión
        </Button>
      </form>
      <p>Si no estás registrado, creá tu cuenta haciendo click en el siguiente botón:</p>
      <Link to={'/register'}>
        <Button>
          Registrarse
        </Button>
      </Link>
    </>
  )
}

export default Login