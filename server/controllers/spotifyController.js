const axios = require("axios");
const { response } = require("express");
const { getAuth } = require("../middlewares/getAuth");

const token = getAuth();

// Display a listing of the resource.
async function getNewReleases(req, res) {
  try {
    const response = await axios.get("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        Authorization: `Bearer ${await token}`,
        /* "Content-Type": "application/x-www-form-urlencoded", */
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
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
