const { DataTypes } = require("sequelize")

const db = require("../db/connection")

const Tutor = require("./Tutor")

const Pet = db.define("pets", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idTutor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Tutor.hasMany(Pet)
Pet.belongsTo(Tutor)

module.exports = Pet
