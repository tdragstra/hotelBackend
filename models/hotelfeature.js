"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class hotelFeature extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	hotelFeature.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			type: {
				type: DataTypes.ENUM,
				allowNull: false,
				values: ["tech", "house rules", "location", "features"],
			},
			distanceTo: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: "hotelFeatures",
		}
	);
	return hotelFeature;
};
