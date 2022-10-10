"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class reservationRoom extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	reservationRoom.init(
		{
			roomId: DataTypes.INTEGER,
			reservationId: DataTypes.INTEGER,
			singleBeds: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			requestBalcony: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			requestGroundFloor: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			sequelize,
			modelName: "reservationRoom",
		}
	);
	return reservationRoom;
};
