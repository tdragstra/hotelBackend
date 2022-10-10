"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class roomOption extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			roomOption.belongsTo(models.roomType);
			roomOption.belongsTo(models.option);
		}
	}
	roomOption.init(
		{
			name: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "roomOption",
		}
	);
	return roomOption;
};
