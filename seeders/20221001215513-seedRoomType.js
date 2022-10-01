"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"roomTypes",
			[
				{
					name: "Small room with 1 double or 2 singles",
					price: 85,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Medium room with 1 double and 1 sofa",
					price: 105,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Large room with 1 double and 2 sofa's",
					price: 125,
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
