var conn = require('./../inc/db')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    res.render('admin/index', {
        active: 'index'
    });

})

router.get('/contacts', function (req, res, next) {

    res.render('admin/contacts', {
        active: 'contacts'
    });

})

router.get('/emails', function (req, res, next) {

    res.render('admin/emails', {
        active: 'emails'
    });

})

router.get('/login', function (req, res, next) {

    res.render('admin/login', {
    });

})

router.get('/menus', function (req, res, next) {

    res.render('admin/menus', {
        active: 'menus'
    });

})

router.get('/reservations', function (req, res, next) {

    res.render('admin/reservations', {
        date: {},
        active: 'reservations'
    });

})

router.get('/users', function (req, res, next) {

    res.render('admin/users', {
        active: 'users'
    });

})

module.exports = router;

