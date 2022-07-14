import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';

interface GalleryProps {
  imgGallery: any;
}

const GallerySection = (props: GalleryProps) => {
  return (
    <section className="gallery-section py-5" style={{overflow: 'hidden'}}>
      <Container className="my-3">
        <Row className="align-items-center">
          <Col md={6}>
            <div
              className="gallery-title mb-4"
              data-aos="fade-right"
              data-aos-duration="1000">
              <h3 className="mb-1">Our Gallery</h3>
              <p>Prewedding Photo Gallery &#10084;</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="py-4" data-aos="fade-left" data-aos-duration="2000">
              <ImageGallery
                items={props.imgGallery}
                showNav={false}
                showPlayButton={false}
                autoPlay={true}
                slideDuration={1000}
                slideInterval={4000}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GallerySection;
