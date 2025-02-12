const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        lng: req.language,
        i18n: req.i18n
    });
});

module.exports = router;