// eslint-disable-next-line new-cap
const router = require('express').Router();
const handlers = require('../handlers');

router.use(handlers.auth, handlers.api);

module.exports = router;