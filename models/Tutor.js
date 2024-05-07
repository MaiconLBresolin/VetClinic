const { DataTypes } = require("sequelize")

const db = require("../db/connection")

const Tutor = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    required: true,
  },
  zipCode: {
    type: DataTypes.STRING,
    required: true,
  },
})

module.exports = Tutor
