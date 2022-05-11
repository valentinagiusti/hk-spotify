const axios = require("axios");
const apiURL = process.env.SPOTIFY_API_URL;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { getApiToken } = require("./getApiToken");
const token = getApiToken();

const _ = require("lodash");

async function searchForArtist(req, res) {
  try {
    // register search on database
    await prisma.request.create({
      data: {
        artist: req.body.artist,
        userip: req.ip,
      },
    });
    //search the first artists on the list
    const searchArtist = await axios.get(
      `${apiURL}/search?query=${req.body.artist}&type=artist&market=us&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${await token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
    //search albums of the artist with id obtained from previous step
    const artistId = searchArtist.data.artists.items[0].id;

    const includeAlbums = await axios.get(`${apiURL}/artists/${artistId}/albums?market=UY`, {
      headers: {
        Authorization: `Bearer ${await token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const albumIds = includeAlbums.data.items.map((album) => album.id);
    //with all ids search for the albums
    const response = await axios.get(`${apiURL}/albums`, {
      params: { ids: albumIds.join(",") },
      headers: {
        Authorization: "Bearer " + (await token),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    //order albums by popularity with external library lodash
    res.json({
      albums: _.orderBy(response.data.albums, ["popularity"], ["desc"]),
      artist: searchArtist.data.artists,
    });
  } catch (error) {
    console.error(error);
  }
}
//get all searches from database
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
