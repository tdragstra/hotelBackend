"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"rooms",
			[
				{
					size: 28,
					roomTypeId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					size: 32,
					roomTypeId: 2,
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
