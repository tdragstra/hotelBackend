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
const { SALT_ROUNDS } = require("../config/constants");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");

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
	const { fromDate, toDate, user, rooms, guests, arrivalTime } = req.body.e;
	// console.log(req.body.e);
	try {
		const {
			firstName,
			lastName,
			email,
			address1,
			address2,
			postalCode,
			password,
			houseNumber1,
			houseNumber2,
			selectCountry,
			business,
			businessName,
			businessTaxNr,
		} = user;

		const user1 = await User.create({
			firstName,
			lastName,
			email,
			password: bcrypt.hashSync(password, SALT_ROUNDS),
			address1,
			address2,
			houseNumber1,
			houseNumber2,
			postalCode,
			country: selectCountry,
			business,
			businessName,
			businessTaxNr,
		});

		const reservation = await Reservation.create({
			fromDate,
			toDate,
			arrivalTime,
			totalPrice: 200,
			adults: guests.adults,
			children: guests.children,
			userId: user1.id,
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

		console.log("------------pass---------", user1.password);
		delete user1.dataValues["password"]; // don't send back the password hash
		const token = toJWT({ userId: user1.id });
		// console.log(arrayOfPromises);
		// const userData = User.findByPk(user1.id, { include: { model: Reservation, include: Room } })
		// res.status(200).send({ token, userData });
		res
			.status(200)
			.send({ user1, token, reservation, message: "Reservation success" });

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
