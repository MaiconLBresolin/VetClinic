const { DataTypes } = require("sequelize")

const db = require("../db/connection")

const Tutor = require("./Tutor")

const Pet = db.define("Pet", {
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
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //  tutorId: {
  //    type: DataTypes.INTEGER,
  //    allowNull: false,
  //  },
})

Tutor.hasMany(Pet)
Pet.belongsTo(Tutor)

module.exports = Pet
