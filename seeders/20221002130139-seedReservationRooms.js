"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"reservationRooms",
			[
				{
					reservationId: 1,
					roomId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					reservationId: 1,
					roomId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("reservationRooms", null, {});
	},
};
