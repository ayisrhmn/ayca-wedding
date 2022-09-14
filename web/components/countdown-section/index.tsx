import React from 'react';
import {Col, Container, Row, Card} from 'react-bootstrap';
import Countdown from 'react-countdown';

interface CountdownProps {
  eventTlg: any;
  eventKdr: any;
  place: string;
  isMobile: boolean;
}

const CountdownSection = (props: CountdownProps) => {
  const Completionist = () => {
    return (
      <Row className="countdown-timer mt-5 mb-3">
        <Col md={12}>
          <img src="/img/ico-drink.png" />
          <p className="count-name done mt-3">
            Acara sedang dilaksanakan/telah selesai.
            <br />
            Terimakasih atas kehadirannya!
          </p>
        </Col>
      </Row>
    );
  };

  const renderer = ({formatted, completed}: any) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <Row className="countdown-timer mt-5 mb-3">
          <Col md={12} className="d-flex justify-content-center">
            <div className="timer-wrap">
              <p className="count">{formatted.days}</p>
              <p className="count-name">Day(s)</p>
            </div>
            <div className="timer-wrap">
              <p className="count">{formatted.hours}</p>
              <p className="count-name">Hour(s)</p>
            </div>
            <div className="timer-wrap">
              <p className="count">{formatted.minutes}</p>
              <p className="count-name">Minute(s)</p>
            </div>
            <div className="timer-wrap">
              <p className="count">{formatted.seconds}</p>
              <p className="count-name">Second(s)</p>
            </div>
          </Col>
        </Row>
      );
    }
  };

  return (
    <section className="countdown-section py-5">
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col md={12}>
            <Card
              className="countdown-card my-3"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body className="px-0 py-0">
                <Row className="align-items-center">
                  <Col md={4}>
                    <img src="/img/countdown-love.jpg" className="img-card" />
                  </Col>
                  <Col md={8}>
                    <div
                      className="py-3 px-3"
                      data-aos="fade"
                      data-aos-duration="2000">
                      <img src="/img/doves.png" className="ico-doves" />
                      <Card.Title className="title text-center mt-2 mb-4">
                        To a Happy Day!
                      </Card.Title>
                      <Card.Text className="text text-center mb-4">
                        Hari demi hari berganti begitu cepat, di antara
                        saat-saat mendebarkan yang belum pernah kami rasakan
                        sebelumnya. Kami nantikan kehadiran para keluarga dan
                        sahabat, untuk menjadi saksi ikrar janji suci kami di
                        hari yang bahagia.
                      </Card.Text>
                      <Countdown
                        date={
                          props.place === 'kdr'
                            ? props.eventKdr.startSesi1.toString()
                            : props.eventTlg.akad.toString()
                        }
                        renderer={renderer}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CountdownSection;
