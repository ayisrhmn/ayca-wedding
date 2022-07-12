import React from 'react';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface FloatingToggleMusicProps {
  toggle: any;
  playing: boolean;
}

const FloatingToggleMusic = (props: FloatingToggleMusicProps) => {
  return (
    <div className="toggle-music" onClick={props?.toggle}>
      <FontAwesomeIcon
        icon={props?.playing ? faPause : faPlay}
        color={'#414141'}
      />
    </div>
  );
};

export default FloatingToggleMusic;
