module.exports = (sequelize, Model, DataTypes) => {
  class SearchedArtist extends Model {}

  SearchedArtist.init(
    {
      artist: {
        type: DataTypes.STRING,
      },
      userip: {
        type: DataTypes.STRING,
      },
    },

    {
      sequelize,
      modelName: "searchedartist",
    },
  );

  return SearchedArtist;
};
