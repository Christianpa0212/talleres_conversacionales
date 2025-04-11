require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const xss = require('xss-clean');
const path = require('path');
const hbs = require('hbs');

const tallerRoutes = require('./server/routes/tallerRoutes');

// Importación de BD
require('./server/config/db/db');

const app = express();

// Configuracion de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'client/views'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'client/public')));

// Middlewares de seguridad
//app.use(xss());
//app.use(cors());


app.use(morgan('dev'));
app.use(express.json());

//Redireccion automatica a talleres
app.get('/', (req, res) => {
  res.redirect('/calendario');
});

// Ruta API talleres
app.use('/api/talleres', tallerRoutes);

// Ruta vista talleres
app.get('/calendario', (req, res) => {
  res.render('calendario');
});

// Inicializa el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto: ${PORT}`);
});
