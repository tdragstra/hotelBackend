"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("roomOptions", "roomTypeId", {
			type: Sequelize.INTEGER,
			references: {
				model: "roomTypes",
				key: "id",
			},
			allowNull: false,
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		}),
			await queryInterface.addColumn("roomOptions", "optionId", {
				type: Sequelize.INTEGER,
				references: {
					model: "options",
					key: "id",
				},
				allowNull: false,
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("roomOptions", "optionId");
		await queryInterface.removeColumn("roomOptions", "roomTypeId");
	},
};
