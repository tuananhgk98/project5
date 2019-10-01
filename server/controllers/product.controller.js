/*jshint esversion: 6 */
var products = require('../models/product.model');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
const CircularJSON = require('circular-json'); 

mongoose.connect('mongodb://localhost:27017/project5', { useNewUrlParser: true });

module.exports.getAllProduct = function (req, res) {
    products.find(function (err, data) {
        if (err) return console.log(err);
        res.status(200).send({
            OK: true,
            Message: "Get all products successfully!!",
            data: data
        });
    });
};

module.exports.getOneProduct = function (req, res) {
    products.findOne({ id: req.body.id }, function (err, data) {
        if (err) res.send(json(err));
        res.status(200).send({
            OK: true,
            Message: "get one product successfully!",
            data: data
        });
    });

};