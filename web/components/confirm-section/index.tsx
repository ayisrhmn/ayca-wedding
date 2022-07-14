import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';

const ConfirmSection = () => {
  const [isConfirm, setIsConfirm] = React.useState(false);
  const [valConfirm, setValConfirm] = React.useState('');

  React.useEffect(() => {
    return () => {};
  }, [valConfirm]);

  const onConfirm = (val: any) => {
    setIsConfirm(true);
    setValConfirm(val);
    alert(val);
  };

  return (
    <section className="confirm-section py-5">
      <Container className="my-5 py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card
              className="confirm-card d-flex align-items-center"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body
                className="my-4"
                data-aos="fade"
                data-aos-duration="2000">
                {!isConfirm ? (
                  <>
                    <Card.Title className="title text-center mb-3 pb-3">
                      Apakah Anda Akan Hadir?
                    </Card.Title>
                    <div className="btn-wrapper mt-3 pt-3">
                      <Button
                        variant="light"
                        className="mx-2 btn-confirm accept btn-sm"
                        onClick={() => onConfirm('Hadir')}>
                        Ya hadir dong! &#128526;
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-2 btn-confirm btn-sm"
                        onClick={() => onConfirm('Tidak Hadir')}>
                        Maaf nih, tidak bisa hadir &#128532;
                      </Button>
                    </div>
                  </>
                ) : (
                  <Card.Title className="title text-center">
                    Terima Kasih atas responnya yaa! &#10084;
                  </Card.Title>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConfirmSection;
