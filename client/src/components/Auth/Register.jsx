import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Register = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });

    const toggleVisible = () => setIsVisible(!isVisible);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        setErrorMessage(null);
        e.preventDefault();
        try {
            const response = await axios.post('/register', formData);
            console.log('response del registro: ', response.data);
        } catch (error) {
            setErrorMessage(error?.response?.data)
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <form onSubmit={handleSubmit} className="w-[90%] max-w-[600px] border p-10 bg-[#f6f6f6] shadow-lg rounded-lg flex flex-col items-center justify-center gap-4" >
                <div className="text-red-500 mt-2 text-sm text-center border border-red-500 p-2 rounded-md bg-red-50">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="pr-2" />
                    {errorMessage}
                </div>
                <Input
                    isRequired
                    label='Nombre'
                    name="name"
                    placeholder="Ingresa tu nombre"
                    radius="sm"
                    variant="faded"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Input
                    isRequired
                    label='Apellido'
                    name="lastName"
                    placeholder="Ingresa tu apellido"
                    radius="sm"
                    variant="faded"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <Input
                    isRequired
                    label='Email'
                    name="email"
                    placeholder="Ingresa tu email"
                    radius="sm"
                    variant="faded"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    isRequired
                    label='Numero de telefono'
                    name="phoneNumber"
                    placeholder="Ingresa tu numero de telefono"
                    radius="sm"
                    variant="faded"
                    type="number"
                    value={formData.phoneNumber}
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
                    color="primary"
                    radius="sm"
                    className="w-full"
                >
                    Registrarse
                </Button>
            </form>
        </div>
    )
};

export default Register;