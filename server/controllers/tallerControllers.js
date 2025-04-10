const db = require('../config/db/db');

exports.getAllTalleres = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM view_talleres_calendario');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener talleres:', error);
    res.status(500).json({ message: 'Error al obtener los talleres' });
  }
};
