const { Router } = require("express");
const auth = require("../auth/middleware");
const Room = require("../models").room;
const RoomType = require("../models").roomType;
const RoomOption = require("../models").roomOption;
const Option = require("../models").option;
const Features = require("../models/").hotelFeature;
const Reservations = require("../models").reservation;
const User = require("../models").user;
const Status = require("../models").status;
const ReservationRooms = require("../models").reservationRoom;
const { Op } = require("sequelize");
const { getRounds } = require("bcrypt");
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
						// exclude: ["password", "created-at", "isAdmin", "accountBlocked"],
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
		console.log(type);

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
		if (!feature) {
			return res.status(404).send({ message: "Feature ID not found" });
		}
		res.status(200).send({ message: "Feature deleted", feature });
		await feature.destroy();
	} catch (e) {
		console.log("error", e.message);
	}
});

router.get("/reservations", async (req, res, next) => {
	try {
		const reservations = await Reservations.findAll({
			order: [["createdAt", "DESC"]],
			include: [
				{
					model: User,
					attributes: {
						exclude: ["password", "isAdmin"],
					},
				},
				{
					model: ReservationRooms,
					required: false,
					include: [
						{
							model: Room,
							required: false,
							include: [
								{
									model: RoomType,
									required: false,
								},
							],
						},
					],

					// include: Room,
				},
				{
					model: Status,
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
			],
			// 		attributes: {
			// 			exclude: ["password", "isAdmin"],
			// 		},
			// 	},
			// ],
		});
		console.log(reservations);
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
		const { fromDate, toDate, totalPrice, adults, children, reservationRooms } =
			req.body;
		await reservation.update({
			fromDate,
			toDate,
			totalPrice,
			adults,
			children,
		});

		await reservation.setRooms(null, {
			through: {},
		});

		const arrayOfPromises = reservationRooms.map(async (item) => {
			const reservationRoom = await ReservationRooms.create({
				roomId: item.roomId,
				reservationId: reservation.id,
				singleBeds: item.singleBeds,
				requestBalcony: item.requestBalcony,
				requestGroundFloor: item.requestGroundFloor,
			});
			return reservationRoom;
		});
		await Promise.all(arrayOfPromises);

		res.status(200).send({ reservation, message: "Reservation updated" });
	} catch (e) {
		"error", console.log(e);
	}
});

router.delete("/reservations/delete/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const reservation = await Reservations.findByPk(parseInt(id));
		if (!reservation) {
			console.log("-----not found");
			return res.status(404).send("Reservation not found");
		}

		// if (!isAdmin) {
		// 	return res.status(403).send({
		// 		message:
		// 			"Only admins can delete reservations, login with admin account",
		// 	});
		// }

		await reservation.destroy();
		res.status(200).send({ reservation, message: "Reservation deleted" });
	} catch (e) {
		"error", console.log(e);
	}
});

module.exports = router;
