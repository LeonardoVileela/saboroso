var conn = require('./../inc/db')
var users = require('./../inc/users')
var express = require('express');
var router = express.Router();


router.use(function (req, res, next) {

    if (['/login'].indexOf(req.url) == -1 && !req.session.user) {
        res.redirect("/admin/login")
    } else {
        next()
    }

})

router.get('/logout', function (req, res, next) {

    delete req.session.user
    res.redirect("/admin/login")
    

})


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

router.post('/login', function (req, res, next) {


    users.login(req.body.email, req.body.password).then(user => {
        req.session.user = user

        res.redirect('/admin')

    }).catch(err => {
        res.render('admin/login', {
            error: err.toString()
        })
    })

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

