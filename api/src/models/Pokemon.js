const { Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ataque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo2: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  });
};
