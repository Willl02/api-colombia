const express = require('express');
const app = express();

// Permite que la API lea datos enviados en formato JSON
app.use(express.json());

// Clave secreta/Contraseña para modificar datos
// (En producción la leerá de las variables de entorno)
const API_SECRET_KEY = process.env.API_SECRET_KEY || "mi_clave_secreta_123";

// Base de datos inicial en memoria
let colombiaData = [
  {
    departamento: "Antioquia",
    ciudades: ["Medellín"],
    pueblos: ["Guatapé", "Jardín"]
  },
  {
    departamento: "Cundinamarca",
    ciudades: ["Bogotá"],
    pueblos: ["Zipaquirá"]
  }
];

// Middleware de seguridad: Protege las rutas que modifican información
const verificarSeguridad = (req, res, next) => {
  const claveEnviada = req.headers['x-api-key'];

  if (!claveEnviada || claveEnviada !== API_SECRET_KEY) {
    return res.status(401).json({
      exito: false,
      mensaje: "Acceso denegado. Contraseña incorrecta o no enviada."
    });
  }

  next(); // Si la contraseña es correcta, continúa
};

// 1. RUTA PÚBLICA: Cualquiera puede ver las ciudades y pueblos
app.get('/api/colombia', (req, res) => {
  res.json({
    exito: true,
    datos: colombiaData
  });
});

// 2. RUTA PROTEGIDA: Solo con contraseña se pueden agregar datos
app.post('/api/colombia/agregar', verificarSeguridad, (req, res) => {
  const { departamento, tipo, nombre } = req.body;

  if (!departamento || !tipo || !nombre) {
    return res.status(400).json({
      exito: false,
      mensaje: "Faltan datos. Debes enviar: departamento, tipo ('ciudad' o 'pueblo') y nombre."
    });
  }

  // Buscar si el departamento ya existe
  let depto = colombiaData.find(
    d => d.departamento.toLowerCase() === departamento.toLowerCase()
  );

  // Si no existe, lo creamos
  if (!depto) {
    depto = { departamento, ciudades: [], pueblos: [] };
    colombiaData.push(depto);
  }

  // Agregar según el tipo
  if (tipo.toLowerCase() === 'ciudad') {
    depto.ciudades.push(nombre);
  } else if (tipo.toLowerCase() === 'pueblo') {
    depto.pueblos.push(nombre);
  } else {
    return res.status(400).json({ exito: false, mensaje: "El tipo debe ser 'ciudad' o 'pueblo'." });
  }

  res.status(201).json({
    exito: true,
    mensaje: `${tipo} '${nombre}' agregado con éxito a ${departamento}.`,
    datos: depto
  });
});

// Configuración del puerto para funcionar localmente y en internet
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});