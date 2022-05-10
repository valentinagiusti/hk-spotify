const axios = require("axios");
require("dotenv").config();
const { getApiToken } = require("./getApiToken");
const apiURL = process.env.SPOTIFY_API_URL;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Display a listing of the resource.

const token = getApiToken();

async function searchForArtist(req, res) {
  try {
    await prisma.request.create({
      data: {
        artist: req.body.artist,
        userip: await req.ip,
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

    const includeAlbums = await axios.get(
      `${apiURL}/artists/${artistId}/albums?market=UY&limit=50&offset=0`,
      {
        headers: {
          Authorization: `Bearer ${await token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    res.json({ artist_info: searchArtist.data, albums_artist: includeAlbums.data });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  searchForArtist,
};
