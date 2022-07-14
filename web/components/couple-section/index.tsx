import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface CoupleProps {
  data: any;
  place: string;
  isMobile: boolean;
}

const CoupleSection = (props: CoupleProps) => {
  const filteredData = (data: any, place: string) => {
    return data.sort((a: any, b: any) => {
      if (place === 'kdr') {
        return a._id > b._id ? -1 : 1;
      } else {
        return a._id < b._id ? -1 : 1;
      }
    });
  };

  return (
    <section className="couple-section py-5" style={{overflow: 'hidden'}}>
      <Container className="my-3">
        <h3
          className="title text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1000">
          {props.place === 'kdr' ? 'The Groom & Bride' : 'The Bride & Groom'}
        </h3>
        <Row>
          {filteredData(props.data, props.place).map((item: any, i: number) => (
            <Col md={6} className="mb-4" key={i}>
              <img
                src={props.place === 'kdr' ? item.img_kdr : item.img_tlg}
                className="couple-img mt-5 mb-4"
                alt=""
                data-aos={i === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration="2000"
              />
              <div
                data-aos={i === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration="2000">
                <p className="text-center couple-name">{item.name}</p>
                <p className="desc text-center text-white">
                  {item._id === 'couple_0' ? 'Putri' : 'Putra'} dari Bapak{' '}
                  {item.father} &{props.isMobile ? <br /> : ' '}
                  Ibu {item.mother}
                </p>
                <div className="btn-sosmed d-flex justify-content-center">
                  <a href={item.ig_url} target="_blank">
                    <div className="link-sosmed">
                      <FontAwesomeIcon icon={faInstagram} color={'#414141'} />
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoupleSection;
