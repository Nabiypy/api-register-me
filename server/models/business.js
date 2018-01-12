/**
 * Created by hanso on 01/06/2018.
 */
// The Business model.
'use strict';

var Sequelize = require('sequelize'),
    config = require('../config'),
    db = require('./database');

// 1: The model schema.
var modelDefinition = {
    userId: { type: Sequelize.STRING},
    directory: { type: Sequelize.STRING },
    gravatar: { type: Sequelize.TEXT},
    officeName: { type: Sequelize.STRING, allowNull: false },
    otherNames: { type: Sequelize.STRING, allowNull: false },
    dateOfBirth: { type: Sequelize.STRING },
    gender: { type: Sequelize.STRING },
    maritalStatus: { type: Sequelize.STRING },
    mobile: { type: Sequelize.STRING, unique: true },
    email: { type: Sequelize.STRING },
    education: {type: Sequelize.TEXT},
    region: { type: Sequelize.STRING },
    landSize: { type: Sequelize.STRING },
    homeTown: { type: Sequelize.STRING },
    geolocation: { type: Sequelize.TEXT},
    product: { type: Sequelize.TEXT },
    service: { type: Sequelize.TEXT },
    otherInfo: { type: Sequelize.TEXT },
    position: { type: Sequelize.STRING},
    websiteUrl: { type: Sequelize.STRING},
    fileUpload: { type: Sequelize.STRING},
    blocked: { type: Sequelize.STRING,defaultValue: 'active'}

};

// 2: The model options.
var modelOptions = {
    classMethods: {
        associate: associate
    }
};

// 3: Define the User model.
var BusinessModel = db.define('business', modelDefinition, modelOptions);

function associate(models) {
    BusinessModel.belongsTo(models.DirectoryModel, {
        onDelete: 'cascade'
    })
}
module.exports = BusinessModel;
