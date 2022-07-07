import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import moment from 'moment';

interface WelcomeSectionProps {
  place: string;
}

const WelcomeSection = (props: WelcomeSectionProps) => {
  return (
    <section
      className="welcome-fullbg"
      data-aos="fade-up"
      data-aos-duration="1000">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <div
              className="welcome-content"
              data-aos="fade-up"
              data-aos-duration="2000">
              <h4 className="mb-3 text-center text-white wd-couplename font-weight-bold">
                {props.place === 'kdr' ? 'Fariz' : 'Rika'} &{' '}
                {props.place === 'kdr' ? 'Rika' : 'Fariz'}
              </h4>
              <p className="mb-1 text-center text-white welcome-wd-place">
                The Wedding |{' '}
                {moment(
                  props.place === 'kdr' ? '2022-11-26' : '2022-11-19',
                ).format('DD.MM.YYYY')}{' '}
                | {props.place === 'kdr' ? 'Kediri' : 'Tulungagung'}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeSection;
