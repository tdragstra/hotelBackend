"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("roomTypes", {
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
			price: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			singleBeds: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			available: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			capacity: {
				type: Sequelize.INTEGER,
				alowNull: false,
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
		await queryInterface.dropTable("roomTypes");
	},
};
