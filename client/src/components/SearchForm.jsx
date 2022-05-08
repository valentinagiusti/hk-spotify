import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import ArtistAlbums from "./ArtistAlbums";

function SearchForm() {
  const [artist, setArtist] = useState("");
  const [artistInfo, setArtistInfo] = useState("");
  const navigate = useNavigate();

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
      <Form
        method="POST"
        onSubmit={handleSearch}
        className="d-flex flex-row justify-content-center my-5"
      >
        <Form.Group className="d-flex flex-row align-items-center">
          <Form.Label className="d-none">
            Search for your favourite artists!{" "}
          </Form.Label>
          <Form.Control
            id="artist"
            name="artist"
            value={artist}
            onChange={(ev) => setArtist(ev.target.value)}
            type="text"
            placeholder="Insert artist's name or group here.."
          />
        </Form.Group>
        <Button className=" " variant="primary" type="submit">
          Search
        </Button>
      </Form>
      {artistInfo && (
        <div>
          <h1>{artistInfo.artist_info.artists.items[0].name}</h1>
          {artistInfo.albums_artist.items.map((album) => (
            <div>
              <img src={album.images[0].url} alt="ss" />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default SearchForm;
