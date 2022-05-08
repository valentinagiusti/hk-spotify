const express = require("express");
const { getNewReleases } = require("../controllers/spotifyController");
const { getAuth } = require("../middlewares/getAuth");
const spotifyRoutes = express.Router();

spotifyRoutes.get("/novedades", getNewReleases);

module.exports = spotifyRoutes;
