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
			reservation.belongsTo(models.status);
			reservation.belongsToMany(models.room, { through: "reservationRoom" });
			reservation.hasMany(models.reservationRoom);
			reservation.belongsTo(models.user);
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
			adults: { type: DataTypes.INTEGER, allowNull: false },
			children: { type: DataTypes.INTEGER },
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
