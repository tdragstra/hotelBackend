"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class room extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			room.hasOne(models.roomType, { foreignKey: "roomTypeId" }); // this would be implied but still.
			room.belongsToMany(models.reservation, { through: "reservationRoom" });
		}
	}
	room.init(
		{
			size: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "room",
		}
	);
	return room;
};
