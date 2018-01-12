'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),
    AdminController = require('../controllers/adminController'),
    NodeMailController = require('../controllers/nodeMailer'),
    DirectoryController = require('../controllers/directory.server.controller');


var APIRoutes = function(passport) {
    router.post('/signup', AuthController.signUp);
    router.post('/authenticate', AuthController.authenticateUser);
    // POST Routes.
    // router.post('/repr', passport.authenticate('jwt', { session: false}), allowOnly(config.accessLevels.user, ReprocessController.doMaker));
    router.post('/mail', NodeMailController.doPost);
    router.post('/directory', DirectoryController.createDirectory);
    router.post('/business', DirectoryController.createBusiness);


    // GET Routes.
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

    router.get('/directories', DirectoryController.getDirectories);
    router.get('/directory/:id', DirectoryController.getDirectory);
    router.put('/directory/update/:id', DirectoryController.updateDirectory);
    router.delete('/directory/remove/:id', DirectoryController.removeDirectory);

    router.get('/businessess', DirectoryController.getBusinessess);
    router.get('/business/:id', DirectoryController.getBusiness);
    router.put('/business/update/:id', DirectoryController.updateBusiness);
    router.delete('/business/remove/:id', DirectoryController.removeBusiness);


    return router;
};

module.exports = APIRoutes;
