exports.getAdd = (req, res, next) => {
    res.render("add", {
        validationErrors: req.flash('validationErrors'),
        isUser: true,
        isAdmin: true
    })
}

exports.postAdd = (req, res, next) => {
    console.log(req.body)

}