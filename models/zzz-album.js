'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    albumName: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};