import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface FooterProps {
  place: string;
}

const FooterSection = (props: FooterProps) => {
  return (
    <footer
      className="footer-section pt-5"
      data-aos="fade-up"
      data-aos-duration="1000">
      <Container>
        <Row className="my-3">
          <Col md={12}>
            <div className="footer-content">
              <h4 className="mb-2 text-center text-white wd-couplename font-weight-bold">
                {props.place === 'kdr' ? 'Fariz' : 'Rika'} &{' '}
                {props.place === 'kdr' ? 'Rika' : 'Fariz'}
              </h4>
              <p className="mb-1 text-center text-white welcome-wd-place">
                Sampai Jumpa Di Hari Bahagia Kami
              </p>
            </div>
            <div className="copyright">
              <div className="content">
                <p className="text-white text-center">
                  Build with &#10084; | &copy; Muhammad Fariz Rahman
                </p>
                <div className="d-flex justify-content-center">
                  <a href="https://linktr.ee/ayisrhmn" target="_blank">
                    <div className="link-sosmed">
                      <FontAwesomeIcon icon={faGlobe} color={'#414141'} />
                    </div>
                  </a>
                  <a href="https://instagram.com/ayisrhmn" target="_blank">
                    <div className="link-sosmed">
                      <FontAwesomeIcon icon={faInstagram} color={'#414141'} />
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/ayisrhmn" target="_blank">
                    <div className="link-sosmed">
                      <FontAwesomeIcon icon={faLinkedin} color={'#414141'} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
