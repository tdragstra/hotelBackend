"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class roomType extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			roomType.hasMany(models.room);
			roomType.belongsToMany(models.option, {
				through: "roomOption",
				foreignKey: "roomTypeId",
			});
		}
	}
	roomType.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},

			capacity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			available: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			sequelize,
			modelName: "roomType",
		}
	);
	return roomType;
};
