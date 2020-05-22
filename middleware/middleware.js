
module.exports = {
    checkLogin: (req, res, next) => {
        if (req.cookies.admin == 'true') {
            console.log(req.cookies);
            return res.redirect('/')
        }
        next('')
    },
    checkAdmin: (req, res, next) => {
        if (req.cookies.admin == 'true') {
            console.log();
            next('')
        } else {
            return res.redirect('/')
        }

    }

}