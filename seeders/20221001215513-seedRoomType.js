"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"roomTypes",
			[
				{
					name: "Room with 1 king size bed",
					price: 67,
					capacity: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Room with 1 king size or 2 single beds",
					price: 85,
					capacity: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Room with 1 king size and 1 extra bed",
					price: 105,
					capacity: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Room with 1 king size bed and 2 extra beds",
					price: 125,
					capacity: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("roomTypes", null, {});
	},
};
