import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Container, Button } from "react-bootstrap";
import ArtistAlbums from "./ArtistAlbums";

function SearchForm() {
  const [artist, setArtist] = useState("");

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
    setArtist(response.data);
  };

  return (
    <Container>
      <Form
        onSubmit={handleSearch}
        className="d-flex flex-row justify-content-center my-5"
      >
        <Form.Group className="d-flex flex-row align-items-center">
          <Form.Label className="d-none">
            Search for your favourite artists!{" "}
          </Form.Label>
          <Form.Control
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
      <ArtistAlbums artist={artist} />
    </Container>
  );
}

export default SearchForm;
