// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/', (req, res) =>
{
	res.render('home');
});

module.exports = router;