/**
 * Created by hanso on 12/01/2018.
 */
// The Directory model.
'use strict';

var Sequelize = require('sequelize'),
    config = require('../config'),
    db = require('./database');

// 1: The model schema.
var modelDefinition = {
    name: { type: Sequelize.STRING, unique: true},
    description: { type: Sequelize.TEXT},
    group: { type: Sequelize.STRING }
  
};

// 2: The model options.
var modelOptions = {
    classMethods: {
        associate: associate
    }
};

// 3: Define the User model.
var DirectoryModel = db.define('directory', modelDefinition, modelOptions);

function associate(models) {
    DirectoryModel.hasMany(models.BusinessModel, {
        onDelete: 'cascade'
    })
}
module.exports = DirectoryModel;
