import moment from 'moment';
import React from 'react';
import {Col, Container, Row, Form, Button, Card} from 'react-bootstrap';

const GreetingsSection = () => {
  return (
    <section className="greetings-section py-5">
      <Container className="my-3">
        <h3 className="title mb-5" data-aos="fade" data-aos-duration="1000">
          Best Wishes &#10084;
        </h3>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form className="mb-5" data-aos="fade-up" data-aos-duration="2000">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="isform-label">Nama Kamu</Form.Label>
                <Form.Control
                  className="isform-input"
                  type="text"
                  placeholder="e.g. Steve Rogers"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGreetings">
                <Form.Label className="isform-label">
                  Tulis Ucapan Kamu
                </Form.Label>
                <Form.Control
                  className="isform-input"
                  as="textarea"
                  placeholder="e.g. Happily ever after <3"
                  required
                />
              </Form.Group>
              <Button variant="light" className="btn-greetings" type="submit">
                Kirim Ucapan
              </Button>
            </Form>
            <br />
            <div className="list-greetings mb-5" data-aos="fade-up" data-aos-duration="2000">
              {[...Array(4)]?.map((_, i: number) => (
                <>
                  <div className="d-flex mb-4" key={i}>
                    <div className="user-pic">
                      <h3 className="mb-0">T</h3>
                    </div>
                    <Card className="card-greetings">
                      <Card.Body>
                        <p className="mb-0 sender">Tony Stark (Iron Man)</p>
                        <p className="mb-3 datetime">{moment().fromNow()}</p>
                        <p className="mb-0 greet">
                          Wishing you a lifetime of happiness together and a
                          love that grows stronger with each passing day..
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GreetingsSection;
