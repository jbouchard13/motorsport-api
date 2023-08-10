const { DataTypes } = require("sequelize");
const Manufacturers = require("./manufacturers");

const Teams = sequelize.define("Teams", {
  name: DataTypes.STRING,
  allowNull: false,
});

Teams.hasOne(Manufacturers);

module.export = Teams;
