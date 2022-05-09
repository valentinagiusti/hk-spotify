const { SearchedArtist } = require("../models/SearchedArtist");

module.exports = async () => {
  const searchedArtist = [
    {
      artist: "yolanda",
      userip: "1221212212",
    },
  ];

  console.log("[Database] Se corrió el seeder de searchedArtist.");
};
