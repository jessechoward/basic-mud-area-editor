// eslint-disable-next-line new-cap
const router = require('express').Router();
const handlers = require('../handlers');

router.use(handlers.auth, handlers.api);

router.get('/areas');
router.get('/areas/:areaId');
router.get('/areas/:areaId/rooms');
router.get('/areas/:areaId/items');
router.get('/areas/:areaId/npcs');
router.get('/areas/:areaId/instances');
router.get('/rooms/:roomId');
router.get('/rooms/:roomId/exits');
router.get('/exits/:exitId');
router.get('/items/:itemId');
router.get('/npcs/:npcId');
router.get('/instances/:instanceId');


module.exports = router;
module.exports = router;