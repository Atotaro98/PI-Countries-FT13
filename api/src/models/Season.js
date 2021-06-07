const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('season', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
  });

};