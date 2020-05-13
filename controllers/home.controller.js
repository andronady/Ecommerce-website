const productModel = require('../models/products.model')
exports.getHome = (req, res, next) => {

    // productModel.getAllProduct().then(products => {
    //     res.render('index', {
    //         products: products
    //     })
    // })

    let category = req.query.category
    if (category && category !== 'all') {
        productModel.getProductsByCategory(category).then(products => {
            res.render('index', {
                products: products
            })
        })
    } else {
        productModel.getAllProduct(category).then(products => {
            res.render('index', {
                products: products
            })
        })
    }
}