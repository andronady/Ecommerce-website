module.exports = (req, res, next) => {
    console.log(req.session.isAdmin)
    if (req.session.isAdmin) next()
    else console.log('not admin')

}