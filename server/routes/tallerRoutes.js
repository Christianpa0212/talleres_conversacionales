const express = require('express');
const router = express.Router();

const tallerController = require('../controllers/tallerControllers');
// const { isAdmin } = require('../middlewares/authMiddleware');

// Talleres
router.get('/', tallerController.getAllTalleres);

module.exports = router;
