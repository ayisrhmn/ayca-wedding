import React from 'react';
import {Col, Container, Row, Card} from 'react-bootstrap';

interface PrayerProps {
  scrollDownRef: any;
}

const PrayerSection = (props: PrayerProps) => {
  return (
    <section className="prayer-section py-5" ref={props.scrollDownRef}>
      <Container className="my-3">
        <Row>
          <Col md={12}>
            <Card
              className="prayer-card"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img
                  src="/img/ico-flower.png"
                  alt="ico-flower"
                  className="ico-flower mb-5"
                />
                <Card.Title className="title text-center mt-5 mb-5">
                  بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                </Card.Title>
                <Card.Text className="text text-center mb-5 px-5">
                  “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan Nya
                  untukmu pasangan hidup dari jenismu sendiri supaya kamu
                  mendapat ketenangan hati dan dijadikan-Nya kasih sayang
                  diantara kamu. Sesungguhnya yang demikian menjadi tanda-tanda
                  kebesaran-Nya bagi orang-orang yang berfikir.”
                </Card.Text>
                <Card.Text className="text text-center">
                  (QS. Ar-Rum: 21)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrayerSection;
