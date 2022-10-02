"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"hotelConfigs",
			[
				{
					name: "Gastehaus Moser",
					locationLat: 47.61345123595766,
					locationLong: 7.612972795662042,
					contactEmail: "timbo040@gmail.com",
					adminEmail: "timbo040@gmail.com",
					seoKeywords: "hotel,moser,gastehaus,germany",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("hotelConfigs", null, {});
	},
};
