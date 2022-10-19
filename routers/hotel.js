const e = require("express");
const { Router } = require("express");
const auth = require("../auth/middleware");
const Reservation = require("../models").reservation;
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
		user,
		rooms,
		// arrivalTime,
		// totalPrice,
		// adults,
		// children,
		// user.firstName,
		// user.lastName,
		// user.email,
		// // user.password,
		// user.address1,
		// user.address2,
		// user.houseNumber1,
		// user.houseNumber2,
		// postalCode,
		// country,
		// business,
		// businessName,
		// businessTaxNr,
	} = req.body.e;
	// console.log(req.body.e);
	try {
		const {
			firstName,
			lastName,
			email,
			address1,
			address2,
			houseNumber1,
			houseNumber2,
		} = user;

		const user1 = await User.create({
			firstName,
			lastName,
			email: "bla111111@gmail.com",
			password: "bla",
			address1,
			address2,
			houseNumber1,
			houseNumber2,
			postalCode: 1234,
			country: "Holland",
			// business: false,
			// businessName: 'hello'
			// businessTaxNr: '12'
		});

		const reservation = await Reservation.create({
			fromDate,
			toDate,
			arrivalTime: "15:15:15",
			totalPrice: 200,
			adults: 1,
			children: 1,
			userId: 1,
			statusId: 1,
		});
		const arrayOfPromises = rooms.map(async (item) => {
			const reservationRoom = await ReservationRoom.create({
				roomId: item.id,
				reservationId: reservation.id,
			});
			return reservationRoom;
		});
		await Promise.all(arrayOfPromises);

		// console.log(arrayOfPromises);
		// const userData = User.findByPk(user1.id, { include: { model: Reservation, include: Room } })
		// res.status(200).send({ token, userData });
		res
			.status(200)
			.send({ user1, reservation, message: "Reservation success" });

		// res.status(200).send({ message: "request ok", reservation, user });
	} catch (e) {
		console.log("erreurBack", e.message);
		next(e);
	}
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
