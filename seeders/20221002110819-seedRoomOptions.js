"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"roomOptions",
			[
				{
					roomTypeId: 1,
					optionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					roomTypeId: 2,
					optionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("roomOptions", null, {});
	},
};
