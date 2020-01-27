const product = require('../models/add-product')


exports.postProductDetails = (req, res, next) => {
    const prodDetails = new product({
        prodName: req.body.prodName,
        category: req.body.category,
        company: req.body.company,
        quantity: req.body.quantity,
        price: req.body.price
    });
    prodDetails.save().then(prod => {

        console.log(prod);
        res.json(prod);

    }).catch(err => {
        console.log(err);
    });
}


exports.getProductDetails = (req, res, next) => {
    product.find().then(productData => {
        // console.log(productData);
        res.json(productData);
    }).catch(err => {
        console.log(err);
    });
}


exports.updateProdDetails = (req ,res , next) => {
    let productId = req.body.id;
    product.findById(productId).then(proData =>{
        proData.prodName = req.body.prodName;
        proData.category = req.body.category;
        proData.company = req.body.company;
        proData.quantity = req.body.quantity;
        proData.price = req.body.price;
        proData.save();
        res.json(proData);
    }).catch(err =>{
        console.log(err);
    })
} 

exports.deleteProdData = (req, res, next) => {
    let id = req.params.id;
    product.findByIdAndRemove(id).then(result => {
        console.log(result);
        res.json(result);
    }).catch(err => {
        console.log(err);
    })
}






























































