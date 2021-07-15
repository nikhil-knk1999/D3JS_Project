const Entry = require('../models/entry');

exports.getEntries = (req, res, next) => {
  Entry.fetchAll()
    .then(entries => {
      res.render('show/entry-list', {
        entries : entries,
        pageTitle: 'All entries',
        path: '/',
        topic: '',
        sector: '',
        end_year: ''
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getByTopic = (req, res, next) => {
  var topic = String(req.body.topic);
  var sector = String(req.body.sector);
  var end_year = String(req.body.end_year);
  var intensity = String(req.body.intensity);
  var country = String(req.body.cuntry);
  // console.log((req.body.topic));
  console.log(topic.length);
  Entry.fetchAll()
    .then(entries => {
      res.render('show/entry-list', {
        entries : entries,
        pageTitle: 'All entries',
        path: '/entries',
        topic: topic,
        sector: sector,
        end_year: end_year,
        intensity: intensity,
        country: country
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.dropper = (req, res, next) => {
  res.render('show/dropper' , {pageTitle: 'selector',path: '/find'});
}