const { Router } = require("express");
const auth = require("../auth/middleware");
const Room = require("../models").room;
const RoomType = require("../models").roomType;
const RoomOption = require("../models").roomOption;
const Option = require("../models").option;

const router = new Router();

router.get("/roomtypes", async (req, res, next) => {
	try {
		const roomtype = await RoomType.findAll();
		res.status(200).send({ message: "ok", roomtype });
	} catch (e) {
		console.log(e.message);
	}
});

router.get("/roomoptions", async (req, res, next) => {
	try {
		const roomoptions = await RoomOption.findAll({
			include: [
				{
					model: RoomType,
					required: false,
				},
				{
					model: Option,
					required: false,
					attributes: {
						exclude: ["password", "created-at", "isAdmin", "accountBlocked"],
					},
				},
			],
		});
		res.status(200).send({ message: "ok", roomoptions });
	} catch (e) {
		console.log(e.message);
	}
});

router.get("/features", async (req, res, next) => {
	try {
		const features = await Features.findAll();

		res.status(200).send(features);
	} catch (e) {
		console.log(`error`, e.message);
	}
});

module.exports = router;
