import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {createConfirmation, getConfirmByName} from '../../config/services';

interface ConfirmProps {
  guestName: string;
  place: string;
}

const ConfirmSection = (props: ConfirmProps) => {
  const [isConfirm, setIsConfirm] = React.useState(false);
  const [dtConfirmByName, setDtConfirmByName] = React.useState({
    _id: '',
    Name: '',
    Place: '',
    Confirmation: '',
  });

  const Name = props.guestName;
  const Place = props.place === '' ? 'tlg' : props.place;

  React.useEffect(() => {
    initData();

    return () => {};
  }, []);

  const initData = async () => {
    let payload = {
      Name,
    };

    await getConfirmByName(payload).then((res) => {
      if (res.Error) {
        toast.error(res.Message);
      } else {
        if (res.Data !== null) {
          setDtConfirmByName(res.Data);
        }
      }
    });
  };

  const onConfirm = async (val: any) => {
    setIsConfirm(true);

    let payload = {
      Name,
      Place,
      Confirmation: val,
    };

    await createConfirmation(payload).then((res) => {
      if (res.Error) {
        toast.error(res.Message);
      } else {
        toast.success(
          `Thank you Kak ${Name} atas konfirmasinya! ${String.fromCodePoint(
            0x1f60d,
          )}`,
        );
      }
    });
  };

  const checkGuestName = dtConfirmByName?.Name === Name;

  return (
    <section className="confirm-section py-5">
      <Container className="my-5 py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card
              className="confirm-card d-flex align-items-center"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body
                className="my-4"
                data-aos="fade"
                data-aos-duration="2000">
                {isConfirm || checkGuestName ? (
                  <Card.Title className="title text-center">
                    Terima Kasih atas respon kehadirannya yaa! &#10084;
                  </Card.Title>
                ) : (
                  <>
                    <Card.Title className="title text-center mb-3 pb-3">
                      Apakah Anda Akan Hadir?
                    </Card.Title>
                    <div className="btn-wrapper mt-3 pt-3">
                      <Button
                        variant="light"
                        className="mx-2 btn-confirm accept btn-sm"
                        onClick={() => onConfirm('Hadir')}>
                        Ya hadir dong! &#128526;
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-2 btn-confirm btn-sm"
                        onClick={() => onConfirm('Tidak Hadir')}>
                        Maaf nih, tidak bisa hadir &#128532;
                      </Button>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConfirmSection;
