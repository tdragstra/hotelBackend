"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("hotelConfigs", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			locationLat: {
				type: Sequelize.FLOAT,
			},
			locationLong: {
				type: Sequelize.FLOAT,
			},
			contactEmail: {
				type: Sequelize.STRING,
			},
			adminEmail: {
				type: Sequelize.STRING,
			},
			seoDiscription: {
				type: Sequelize.STRING,
			},
			seoKeywords: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("hotelConfigs");
	},
};
