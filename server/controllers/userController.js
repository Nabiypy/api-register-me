'use strict';

// The user controller.
var UserController = {
    index: function (req, res) {
        res.status(200)
            .json({
              message: 'Welcome User Profile' +'!',
              username: '' + req.user.username,
              email: '' + req.user.email,
              phone: '' +req.user.mobile,
              picture: ''+ req.user.gravatar,
              bio: '' + req.user.bio,
              cardWallet: ''+req.user.cardWallet
            });
    },
    me: (req,res)=> res.status().json({
        email:''+req.user.email,
        username:''+req.user.username
    })
};

module.exports = UserController;
