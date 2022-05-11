function ArtistAlbum({ artistInfo, albums }) {
  return (
    <>
      {artistInfo && (
        <div>
          <div className="row g-4 text-center">
            <h1 className="text-white">
              {artistInfo && artistInfo.items[0].name}'s albums
            </h1>

            {albums.map((album) => (
              <ul
                key={album.images[0].url}
                className="col-md-3 d-flex justify-content-around"
              >
                <li>
                  <img
                    className="img-fluid img-album"
                    src={album.images[0].url}
                    alt={artistInfo.items[0].name}
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
