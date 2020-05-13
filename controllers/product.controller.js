const productsModel = require('../models/products.model')
exports.getProduct = (req, res, next) => {

    // productModel.getAllProduct().then(products => {
    //     res.render('index', {
    //         products: products
    //     })
    // })

    let id = req.params.id


    productsModel.getProductsById(id).then(products => {
        res.render('product', {
            products: products
        })
    })


}