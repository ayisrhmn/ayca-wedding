import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

interface FrontCoverProps {
  femaleName: string;
  maleName: string;
  guestName: string;
  onClick: () => void;
}

const FrontCover = (props: FrontCoverProps) => {
  return (
    <div className="aycawd-fullbg" data-aos="fade-down">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <div className="mt-4 p-4">
              <p className="mb-2 text-center text-white wd-title">
                The Wedding Of
              </p>
              <h4 className="mb-1 text-center text-white wd-couplename font-weight-bold">
                {props.femaleName} & {props.maleName}
              </h4>
              {props.guestName.length !== 0 && (
                <>
                  <p className="mb-1 text-center wd-for-txt">Untuk</p>
                  <p className="mb-3 text-center text-white wd-guestname">
                    {props.guestName}
                  </p>
                </>
              )}
              <div className="d-flex justify-content-center">
                <Button
                  variant="light"
                  size="sm"
                  className="btn-open-invit"
                  onClick={props.onClick}>
                  Open Invitation
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontCover;
