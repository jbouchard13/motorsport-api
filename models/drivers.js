const Drivers = sequelize.define("Drivers", {
  name: DataTypes.STRING,
  allowNull: false,
});

module.exports = Drivers;
