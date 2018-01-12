/**
 * Created by hanso on 12/01/2018.
 */

'use strict';
var config = require('../config'),
  request = require('request'),
  db = require('../models/database'),
  Directory = require('../models/directory'),
  Business = require('../models/business'),
  DirectoryController = {};


// create maker post
DirectoryController.createDirectory = function (req, res) {
  var body = req.body;
  console.log("create directory post request >>>", body);

  db.sync().then(function () {
    var newPost = {
      name: req.body.name,
      description: req.body.description,
      group: req.body.group
    };

    return Directory.create(newPost).then(function () {
      res.status(201).json({ message: 'Directory created successfully' });
    });
  }).catch(function (error) {
    console.log(error);
    res.status(403).json({ message: 'an error occured saving directory' });
  });
}
DirectoryController.getDirectories= function (req, res) {
    Directory.findAll()
    .then(function (directories) {
        res.status(200).json(directories);
        console.info('find all directories ~ ');
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
}
//get agent by id
DirectoryController.getDirectory = function (req, res) {
    Directory.findById(req.params.id)
    .then(function (directory) {
        res.status(200).json(directory);
        console.log('error: false ', 'message: get agent ~', directory);
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
}

DirectoryController.updateDirectory = (req, res) => {
    Directory.update(req.body, {
        where: { id: req.params.id }
    })
    .then(function (updatedRecords) {
        res.status(200).json(updatedRecords);
        console.log('updateRecords >>', updatedRecords)
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
}
  //delete agent post
DirectoryController.removeDirectory = function (req, res) {
  Directory.destroy({
    where: { id: req.params.id }
  })
  .then(function (deletedRecords) {
    res.status(200).json(deletedRecords);
    console.log('error: false', 'message: deletedRecords ~ ', deletedRecords);
  })
  .catch(function (error) {
    res.status(500).json(error);
    console.log('error: true ', 'message: ', error)
  });
}

DirectoryController.createBusiness = function (req, res) {
    var body = req.body;
    console.log("create Business post request >>>", body);
  
    db.sync().then(function () {
      var newPost = {
        userId: req.body.userId,
        directory: req.body.directory,
        gravatar: req.body.gravatar,
        officeName: req.body.officeName,
        otherNames: req.body.otherNames,
        gender: req.body.gender,
        maritalStatus: req.body.maritalStatus,
        mobile: req.body.mobile,
        email: req.body.email,    
        homeTown: req.body.homeTown,      
        position: req.body.position,
        geolocation: req.body.geolocation,
        websiteUrl: req.body.websiteUrl,
        fileUpload: req.body.fileUpload
      };
  
      return Business.create(newPost).then(function () {
        res.status(201).json({ message: 'Business created successfully' });
      });
    }).catch(function (error) {
      console.log(error);
      res.status(403).json({ message: 'an error occured saving Business' });
    });
  }
// get all agents post

DirectoryController.getBusinessess = function (req, res) {
    Business.findAll()
    .then(function (directories) {
        res.status(200).json(directories);
        console.info('find all directories ~ ');
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
}
//get agent by id
DirectoryController.getBusiness = function (req, res) {
    Business.findById(req.params.id)
    .then(function (business) {
        res.status(200).json(business);
        console.log('error: false ', 'message: get agent ~', business);
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
}

DirectoryController.updateBusiness = (req, res) => {
    Business.update(req.body, {
        where: { id: req.params.id }
    })
    .then(function (updatedRecords) {
        res.status(200).json(updatedRecords);
        console.log('updateRecords >>', updatedRecords)
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
}
  //delete agent post
DirectoryController.removeBusiness = function (req, res) {
  Business.destroy({
    where: { id: req.params.id }
  })
  .then(function (deletedRecords) {
    res.status(200).json(deletedRecords);
    console.log('error: false', 'message: deletedRecords ~ ', deletedRecords);
  })
  .catch(function (error) {
    res.status(500).json(error);
    console.log('error: true ', 'message: ', error)
  });
}


module.exports = DirectoryController;
