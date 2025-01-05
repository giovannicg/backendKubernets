const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta para manejar datos
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hola ${name}, tienes ${age} años.` });
});

// Arrancar en un servidor que le proporciono por docker
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });