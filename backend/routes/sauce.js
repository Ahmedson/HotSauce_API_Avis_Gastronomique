// Importation d'express
const express = require('express');
// création d'un router express
const router = express.Router();

// Importation du contrôleur pour les sauces
const sauceCtrl = require('../controllers/sauce');
const multer = require('../middleware/multer-config');

// application des fonctions du contrôleur à chaque route 
// [attention à ne pas appeler les fonctions]
router.get('/', sauceCtrl.getAllSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.post('/', multer, sauceCtrl.createSauce);
router.put('/:id', multer, sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.post('/:id/like', sauceCtrl.likeDislikeSauce);

// Exportation du routeur
module.exports = router;