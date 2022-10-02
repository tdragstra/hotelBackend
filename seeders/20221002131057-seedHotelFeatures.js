"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"hotelFeatures",
			[
				{
					name: "Trainstation",
					type: "location",
					distanceTo: 2.5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Airport",
					type: "location",
					distanceTo: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Dogs allowed",
					type: "house rules",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("hotelFeatures", null, {});
	},
};
