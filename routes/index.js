const path = require('path');

const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();

router.get('/', indexController.getEntries);

router.get('/find', indexController.dropper);


router.post('/filtered',indexController.getByTopic);



module.exports = router;
