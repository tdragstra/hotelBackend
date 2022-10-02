"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"reservations",
			[
				{
					fromDate: "2022-12-16",
					toDate: "2022-12-17",
					statusId: 1,
					arrivalTime: "15:22:24",
					persons: 2,
					totalPrice: 86,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fromDate: "2022-12-16",
					toDate: "2022-12-17",
					statusId: 2,
					arrivalTime: "15:22:24",
					persons: 2,
					totalPrice: 86,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("reservations", null, {});
	},
};
