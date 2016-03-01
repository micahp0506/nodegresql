'use strict';


module.exports = function (sequelize, DataTypes) {
  const Album = sequelize.define('Album', {
    AlbumId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Title: DataTypes.STRING,
    ArtistId: DataTypes.INTEGER
  }, {
    tableName: 'Album',
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Album.belongsTo(models.Artist, {foreignKey: 'ArtistId'});
      }
    }
  });

  return Album;
};
