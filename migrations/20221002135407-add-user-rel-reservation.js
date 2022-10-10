"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("reservations", "userId", {
			type: Sequelize.INTEGER,
			references: {
				model: "users",
				key: "id",
			},
			allowNull: false,
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("reservations", "userId");
	},
};
