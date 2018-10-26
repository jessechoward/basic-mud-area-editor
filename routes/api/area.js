// eslint-disable-next-line new-cap
const router = require('express').Router();
const codes = require('http-status-codes');
const db = require('../../models');

const findAll = (model, res, whereClause) =>
{
	model.findAll(whereClause)
		.then((instanceList) =>
		{
			if (instanceList)
			{
				const result = [];
				for (const instance of instanceList)
				{
					result.push(instance.document);
				}
				return res.status(codes.ok).json(result);
			}
			return res.status(codes.NOT_FOUND).json({error: 'not found'});
		})
		.catch((error) =>
		{
			return res.status(codes.INTERNAL_SERVER_ERROR).json(error);
		});
};

router.param('areaId', (req, res, next, value) =>
{
	db.models.areas.findById({where: {id: value}})
		.then((area) =>
		{
			if (area)
			{
				req.area = area.document;
				return next();
			}
			return res.status(codes.NOT_FOUND).json({error: 'not found'});
		})
		.catch((error) =>
		{
			return res.status(codes.INTERNAL_SERVER_ERROR).json(error);
		});
});

router.get('/areas', (req, res) =>
{
	findAll(db.models.areas, res, null);
});

router.get('/areas/:areaId', (req, res) =>
{
	return res.status(codes.OK).json(req.area.document);
});

router.get('/areas/:areaId/rooms', (req, res) =>
{
	findAll(db.models.rooms, res, {where: {areaId: req.area.id}});
});

router.get('/areas/:areaId/items', (req, res) =>
{
	findAll(db.models.items, res, {where: {areaId: req.area.id}});
});

router.get('/areas/:areaId/npcs', (req, res) =>
{
	findAll(db.models.npcs, res, {where: {areaId: req.area.id}});
});

router.get('/areas/:areaId/instances', (req, res) =>
{
	findAll(db.models.instances, res, {where: {areaId: req.area.id}});
});