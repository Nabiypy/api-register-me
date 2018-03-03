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
    userId: { type: Sequelize.STRING, unique: true },
    findMeId: { type: Sequelize.STRING, unique: true },
    group: { type: Sequelize.STRING },
    directory: { type: Sequelize.STRING },
    gravatar: { type: Sequelize.BLOB('long') },
    officeName: { type: Sequelize.STRING },
    firstName: { type: Sequelize.STRING },
    middleName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    otherNames: { type: Sequelize.STRING },
    dateOfBirth: { type: Sequelize.STRING },
    idType: { type: Sequelize.STRING },
    idNo: { type: Sequelize.STRING },
    idPicture: { type: Sequelize.BLOB('long') },
    email: { type: Sequelize.STRING },
    mobile: { type: Sequelize.STRING },
    gender: { type: Sequelize.STRING },
    street: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    maritalStatus: { type: Sequelize.STRING },
    education: { type: Sequelize.TEXT },
    region: { type: Sequelize.STRING },
    landSize: { type: Sequelize.STRING },
    homeTown: { type: Sequelize.STRING },
    latitude: { type: Sequelize.TEXT },
    longitude: { type: Sequelize.TEXT },
    geolocation: { type: Sequelize.TEXT },
    product: { type: Sequelize.TEXT },
    service: { type: Sequelize.TEXT },
    otherInfo: { type: Sequelize.TEXT },
    position: { type: Sequelize.STRING },
    websiteUrl: { type: Sequelize.STRING },
    fileUpload: { type: Sequelize.BLOB('long') },
    verified: { type: Sequelize.STRING, defaultValue: 'false' },
    blocked: { type: Sequelize.STRING, defaultValue: 'active' }

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