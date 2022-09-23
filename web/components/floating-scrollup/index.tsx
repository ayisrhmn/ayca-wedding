import React from 'react';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface FloatingScrollUpProps {
  onClick: any;
}

const FloatingScrollUp = (props: FloatingScrollUpProps) => {
  return (
    <div
      className="floating-scrollup"
      id="btn_scrollup"
      onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronUp} color={'#414141'} />
    </div>
  );
};

export default FloatingScrollUp;
