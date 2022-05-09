module.exports = (sequelize, Model, DataTypes) => {
  class Request extends Model {}

  Request.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      userip: {
        type: DataTypes.STRING,
      },
      artist: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "request",
    },
  );

  return Request;
};
