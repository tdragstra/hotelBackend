const e = require("express");
const { Router } = require("express");
const auth = require("../auth/middleware");
const Reservation = require("../models/reservation");
const Room = require("../models").room;
const RoomType = require("../models").roomType;
const ReservationRoom = require("../models").reservationRoom;
const HotelConfig = require("../models").hotelConfig;
const Features = require("../models").features;
const Option = require("../models").option;
const router = new Router();
const User = require("../models").user;

router.get("/rooms", async (req, res, next) => {
	try {
		const rooms = await Room.findAll({
			include: [
				{
					model: RoomType,
					include: [Option],
					required: false,
				},
			],
		});
		res.status(200).send({ message: "ok", rooms });
	} catch (e) {
		console.log(e.message);
	}
});

router.get("/hotel", async (req, res, next) => {
	try {
		const hotel = await HotelConfig.findAll();

		res.status(200).send(hotel);
	} catch (e) {
		console.log(`error`, e.message);
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

router.post("/createReservation", async (req, res, next) => {
	const {
		fromDate,
		toDate,
		arrivalTime,
		totalPrice,
		adults,
		children,
		firstName,
		lastName,
		email,
		password,
		address1,
		address2,
		houseNumber1,
		houseNumber2,
		postalCode,
		country,
		business,
		businessName,
		businessTaxNr,
	} = req.body;
	try {
		const user = await User.create({
			firstName,
			lastName,
			email,
			password,
			address1,
			address2,
			houseNumber1,
			houseNumber2,
			postalCode,
			country,
			business,
			businessName,
			businessTaxNr,
		});

		const reservation = Reservation.create({
			fromDate,
			toDate,
			arrivalTime,
			totalPrice,
			adults,
			children,
			userId: user.id,
			statusId: 1,
		});
		const arrayOfPromises = rooms.map(async (item) => {
			const reservationRoom = await ReservationRoom.create({
				roomId: item.id,
				reservationId: reservation.id,
			});
			return allRooms;
		});
		await Promise.all(arrayOfPromises);
	} catch (e) {}
});

module.exports = router;

// const reservations = await Reservation.findAll({
// 	where: { date: { [Op.gte]: date1 } },
// 	order: [["date", "ASC"]],

// 	include: [
// 		{
// 			model: Table,
// 		},
// 		{
// 			model: User,
// 			attributes: {
// 				exclude: ["password", "created-at", "isAdmin", "accountBlocked"],
// 			},
// 		},
// 	],
// });
