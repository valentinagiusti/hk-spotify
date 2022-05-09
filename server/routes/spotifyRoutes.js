const express = require("express");
const {
  getNewReleases,
  getArtist,
  getArtistAlbum,
  searchForArtist,
  storeRequest,
} = require("../controllers/spotifyController");
const spotifyRoutes = express.Router();

spotifyRoutes.get("/new-releases", getNewReleases);
spotifyRoutes.get("/get-artist", getArtist);
spotifyRoutes.get("/get-artist-album", getArtistAlbum);
spotifyRoutes.post("/search-artist", searchForArtist);

module.exports = spotifyRoutes;
