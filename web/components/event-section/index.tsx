import React from 'react';
import {Col, Container, Row, Card, Button} from 'react-bootstrap';

interface EventProps {
  eventTlg: any;
  eventKdr: any;
  isMobile: boolean;
  place: string;
  session: string;
}

const EventSection = (props: EventProps) => {
  const valSession = parseInt(props.session);

  const cardEvent = (place: any) => {
    if (place === 'kdr') {
      return (
        <>
          <Col md={8}>
            <Card
              className="event-card my-3"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/ico-couple.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Resepsi</Card.Title>
                <Card.Text className="text mb-3">
                  {props.eventKdr.startSesi1.format('dddd, DD MMMM YYYY')}
                </Card.Text>
                {valSession === 2 ? (
                  <>
                    <Card.Text className="text-small">
                      {props.eventKdr.startSesi2.format('HH:mm')} WIB -{' '}
                      {props.eventKdr.endSesi2.format('HH:mm')} WIB
                    </Card.Text>
                  </>
                ) : (
                  <>
                    <Card.Text className="text-small">
                      {props.eventKdr.startSesi1.format('HH:mm')} WIB -{' '}
                      {props.eventKdr.endSesi1.format('HH:mm')} WIB
                    </Card.Text>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card
              className="event-card my-3"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/ico-location.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Lokasi</Card.Title>
                <Card.Text className="text mb-3">
                  Gedung SMK Negeri 1 Kediri
                </Card.Text>
                <Card.Text className="text-small">
                  Jl. Veteran No.9, Kec. Mojoroto, Kota Kediri, Jawa Timur 64114
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a href={props.eventKdr.location} target="_blank">
                    <Button
                      variant="light"
                      size="sm"
                      className="btn-open-invit">
                      View Map
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-right"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img
                  src="/img/ico-wedding-ring.png"
                  className="ico-ring mb-4"
                />
                <Card.Title className="title mt-2 mb-4">Akad</Card.Title>
                <Card.Text className="text mb-3">
                  {props.eventTlg.akad.format('dddd, DD MMMM YYYY')}
                </Card.Text>
                <Card.Text className="text-small">
                  {props.eventTlg.akad.format('HH:mm')} WIB - Selesai
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-left"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/ico-couple.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Resepsi</Card.Title>
                <Card.Text className="text mb-3">
                  {props.eventTlg.startResepsi.format('dddd, DD MMMM YYYY')}
                </Card.Text>
                <Card.Text className="text-small">
                  {props.eventTlg.startResepsi.format('HH:mm')} WIB -{' '}
                  {props.eventTlg.endResepsi.format('HH:mm')} WIB
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card
              className="event-card my-3"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/ico-location.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Lokasi</Card.Title>
                <Card.Text className="text mb-3">
                  Rumah Mempelai Wanita (Kawan Jaya)
                </Card.Text>
                <Card.Text className="text-small">
                  Desa Tawangsari RT 02 RW 03, Kec. Kedungwaru, Kab.
                  Tulungagung, Jawa Timur 66227
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a href={props.eventTlg.location} target="_blank">
                    <Button
                      variant="light"
                      size="sm"
                      className="btn-open-invit">
                      View Map
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </>
      );
    }
  };

  return (
    <section className="event-section py-5" style={{overflow: 'hidden'}}>
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col md={12}>
            <div data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              <h3 className="head-title text-center">
                السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </h3>
              <h3 className="head-title text-center">
                Assalamu’alaikum Warahmatullahi Wabarakatuh
              </h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              {!props.isMobile ? (
                <p className="head-text text-center mb-5">
                  Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan
                  segenap kerendahan hati,
                  <br />
                  perkenankanlah kami mengundang Bapak/Ibu/Saudara/i untuk hadir
                  di acara pernikahan kami
                  <br />
                  yang akan dilaksanakan pada:
                </p>
              ) : (
                <p className="head-text text-center">
                  Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan
                  segenap kerendahan hati, perkenankanlah kami mengundang
                  Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang
                  akan dilaksanakan pada:
                </p>
              )}
            </div>
          </Col>
          {cardEvent(props.place)}
        </Row>
      </Container>
    </section>
  );
};

export default EventSection;
