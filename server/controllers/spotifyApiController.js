const axios = require("axios");
require("dotenv").config();
const _ = require("lodash");
const apiURL = process.env.SPOTIFY_API_URL;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { getApiToken } = require("./getApiToken");
const token = getApiToken();

async function searchForArtist(req, res) {
  try {
    await prisma.request.create({
      data: {
        artist: req.body.artist,
        userip: req.ip,
      },
    });
    const searchArtist = await axios.get(
      `${apiURL}/search?query=${req.body.artist}&type=artist&market=us&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${await token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const artistId = searchArtist.data.artists.items[0].id;

    const includeAlbums = await axios.get(`${apiURL}/artists/${artistId}/albums?market=UY`, {
      headers: {
        Authorization: `Bearer ${await token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const albumIds = includeAlbums.data.items.map((album) => album.id);

    const response = await axios.get(`https://api.spotify.com/v1/albums`, {
      params: { ids: albumIds.join(",") },
      headers: {
        Authorization: "Bearer " + (await token),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    res.json({
      albums: _.orderBy(response.data.albums, ["popularity"], ["desc"]),
      artist: searchArtist.data.artists,
    });
  } catch (error) {
    console.error(error);
  }
}

async function getAll(req, res) {
  try {
    const allRequests = await prisma.request.findMany();
    res.json({ allRequests: allRequests });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  searchForArtist,
  getAll,
};
