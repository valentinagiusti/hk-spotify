
# Musify

This web app allows you to search your favourite artist's albums provided by the Spotify API. It shows them from the least to the most popular.


## Acknowledgements

 - [Spotify API](https://developer.spotify.com/documentation/web-api/)
 
 
## Deployment

To start this project positionate with the terminal on the server folder

```bash
  npm start
```

And then on the client folder

```bash
  node server.js
```

## Environment Variables

To run this project, you will need to make a copy of the env.example file and add the following:

Spotify API variables, to get these you must enter
https://developer.spotify.com/documentation/web-api/
and get you credentials 

`SPOTIFY_API_ID`

`SPOTIFY_CLIENT_SECRET`

Then on the DATABASE_URL, you must complete it with your own database information.

`DATABASE_URL`
