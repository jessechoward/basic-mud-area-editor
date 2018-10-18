// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/:editorName', (req, res) =>
{
	res.render('editors/'+req.params.editorName);
});

module.exports = router;