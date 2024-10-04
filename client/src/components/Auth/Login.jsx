import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <form action="">
        <Input className="" type="email" label="Email" placeholder="Enter your email" />
        <Input className="" type="password" label="Password" placeholder="Enter your password" />
        <Button>Iniciar Sesión</Button>
      </form>
      <p>Si no estás registrado, creá tu cuenta haciendo click en el siguiente botón:</p>
      <Link to={'/register'}>
        <Button>Registrarse</Button>
      </Link>
    </>
  )
}

export default Login