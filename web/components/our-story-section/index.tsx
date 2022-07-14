import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

interface OurStoryProps {
  storyData: any;
  isMobile: boolean;
}

const OurStorySection = (props: OurStoryProps) => {
  return (
    <section className="story-section py-5" style={{overflow: 'hidden'}}>
      <Container className="my-3">
        <h3
          className="title text-center mb-5"
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
                  <h4>&#10084; {props.storyData.firstMeet.title}</h4>
                  <p>{props.storyData.firstMeet.desc}</p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4>&#10084; {props.storyData.expressFeelings.title}</h4>
                  <p>{props.storyData.expressFeelings.desc} &#129315;</p>
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
                  <h4>&#10084; {props.storyData.engagement.title}</h4>
                  <p>{props.storyData.engagement.desc}</p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4>&#10084; {props.storyData.goesToMarried.title}</h4>
                  <p>{props.storyData.goesToMarried.desc}</p>
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
                  <h4 className="mb-4">
                    &#10084; {props.storyData.firstMeet.title}
                  </h4>
                  <p className="mb-5">{props.storyData.firstMeet.desc}</p>
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
                  <h4 className="mb-4">
                    &#10084; {props.storyData.expressFeelings.title}
                  </h4>
                  <p className="mb-5">
                    {props.storyData.expressFeelings.desc} &#129315;
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
                  <h4 className="mb-4">
                    &#10084; {props.storyData.engagement.title}
                  </h4>
                  <p className="mb-5">{props.storyData.engagement.desc}</p>
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
                  <h4 className="mb-4">
                    &#10084; {props.storyData.goesToMarried.title}
                  </h4>
                  <p className="mb-5">{props.storyData.goesToMarried.desc}</p>
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
