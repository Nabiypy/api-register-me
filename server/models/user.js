// The User model.
'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt'),
    config = require('../config'),
    db = require('./database');

// 1: The model schema.
var modelDefinition = {
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  mobile:{
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gravatar: {
    type: Sequelize.TEXT
  },
  cardWallet: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  mobileWallet: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.TEXT
  },
  item: {
    type: Sequelize.INTEGER
  },
  paid:{
    type: Sequelize.DECIMAL
  },
  role: {
    type: Sequelize.STRING,
    defaultValue: config.userRoles.user
  },
  blocked: {
    type: Sequelize.STRING,
    defaultValue: 'active'
  }

};

// 2: The model options.
var modelOptions = {
  instanceMethods: {
    comparePasswords: comparePasswords
  },
  hooks: {
    beforeValidate: hashPassword
  },
  classMethods:{
    associate: associate
  }
};


// 3: Define the User model.
var UserModel = db.define('user', modelDefinition, modelOptions);

// Compares two passwords.
function comparePasswords(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if(error) {
      return callback(error);
    }
    return callback(null, isMatch);
  });
}

// Hashes the password for a user object.
function hashPassword(user) {
  if(user.changed('password')) {
    return bcrypt.hash(user.password, 10).then(function(password) {
      user.password = password;
    });
  }
}

function associate(models) {
  //A User can have many Makers.
  UserModel.hasMany(models.MakerModel, {
    onDelete: 'cascade'
  });
}

module.exports = UserModel;
