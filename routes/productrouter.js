const express = require('express');
const {
    addproduct,
    getallproducts,
    getsingleproduct,
    updateproduct,
    deleteproduct,
    getpublishedproducts
} = require('../controller/productController.js');

const router = express.Router();

router.post('/addproduct', addproduct);
router.get('/getallproducts', getallproducts);
router.get('/getsingleproduct/:id', getsingleproduct);
router.put('/updateproduct/:id', updateproduct);
router.delete('/deleteproduct/:id', deleteproduct);
router.get('/getpublishedproducts', getpublishedproducts);

module.exports = router;