import React, { useState } from "react";
import axios from "axios";
import { Form, Container, Button, Spinner } from "react-bootstrap";
import ArtistAlbums from "./ArtistAlbums";

function SearchForm() {
  const [artist, setArtist] = useState("");
  const [artistInfo, setArtistInfo] = useState("");
  const [albums, setAlbums] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoad(true);

    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/search-artist`,
      data: {
        artist: artist,
      },
    });
    setArtistInfo(response.data.artist);
    setAlbums(response.data.albums);
    setLoad(false);
    setError(response.data.error);
  };

  return (
    <Container>
      <Form method="POST" onSubmit={handleSearch} className=" my-5">
        <Form.Group>
          <Form.Label className="fs-4" id="form-label">
            DISCOVER YOUR NEW FAVOURITE ALBUM TODAY!{" "}
          </Form.Label>
          <Form.Control
            disabled={load}
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
          variant="outline-light"
          type="submit"
        >
          Search
        </Button>
      </Form>
      {load && (
        <Spinner animation="border mx-auto" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && <p className="text-white">{error}</p>}
      <ArtistAlbums artistInfo={artistInfo} albums={albums} />
    </Container>
  );
}

export default SearchForm;
