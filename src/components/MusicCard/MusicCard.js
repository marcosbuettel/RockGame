import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CBadge,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
} from '@coreui/react';
import { useState, useEffect } from 'react';
import Songs from '../Songs/Songs';
import playButton from '../../assets/play.png';
import pauseButton from '../../assets/pause.png';
import MusicCardStyled from './MusicCardStyled';
import 'react-notifications/lib/notifications.css';
import React from 'react';

const MusicCard = ({ bandName, music }) => {
  const [checkSong, setCheckSong] = useState(false);
  const [input, setInput] = useState('');
  const [toast, addToast] = useState(0);

  let selectedSong;
  Songs.map((song) => {
    if (song.title.match(music)) {
      selectedSong = song.song;
    }
  });

  const [playSong, setPlaySong] = useState(false);
  const [audio] = useState(new Audio(selectedSong));

  const playPause = () => {
    setPlaySong(!playSong);
  };

  useEffect(() => {
    playSong ? audio.play() : audio.pause();
  }, [playSong]);

  const changeInputValue = (e) => {
    setInput(e.target.value);
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      if (bandName.toUpperCase() === input.toUpperCase()) {
        setPlaySong(false);
        setCheckSong(true);
      } else {
        addToast(exampleToast);
      }
    }
  };

  const exampleToast = (
    <CToast color="danger" style={{ width: 'fit-content' }}>
      <CToastBody>
        <p style={{ color: 'white', fontSize: '20px', marginBottom: '0px' }}>
          INCORRETO! <br />
          Tente novamente.
        </p>
      </CToastBody>
    </CToast>
  );

  return (
    <MusicCardStyled>
      <CCard color="dark " style={{ width: '18rem' }}>
        <CCardBody>
          {!playSong ? (
            <img src={playButton} onClick={playPause} />
          ) : (
            <img src={pauseButton} onClick={playPause} />
          )}
          {checkSong !== true ? (
            <input
              value={input}
              onChange={changeInputValue}
              onKeyPress={pressEnter}
            />
          ) : (
            <>
              <br />
              <br />
              <CBadge color="success">CORRETO!</CBadge>
            </>
          )}
        </CCardBody>
      </CCard>
      <CToaster push={toast} placement="top" />
    </MusicCardStyled>
  );
};

export default MusicCard;
