"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("reservations", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			fromDate: {
				type: Sequelize.DATEONLY,
				allowNull: false,
			},
			toDate: {
				type: Sequelize.DATEONLY,
				allowNull: false,
			},
			// statusId: {
			// 	type: Sequelize.INTEGER,
			// },
			adults: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			children: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
			arrivalTime: {
				type: Sequelize.TIME,
				allowNull: false,
			},
			totalPrice: {
				type: Sequelize.FLOAT,
			},
			// userId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
			// roomId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
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
		await queryInterface.dropTable("reservations");
	},
};
