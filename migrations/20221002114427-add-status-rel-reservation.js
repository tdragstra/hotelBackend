"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("reservations", "statusId", {
			type: Sequelize.INTEGER,
			references: {
				model: "statuses",
				key: "id",
			},
			allowNull: false,
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("reservations", "statusId");
	},
};
