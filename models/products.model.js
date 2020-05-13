const mongoose = require('mongoose')

// const connt = mongoose.connect("mongodb://localhost:27017/online-shop", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('connected to database susscessfuly...')
//     }
// })
const DB_URL = "mongodb://localhost:27017/online-shop"

//const Schema = mongoose.Schema
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String,
})

const Product = mongoose.model('product', productSchema)


exports.getAllProduct = () => {

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL, { useUnifiedTopology: true }).then(() => {
            return Product.find({})
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => reject(err))
    })

}


exports.getProductsByCategory = (category) => {

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL, { useUnifiedTopology: true }).then(() => {
            return Product.find({ category: category })
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => reject(err))
    })

}

exports.getProductsById = (id) => {

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL, { useUnifiedTopology: true }).then(() => {
            return Product.findById(id)
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => reject(err))
    })

}