import React from 'react';
import {Modal} from 'react-bootstrap';

interface ProtocolProps {
  show: boolean;
  place: string;
}

const ModalProtocol = (props: ProtocolProps) => {
  const [show, setShow] = React.useState(props.show);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="protocol-title">Covid 19 Protocol</Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-0 p-0">
        <img
          src={
            props.place === 'kdr'
              ? '/img/covid-protocol-kdr.jpg'
              : '/img/covid-protocol-tlg.jpg'
          }
          className="d-block w-100 img-protocol"
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalProtocol;
