"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"options",
			[
				{
					name: "Free Wi-Fi",
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
				{
					name: "Fan",
					icon: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Free toiletries",
					icon: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Satellite channels",
					icon: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Upper floors accessible by stairs",
					icon: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Heating",
					icon: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Bathroom/shower in room",
					icon: 7,
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
