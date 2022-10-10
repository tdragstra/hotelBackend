"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class hotelConfig extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	hotelConfig.init(
		{
			name: DataTypes.STRING,
			locationLat: DataTypes.FLOAT,
			locationLong: DataTypes.FLOAT,
			contactEmail: { type: DataTypes.STRING, allowNull: false },
			adminEmail: { type: DataTypes.STRING, allowNull: false },
			seoDescription: {
				type: DataTypes.STRING,
				defaultValue: "Gastehaus Moser in Weil am Rhein, Germany",
			},
			seoKeywords: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "hotelConfig",
		}
	);
	return hotelConfig;
};
