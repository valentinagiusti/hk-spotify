const axios = require("axios");
require("dotenv").config();
const { getAuth } = require("./getAuth");
const apiURL = process.env.SPOTIFY_API_URL;
const token = getAuth();

// Display a listing of the resource.
async function getNewReleases(req, res) {
  try {
    const response = await axios.get(`${apiURL}/browse/new-releases`, {
      headers: {
        Authorization: `Bearer ${await token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getArtist(req, res) {
  try {
    const response = await axios.get(`${apiURL}/artists/0TnOYISbd1XYRBk9myaseg`, {
      //id de ejemplo
      headers: {
        Authorization: `Bearer ${await token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getArtistAlbum(req, res) {
  try {
    const response = await axios.get(`${apiURL}/artists/0TnOYISbd1XYRBk9myaseg/albums`, {
      //id de ejemplo
      headers: {
        Authorization: `Bearer ${await token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  getNewReleases,
  getArtist,
  getArtistAlbum,
  store,
  edit,
  update,
  destroy,
};
