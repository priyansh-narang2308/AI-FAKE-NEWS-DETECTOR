const express = require('express');
const { submitFeedback, fetchFeedback } = require('../controllers/userController');

const router = express.Router();

router.post('/feedback', submitFeedback);
router.get('/feedback', fetchFeedback);

module.exports = router;
