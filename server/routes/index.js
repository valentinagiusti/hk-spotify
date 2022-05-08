const publicRoutes = require("./publicRoutes");
const spotifyRoutes = require("./spotifyRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use(spotifyRoutes);
};
