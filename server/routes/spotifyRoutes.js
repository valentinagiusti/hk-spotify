const express = require("express");
const { searchForArtist } = require("../controllers/spotifyApiController");
const spotifyRoutes = express.Router();

spotifyRoutes.post("/search-artist", searchForArtist);

module.exports = spotifyRoutes;
