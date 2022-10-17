const { Router } = require("express");
const auth = require("../auth/middleware");
const Room = require("../models").room;
const RoomType = require("../models").roomType;
const RoomOption = require("../models").roomOption;
const Option = require("../models").option;
const Features = require("../models/").hotelFeature;
const Reservations = require("../models").reservation;

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
		console.log("error", e.message);
	}
});

router.post("/features/create", async (req, res, next) => {
	try {
		// const {id} = req.params
		// const feature = Features.findByPk(id)

		const { name, type, distanceTo } = req.body;
		const feature = await Features.create({ name, type, distanceTo });
		res.status(200).send({ message: "Feature created", feature });
	} catch (e) {
		console.log("error", e.message);
	}
});

router.delete("/features/delete/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const feature = await Features.findByPk(id);

		await feature.destroy();
		res.status(200).send({ message: "Feature deleted", feature });
	} catch (e) {
		console.log("error", e.message);
	}
});

router.get("/reservations", async (req, res, next) => {
	try {
		const reservations = await Reservations.findAll();

		res.status(200).send(reservations);
	} catch (e) {
		"error", console.log(e);
	}
});

router.patch("/reservations/edit/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const reservation = await Reservations.findByPk(id);

		if (!req.body) {
			return console.log("nobody");
		}
		const { fromDate, toDate, totalPrice, adults, children } = req.body;
		reservation.update({ fromDate, toDate, totalPrice, adults, children });
		res.status(200).send({ reservation, message: "Reservation updated" });
	} catch (e) {
		"error", console.log(e);
	}
});

module.exports = router;
