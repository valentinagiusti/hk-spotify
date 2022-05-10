const express = require("express");
const { searchForArtist, getAll } = require("../controllers/spotifyApiController");
const spotifyRoutes = express.Router();

spotifyRoutes.post("/search-artist", searchForArtist);
spotifyRoutes.get("/searched-artists", getAll);

module.exports = spotifyRoutes;
