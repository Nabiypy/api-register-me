/**
 * Created by hanso on 6/27/2017.
 */

'use strict';
var config = require('../config'),
  request = require('request'),
  nodemailer = require('nodemailer'),
  async = require('async'),
  mailerController = {};

// send maker post to vasapp
mailerController.doPost = function (req, res) {
  var body = req.body,
    url = config.services.url,
    payload;

  var mailOptions = {
    from: body.fromAddr,
    to: body.toAddr,
    subject: body.subject,
    text: body.body
  };

  config.transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.json(info);
    }
  });

}
module.exports = mailerController;
