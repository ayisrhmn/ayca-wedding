import React from 'react';
import {Modal} from 'react-bootstrap';
import {faGift} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface FloatingQRProps {
  onClick: Function | any;
  show: boolean;
  onHide: Function | any;
  place: string;
}

const FloatingQR = (props: FloatingQRProps) => {
  const [show, setShow] = React.useState(props.show);
  const handleClose = () => {
    props.onHide?.();
    setShow(false);
  };

  React.useEffect(() => {
    if (props.show) {
      setShow(props.show);
    } else {
      handleClose();
    }

    return () => {};
  }, [props.show]);

  return (
    <>
      <div className="floating-qr" onClick={props?.onClick}>
        <FontAwesomeIcon icon={faGift} color={'#414141'} />
      </div>

      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Header closeButton>
          <Modal.Title className="gift-title">Digital Gift</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-0 p-0">
          <img
            src={
              props.place === 'kdr'
                ? '/img/qr-bca-kdr.jpg'
                : '/img/qr-bca-tlg.jpg'
            }
            className="d-block w-100 img-qr-gift"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FloatingQR;
