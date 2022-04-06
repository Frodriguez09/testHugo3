try {
    const express = require('express');
    const router = express.Router();
    const accesosController = require('../controllers/accesos.controller');
    
    router.post('/', accesosController.addAcceso);
    router.get('/:status/:limit', accesosController.getAccesos);
    router.delete('/:id', accesosController.deleteAcceso);
    
    module.exports = router;
    
    
} catch (error) {
    
}