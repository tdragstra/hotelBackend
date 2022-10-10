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
				{
					roomTypeId: 3,
					optionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					roomTypeId: 1,
					optionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					roomTypeId: 1,
					optionId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					roomTypeId: 1,
					optionId: 4,
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
