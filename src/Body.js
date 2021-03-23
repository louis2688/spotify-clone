import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import { useDateLayerValue } from './DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'></div>
        <PlayCircleFilledIcon
          className='body__shuffle'
          // onClick={playPlaylist}
        />
        <FavoriteIcon fontSize='large' />
        <MoreHorizIcon />
        {/* list of songs */}
        {discover_weekly?.tracks.items.map(item => (
          <SongRow playSong={playSong} track={item.track} />
          ))}
      </div>
    </div>
  );
}

export default Body;
