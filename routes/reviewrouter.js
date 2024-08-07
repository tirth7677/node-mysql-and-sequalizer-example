const express = require('express');
const {
    addreview,
    getallreviews
} = require('../controller/reviewController.js');

const router = express.Router();

router.post('/addreview', addreview);
router.get('/getallreviews', getallreviews);

module.exports = router;