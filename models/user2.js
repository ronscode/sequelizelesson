'use strict';
module.exports = (sequelize, DataTypes) => {
  const user2 = sequelize.define('user2', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  user2.associate = function(models) {
    // associations can be defined here
  };
  return user2;
};