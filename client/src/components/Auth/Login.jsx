import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button"
import { Link } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', formData);
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
        className="" 
        type="password" 
        label="Password" 
        placeholder="Enter your password" 
        name="password"
        value={formData.password}
        onChange={handleChange} 
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