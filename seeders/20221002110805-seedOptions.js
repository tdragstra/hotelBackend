"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"options",
			[
				{
					name: "Wi-Fi",
					icon: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Flatscreen TV",
					icon: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("options", null, {});
	},
};
