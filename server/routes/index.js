const spotifyRoutes = require("./spotifyRoutes");

module.exports = (app) => {
  app.use(spotifyRoutes);
};
