"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"rooms",
			[
				{
					size: 26,
					roomTypeId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					size: 26,
					roomTypeId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					size: 26,
					roomTypeId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					size: 38,
					roomTypeId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("rooms", null, {});
	},
};
