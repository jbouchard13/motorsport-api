const { DataTypes } = require("sequelize");

const Teams = require("./teams");
const Drivers = require("./drivers");
const Manufacturers = sequelize.define("Manufacturers", {
  name: DataTypes.STRING,
  allowNull: false,
});

Manufacturers.belongsTo(Teams);

Manufacturers.belongsTo(Drivers);

module.export = Manufacturers;
