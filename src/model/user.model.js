const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const User = seq.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'username,unique'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: 'password'
  }
})

module.exports = User
