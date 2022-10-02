"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			isAdmin: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			address1: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			address2: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			houseNumber1: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			houseNumber2: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			postalCode: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			country: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			business: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			businessName: {
				type: Sequelize.STRING,
			},
			businessTaxNr: {
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
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("users");
	},
};
