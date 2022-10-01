"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"users",
			[
				{
					firstName: "Moritz",
					lastName: "Hagin",
					email: "timbo040@gmail.com",
					password: bcrypt.hashSync("123", SALT_ROUNDS),
					address1: "Bergstraat",
					address2: "toevoegingRegel",
					houseNumber1: "10",
					houseNumber2: "B",
					postalCode: "12311",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Tim",
					lastName: "Dragstra",
					email: "timbo040@gmail.com",
					password: bcrypt.hashSync("123", SALT_ROUNDS),
					isAdmin: true,
					address1: "Bergstraat",
					houseNumber1: "10",
					houseNumber2: "8",
					postalCode: "3811NH",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", null, {});
	},
};

// {
// 			name: {
// 				type: DataTypes.STRING,
// 				allowNull: false,
// 			},
// 			lastName: {
// 				type: DataTypes.STRING,
// 				allowNull: false,
// 			},
// 			email: {
// 				type: DataTypes.STRING,
// 				unique: true,
// 				allowNull: false,
// 			},
// 			password: {
// 				type: DataTypes.STRING,
// 				allowNull: false,
// 			},
// 			isAdmin: {
// 				type: DataTypes.BOOLEAN,
// 				defaultValue: false,
// 			},
// 			address: {
// 				type: DataTypes.STRING,
// 				allowNull: false,
// 			},
// 			address2: {
// 				type: DataTypes.STRING,
// 				allowNull: true,
// 			},
// 			addressNr1: {
// 				type: DataTypes.INTEGER,
// 				allowNull: false,
// 			},
// 			addressNr2: {
// 				type: DataTypes.INTEGER,
// 				allowNull: true,
// 			},
// 			postalCode: {
// 				type: DataTypes.STRING,
// 				allowNull: false,
// 			},
// 			country: {
// 				type: DataTypes.STRING,
// 				allowNull: false,
// 			},
// 			business: {
// 				type: DataTypes.BOOLEAN,
// 				defaultValue: false,
// 			},
// 			businessName: {
// 				type: DataTypes.STRING,
// 			},
// 			businessTaxNr: {
// 				type: DataTypes.STRING,
// 			},
// 		},
