const mongoose = require('mongoose')
const express = require('express')
const bodyParse = require('body-parser')
const path = require('path')
const flash = require('connect-flash')

const session = require('express-session')
const sessionStore = require('connect-mongodb-session')(session)

const app = express()
app.use(bodyParse.json());
app.use(flash());

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'images')))
app.set('view engine', 'ejs')
app.set('views', 'views')

const STORE = new sessionStore({
    uri: 'mongodb://localhost:27017/online-shop',
    collection: 'sessions '

})

app.use(session({
    secret: 'this is my secret to hash express',
    saveUninitialized: false,
    resave: true,
    store: STORE
}))


// mongoose.connect("mongodb://localhost:27017/online-shop", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('connected to database susscessfuly...')
//     }
// })

//process.env.SECRET_KEY = 'secret'

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`listeining on port ${port} ..... `))



const homeRouter = require('./routes/home.routes')
const productRouter = require('./routes/product.routes')
const cardRouter = require('./routes/card.router')
const authRouter = require('./routes/auth.router')
const adminRouter = require('./routes/admin.router')

app.use('/', homeRouter)
app.use('/', authRouter)


app.use('/product', productRouter)
app.use('/card', cardRouter)
app.use('/admin', adminRouter)