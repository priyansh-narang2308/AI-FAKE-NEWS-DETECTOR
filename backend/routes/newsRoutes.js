const express = require('express');
const  analyzeNews  = require('../controllers/newsController');

const router = express.Router();

router.post('/analyze', analyzeNews);

module.exports = router;