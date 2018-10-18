// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use('/editor', require('./editor'));
router.use('/api', require('./api'));
router.get('/', require('./home'));

module.exports = router;