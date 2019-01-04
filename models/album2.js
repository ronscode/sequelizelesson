'use strict';
module.exports = (sequelize, DataTypes) => {
  const album2 = sequelize.define('album2', {
    albumName: DataTypes.STRING,
    albumYear: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER
  }, {});
  album2.associate = function(models) {
    // associations can be defined here
  };
  return album2;
};