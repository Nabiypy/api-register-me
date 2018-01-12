'user strict';

//admin controller
var AdminController = {
    index: (req,res)=> {
       res.status(200)
           .json({
                message: 'Welcome to the admin page'+'!',
                username: '' + req.user.username,
                email: '' + req.user.email,
                phone: ''+req.user.mobile,
                picture: ''+ req.user.gravatar,
                bio: '' + req.user.bio,
                cardWallet: ''+req.user.cardWallet
            });
    }
}

module.exports = AdminController;
