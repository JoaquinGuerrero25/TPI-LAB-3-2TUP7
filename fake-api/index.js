const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const users = [{ id: 1, name: 'Joaquín', lastName: 'Guerrero', email: 'joaquin@gmail.com', password: '1234', phoneNumber: '12345678' }];

app.use(cors());
app.use(express.json());

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).send('Debe completar todos los campos')
    }

    const user = users.find(u=>u.email === email)
    if(!user) return res.status(404).send('Usuario no encontrado.');
    if(user.password === password){
        res.status(201).json(user);
    }
    else{
        res.status(404).send('Contraseña incorrecta')
    }
        
})

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado.');
    res.json(user);
});

app.post('/register', (req, res) => {
    const { name, lastName, email, password, phoneNumber } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('Por favor, completa todos los campos requeridos.');
    }

    const nuevoUsuario = {
        id: users.length + 1,
        name,
        lastName,
        email,
        password,
        phoneNumber
    };

    users.push(nuevoUsuario);

    res.status(201).json(nuevoUsuario);
})

app.listen(port, () => {
    console.log(`Fake api corriendo en ${port}`)
});