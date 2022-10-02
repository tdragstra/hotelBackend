"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class reservation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			reservation.hasOne(models.status);
		}
	}
	reservation.init(
		{
			fromDate: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			toDate: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			// statusId: DataTypes.INTEGER,
			arrivalTime: { type: DataTypes.TIME, allowNull: false },
			totalPrice: DataTypes.FLOAT,
			persons: { type: DataTypes.INTEGER, allowNull: false },
			// userId: { type: DataTypes.INTEGER, allowNull: false },
			// roomId: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "reservation",
		}
	);
	return reservation;
};
