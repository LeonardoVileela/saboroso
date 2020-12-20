var conn = require('./../inc/db')
var reservation = require('./../inc/reservation')
var contact = require('./../inc/contact')
var subscribe = require('./../inc/subscribe')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  conn.query(
    'SELECT * FROM saboroso.tb_menus ORDER BY title;',
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        res.render('index', {
          title: 'Restaurante Saboroso',
          menus: results,
          errorEmail: 0,
          successEmail: 0


        });
      }
    }
  );
});

router.get('/contact', function (req, res, next) {

  res.render('contact', {
    title: 'Restaurante Saboroso'
  });

})

router.post('/contact', function (req, res, next) {

  contact.postContact(req.body).then(results => {
    res.render('contact', {
      title: 'Restaurante Saboroso',
      success: 'Entraremos em contato o mais rápido possível'
    })

  }).catch(err => {
    res.render('contact', {
      title: 'Restaurante Saboroso',
      error: err.toString()
    })
  })

})


router.get('/menu', function (req, res, next) {

  res.render('menu', {
    title: 'Restaurante Saboroso'
  });


});

router.get('/reservation', function (req, res, next) {


  res.render('reservation', {
    title: 'Restaurante Saboroso'
  });


});

router.post('/reservation', function (req, res, next) {

  reservation.postReservations(req.body).then(results => {
    res.render('reservation', {
      title: 'Restaurante Saboroso',
      success: 'Reserva Realizada com sucesso'
    })
  }).catch(err => {
    res.render('reservation', {
      title: 'Restaurante Saboroso',
      error: 'Reserva não realizada'
    })
  })

})


router.get('/services', function (req, res, next) {


  res.render('services', {
    title: 'Restaurante Saboroso'
  });


});

router.post('/subscribe', function (req, res, next) {

  subscribe.postSubscribe(req.body).then(results => {
    conn.query(
      'SELECT * FROM saboroso.tb_menus ORDER BY title;',
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          res.render('index', {
            title: 'Restaurante Saboroso',
            menus: results,
            successEmail: "E-mail inscrito com sucesso"
          })
        }
      }
    )
  }).catch(err => {
    var errorMessage = err
    conn.query(
      'SELECT * FROM saboroso.tb_menus ORDER BY title;',
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          res.render('index', {
            title: 'Restaurante Saboroso',
            menus: results,
            errorEmail: 'Ocorreu um problema na sua inscrição, tente de novo mais tarde.'

          })
        }
      }
    )
  })

})

router.get('/subscribe', function (req, res, next) {

  res.render('subscribe', {
    title: 'Restaurante Saboroso'
  });

})

module.exports = router;

