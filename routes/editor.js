// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/areas');
router.get('/areas/:areaId');
router.get('/areas/:areaId/rooms');
router.get('/rooms/:roomId');
router.get('/rooms/:roomId/exits');
router.get('/exits/:exitId');
router.get('/areas/:areaId/items');
router.get('/items/:itemId');
router.get('/areas/:areaId/npcs');
router.get('/npcs/:npcId');
router.get('/areas/:areaId/instances');
router.get('/instances/:instanceId');


module.exports = router;