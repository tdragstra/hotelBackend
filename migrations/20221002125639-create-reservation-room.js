"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("reservationRooms", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			roomId: {
				type: Sequelize.INTEGER,
				references: {
					model: "rooms",
					key: "id",
				},
				allowNull: false,
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			reservationId: {
				type: Sequelize.INTEGER,
				references: {
					model: "reservations",
					key: "id",
				},
				allowNull: false,
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			singleBeds: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			requestBalcony: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			requestGroundFloor: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
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
		await queryInterface.dropTable("reservationRooms");
	},
};
