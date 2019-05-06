var express = require('express');
var router = express.Router();

var Res = require('../models/Reservation');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/menu', function(req, res, next) {
  res.render('menu');
});


router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


router.get('/blog', function(req, res, next) {
  res.render('blog');
});
router.get('/reservation', function(req, res, next) {
  res.render('reservation');
});


router.get('/blog-single', function(req, res, next) {
  res.render('blog-single');
});


router.post('/reservation', function(req, res, next) {
  console.log(req.body)

          var  name = req.body.name,
            email = req.body.email,
            phone = req.body.phone,
            persons = req.body.persons,
            date = req.body.date,
            time = req.body.time;
  
            Res.findOne({
              email: email
          }, function (err, doc) {
              if (err) {
                  res.status(500).send('error occured')
              } else {
                  if (doc) {
                      res.status(500).send('ID already exists')
                  } else {
                      var record = new Res()
                      record.name = name;
                      record.email = email;
                      record.phone = phone;
                      record.persons = persons;
                      record.date= date;
                      record.time= time;
                      record.save(function (err, reservation) {
                          if (err) {
                              res.status(500).send('db error')

                          } else {
                              res.render('index')
                          }
                      })
                  }
              }
          })
});

module.exports = router;
