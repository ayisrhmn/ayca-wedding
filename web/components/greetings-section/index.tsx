import React from 'react';
import {toast} from 'react-toastify';
import {Digital} from 'react-activity';
import {Col, Container, Row, Form, Button, Card} from 'react-bootstrap';
import moment from 'moment';
import {createGreeting, getGreetingList} from '../../config/services';
import {getRandomColor} from '../../utils/helper';

const GreetingsSection = () => {
  const [name, setName] = React.useState('');
  const [greeting, setGreeting] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [greetingList, setGreetingList] = React.useState([]) as any;

  React.useEffect(() => {
    initData();

    return () => {};
  }, []);

  const initData = async () => {
    setLoading(true);
    await getGreetingList()
      .then((res) => {
        if (res.Error) {
          toast.error(res.Message);
        } else {
          setGreetingList(res.Data);
        }
      })
      .finally(() => setLoading(false));
  };

  const onSubmit = async (Name: string, Greeting: string) => {
    let payload = {
      Name,
      Greeting,
      Color: getRandomColor(),
    };

    if (Name.length === 0 && Greeting.length === 0) {
      toast.error(
        `Jangan lupa isi form nya yaa ${String.fromCodePoint(0x1f61e)}`,
      );
    } else if (Name.length === 0) {
      toast.error(`Nama kamu siapaa? ${String.fromCodePoint(0x1f60f)}`);
    } else if (Greeting.length === 0) {
      toast.error(
        `Tulis ucapan buat kami dong ${String.fromCodePoint(0x1f60f)}`,
      );
    } else {
      await createGreeting(payload)
        .then((res) => {
          if (res.Error) {
            toast.error(res.Message);
          } else {
            toast.success(
              `Thank you Kak ${Name} atas ucapannya! ${String.fromCodePoint(
                0x1f60d,
              )}`,
            );
          }
        })
        .finally(() => {
          setName('');
          setGreeting('');
          initData();
        });
    }
  };

  return (
    <section className="greetings-section py-5">
      <Container className="my-3" data-aos="fade-up" data-aos-duration="1000">
        <h3 className="title mb-5">Best Wishes &#10084;</h3>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <div className="mb-5">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="isform-label">Nama Kamu</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  className="isform-input"
                  type="text"
                  placeholder="e.g. Steve Rogers"
                  onChange={(val) => setName(val.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGreetings">
                <Form.Label className="isform-label">
                  Tulis Ucapan Kamu
                </Form.Label>
                <Form.Control
                  name="greeting"
                  value={greeting}
                  className="isform-input"
                  as="textarea"
                  rows={4}
                  placeholder="e.g. Happily ever after <3"
                  onChange={(val) => setGreeting(val.target.value)}
                />
              </Form.Group>
              <Button
                variant="light"
                className="btn-greetings"
                type="button"
                onClick={() => onSubmit(name, greeting)}>
                Kirim Ucapan
              </Button>
            </div>
            {loading && <Digital color={'#414141'} />}
            <div
              className="list-greetings"
              style={{marginBottom: greetingList.length !== 0 ? '3rem' : 0}}>
              {greetingList?.map((item: any, i: number) => (
                <div className="d-flex mb-4" key={i}>
                  <div
                    className="user-pic"
                    style={{
                      backgroundColor:
                        item.Color === '' ? 'lightblue' : item.Color,
                    }}>
                    <h3 className="mb-0">{item.Name.charAt(0)}</h3>
                  </div>
                  <Card className="card-greetings">
                    <Card.Body>
                      <p className="mb-0 sender">{item.Name}</p>
                      <p className="mb-3 datetime">
                        {moment(item.createdAt).fromNow()}
                      </p>
                      <p className="mb-0 greet">
                        {item.Greeting}
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GreetingsSection;
