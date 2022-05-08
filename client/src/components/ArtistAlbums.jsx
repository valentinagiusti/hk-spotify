import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArtistAlbum({ artistInfo }) {
  return (
    <div>
      <p>{artistInfo}</p>
    </div>
  );
}

export default ArtistAlbum;
