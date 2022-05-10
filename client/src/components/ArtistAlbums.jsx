import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArtistAlbum({ artistInfo }) {
  return (
    <>
      {artistInfo && (
        <div>
          <div className="row g-4 text-center">
            <h1 className="text-white">
              {artistInfo.artist_info.artists.items[0].name}'s albums
            </h1>

            {artistInfo.albums_artist.items.map((album) => (
              <ul
                /*   key={artistInfo.id} */
                className="col-md-3 d-flex justify-content-around"
              >
                <li>
                  <img
                    className="img-fluid img-album"
                    src={album.images[0].url}
                    alt={artistInfo.artist_info.artists.items[0].name}
                  />
                  <p className="text-white my-5 ">{album.name}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ArtistAlbum;
