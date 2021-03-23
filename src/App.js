import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // run code base on given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    let _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
 
      spotify.getPlaylist('5X6GcDc4xViEEp3Oq27WWb').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
  }, [token, dispatch]);

  console.log('👱', user);
  console.log('👽', token);

  return (
    <div className='app'>
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}
export default App;
