import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

interface OurStoryProps {
  isMobile: boolean;
}

const OurStorySection = (props: OurStoryProps) => {
  return (
    <section className="story-section py-4" style={{overflow: 'hidden'}}>
      <Container className="my-4">
        <h3
          className="title text-center mt-5 mb-5"
          data-aos="fade"
          data-aos-duration="1000">
          Our Story
        </h3>
        <br />
        {!props.isMobile ? (
          <>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <img
                  src="/img/first-meet.jpg"
                  className="d-block img-holder"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <h4>First Meet ~ 2017</h4>
                  <p>
                    Lebih tepatnya pada bulan Januari 2017 adalah awal pertemuan
                    kami pada saat event di calon sekolah kami Prisma
                    Profesional. Sama sama belum saling kenal dan kita
                    berkenalan pada saat itu tanpa ada maksud untuk saling
                    mencintai. Beberapa saat setelah itu kami sudah mulai masuk
                    di Prisma Profesional dan hanya berteman biasa bahkan kita
                    bukan salah satu teman dekat.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4>Express Feelings ~ 2017</h4>
                  <p>
                    Seiring berjalannya waktu, pada akhir Juli kita sama sama
                    berkenalan lebih dekat meskipun perkenalan dekat ini tanpa
                    sengaja sampai akhirnya kita sama sama mencintai dan tanggal
                    08 September 2017 kami memutuskan untuk mempunyai
                    kesepakatan untuk bersama dan menjalin cinta wkwkw :D
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="/img/fall-love.jpg"
                  className="d-block img-holder"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <img
                  src="/img/engagement.jpg"
                  className="d-block img-holder"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <h4>Engagement ~ 2021</h4>
                  <p>
                    5 Desember 2021 adalah tanggal dimana kita ingin menjalin
                    hubungan yang lebih serius setelah 4 tahun bersama. Kami
                    saling berbicara untuk kejenjang yang lebih serius didepan
                    kedua orang tua kami dan keluarga besar kami.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4>Goes to Married ~ 2022</h4>
                  <p>
                    Setelah perjalanan cinta kami yang lebih dari 5 tahun
                    akhirnya momen spesial yang kami tunggu akan dilaksanakan
                    pada tanggal 19 November 2022, dimana kami akan membangun
                    keluarga kecil kami. Semoga Allah SWT memberikan keberkahan
                    untuk pernikahan kami dan kami selalu bahagia dan menua
                    bersama sama.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="/img/goes-to-married.jpg"
                  className="d-block img-holder"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col md={12}>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/first-meet.jpg"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">First Meet ~ 2017</h4>
                  <p className="mb-5">
                    Lebih tepatnya pada bulan Januari 2017 adalah awal pertemuan
                    kami pada saat event di calon sekolah kami Prisma
                    Profesional. Sama sama belum saling kenal dan kita
                    berkenalan pada saat itu tanpa ada maksud untuk saling
                    mencintai. Beberapa saat setelah itu kami sudah mulai masuk
                    di Prisma Profesional dan hanya berteman biasa bahkan kita
                    bukan salah satu teman dekat.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="content py-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/fall-love.jpg"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">Express Feelings ~ 2017</h4>
                  <p className="mb-5">
                    Seiring berjalannya waktu, pada akhir Juli kita sama sama
                    berkenalan lebih dekat meskipun perkenalan dekat ini tanpa
                    sengaja sampai akhirnya kita sama sama mencintai dan tanggal
                    08 September 2017 kami memutuskan untuk mempunyai
                    kesepakatan untuk bersama dan menjalin cinta wkwkw :D
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="content py-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/engagement.jpg"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">Engagement ~ 2021</h4>
                  <p className="mb-5">
                    5 Desember 2021 adalah tanggal dimana kita ingin menjalin
                    hubungan yang lebih serius setelah 4 tahun bersama. Kami
                    saling berbicara untuk kejenjang yang lebih serius didepan
                    kedua orang tua kami dan keluarga besar kami.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="content py-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/goes-to-married.jpg"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">Goes to Married ~ 2022</h4>
                  <p className="mb-5">
                    Setelah perjalanan cinta kami yang lebih dari 5 tahun
                    akhirnya momen spesial yang kami tunggu akan dilaksanakan
                    pada tanggal 19 November 2022, dimana kami akan membangun
                    keluarga kecil kami. Semoga Allah SWT memberikan keberkahan
                    untuk pernikahan kami dan kami selalu bahagia dan menua
                    bersama sama.
                  </p>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </section>
  );
};

export default OurStorySection;
