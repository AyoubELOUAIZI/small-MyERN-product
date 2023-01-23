const express = require('express');
const router = express.Router();

const {
    addProduct,
    PullAllProduct,
    DeleteProduct,
    UpdateProduct,
} = require('../controllers/productController');



router.post('/add', addProduct);

router.get('/all', PullAllProduct);

router.delete('/delete/:id', DeleteProduct);

router.put('/update/:id', UpdateProduct);

module.exports = router;






