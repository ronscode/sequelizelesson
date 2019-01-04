'use strict';
module.exports = (sequelize, DataTypes) => {
  const user2s = sequelize.define('user2s', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    othernickname: DataTypes.STRING
  }, {});
  user2s.associate = function(models) {
    // associations can be defined here
  };
  return user2s;
};