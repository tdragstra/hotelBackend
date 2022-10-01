"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("rooms", "roomTypeId", {
			type: Sequelize.INTEGER,
			references: {
				model: "roomTypes",
				key: "id",
			},
			allowNull: false,
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("rooms", "roomTypeId");
	},
};
