import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import moment from 'moment';

interface WelcomeProps {
  place: string;
  scrollUpRef: any;
  onScrollDownClick: Function | any;
}

const WelcomeSection = (props: WelcomeProps) => {
  return (
    <section
      className="welcome-fullbg"
      data-aos="fade-up"
      data-aos-duration="1000"
      ref={props.scrollUpRef}>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <div className="welcome-content">
              <div data-aos="fade-down" data-aos-duration="2000">
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
              <div className="link-toscroll" onClick={props.onScrollDownClick}>
                <p className="text-center text-white scroll-text mb-1">
                  Scroll down
                </p>
                <div className="text-center icon-down">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color={'#FFFFFF'}
                    size={'lg'}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeSection;
