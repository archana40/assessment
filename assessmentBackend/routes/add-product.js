const express = require('express')
const router = express.Router();
const prodController = require('../controllers/add-product')


router.post('/addProduct' , prodController.postProductDetails );

router.get('/getProduct' , prodController.getProductDetails );

router.post('/updateData', prodController.updateProdDetails);

router.delete('/deleteData/:id', prodController.deleteProdData);



module.exports=router;