const { DataTypes } = require("sequelize");

const Series = sequelize.define("Series", {
  name: DataTypes.STRING,
  allowNull: false,
});

module.export = Series;
