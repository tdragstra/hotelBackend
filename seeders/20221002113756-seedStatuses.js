"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"statuses",
			[
				{
					name: "POA and Awaiting confirmation",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Paid and awaiting confirmation",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Reservation confirmed",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Reservation canceled",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("statuses", null, {});
	},
};
