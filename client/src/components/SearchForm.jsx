import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import ArtistAlbums from "./ArtistAlbums";

function SearchForm() {
  const [artist, setArtist] = useState("");
  const [artistInfo, setArtistInfo] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(artist);
    const response = await axios({
      method: "POST",
      url: "http://localhost:8888/search-artist",
      data: {
        artist: artist,
      },
    });
    setArtistInfo(response.data);
    console.log(artistInfo);
  };

  return (
    <Container>
      <Form method="POST" onSubmit={handleSearch} className=" my-5">
        <Form.Group>
          <Form.Label className="fs-4" id="form-label">
            DISCOVER YOUR NEW FAVOURITE ALBUM TODAY!{" "}
          </Form.Label>
          <Form.Control
            className="fs-5"
            id="artist"
            name="artist"
            value={artist}
            onChange={(ev) => setArtist(ev.target.value)}
            type="text"
            placeholder="Insert artist's name or group here.."
          />
        </Form.Group>
        <Button
          className="my-3 w-25 fs-5"
          variant="outline-success"
          type="submit"
        >
          Search
        </Button>
      </Form>
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
    </Container>
  );
}

export default SearchForm;
