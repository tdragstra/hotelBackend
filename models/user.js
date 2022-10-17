"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			user.hasMany(models.reservation, { foreignKey: "userId" }); //implied but still
		}
	}
	user.init(
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
			},
			address1: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			address2: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			houseNumber1: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			houseNumber2: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			postalCode: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			business: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			businessName: {
				type: DataTypes.STRING,
			},
			businessTaxNr: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "user",
		}
	);
	return user;
};

// Table user {
//   id int [pk, increment]
//   name varchar
//   email varchar
//   isAdmin boolean
//   address varchar
//   address2 varchar
//   addressNr1 int
//   addressNr2 varchar
//   postalCode varchar
//   countryId int
//   business boolean
//   businessTaxNr varchar
