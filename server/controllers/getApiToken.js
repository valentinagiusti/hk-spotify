const axios = require("axios");
const qs = require("qs");

const client_id = process.env.SPOTIFY_API_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret

const auth_token = Buffer.from(`${client_id}:${client_secret}`, "utf-8").toString("base64");

const getApiToken = async (req, res) => {
  try {
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = process.env.SPOTIFY_URL_TOKEN;
    const data = qs.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    //return access token
    return response.data.access_token;
    //console.log(response.data.access_token);
  } catch (error) {
    //on fail, log the error in console
    console.log(error);
  }
};

module.exports = {
  getApiToken,
};
