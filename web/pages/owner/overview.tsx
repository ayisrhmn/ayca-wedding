import React from 'react';
import {Container, Row, Col, Table, Button, Form} from 'react-bootstrap';
import {Digital} from 'react-activity';
import {
  getByConfirm,
  getConfirmByCount,
  getConfirmByName,
  getConfirmByPlace,
  getConfirmList,
} from '../../config/services';
import moment from 'moment';

const OverviewSection = () => {
  const [loading, setLoading] = React.useState(false);

  const [dataCount, setDataCount] = React.useState({}) as any;
  const [listConfirm, setListConfirm] = React.useState([]) as any;
  const [listByPlace, setListByPlace] = React.useState([]) as any;
  const [listByConfirm, setListByConfirm] = React.useState([]) as any;

  const [loadingTable, setLoadingTable] = React.useState(false);
  const [status, setStatus] = React.useState('All');
  const [place, setPlace] = React.useState('tlg');
  const [confirm, setConfirm] = React.useState('Hadir');

  const [loadingDtByName, setLoadingDtByName] = React.useState(false);
  const [dtByName, setDtByName] = React.useState({}) as any;
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    initData();

    return () => {};
  }, []);

  React.useEffect(() => {
    initTableData();

    return () => {};
  }, [status, place, confirm]);

  const initData = async () => {
    setLoading(true);
    await Promise.all([getConfirmByCount()])
      .then((res) => {
        let [confirmCount] = res;

        setDataCount(confirmCount?.Data);
      })
      .finally(() => setLoading(false));
  };

  const initTableData = async () => {
    let payloadPlace = {
      Place: place,
    };
    let payloadConfirm = {
      Confirm: confirm,
    };

    setLoadingTable(true);
    await Promise.all([
      getConfirmList(),
      getConfirmByPlace(payloadPlace),
      getByConfirm(payloadConfirm),
    ])
      .then((res) => {
        let [confirmList, confirmByPlace, byConfirm] = res;

        setListConfirm(confirmList?.Data);
        setListByPlace(confirmByPlace?.Data);
        setListByConfirm(byConfirm?.Data);
      })
      .finally(() => setLoadingTable(false));
  };

  const filterData = (status: any) => {
    if (status === 'Place') {
      return listByPlace;
    } else if (status === 'Confirm') {
      return listByConfirm;
    } else {
      return listConfirm;
    }
  };

  const onSearch = async (name: any) => {
    setLoadingDtByName(true);
    await getConfirmByName({Name: name})
      .then((res) => {
        setDtByName(res?.Data);
      })
      .finally(() => setLoadingDtByName(false));
  };

  const formatDate = 'ddd, DD MMM YYYY';

  return (
    <section className="py-5 px-2">
      <style>{`
        html,
        body {
          background-color: #fff !important;
        }
        th, td {
          font-size: 11px
        }
      `}</style>
      <Container>
        <h2 className="mb-5 fw-bold">ayca-wedding Overview</h2>
        {loading ? (
          <Digital color={'#414141'} />
        ) : (
          <Row>
            <Col md={12} className="mb-4">
              <h4 className="mb-3 fw-bold">Count Confirmation</h4>
              <Row>
                <Col md={6}>
                  <h6 className="mb-4 fw-bold">Tulungagung</h6>
                  <Table striped bordered hover variant="dark" responsive>
                    <thead>
                      <tr className="text-center">
                        <th>Hadir</th>
                        <th>Tidak Hadir</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td>{dataCount.Tulungagung?.Hadir}</td>
                        <td>{dataCount.Tulungagung?.TidakHadir}</td>
                        <td>{dataCount.Tulungagung?.Total}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md={6}>
                  <h6 className="mb-4 fw-bold">Kediri</h6>
                  <Table striped bordered hover variant="dark" responsive>
                    <thead>
                      <tr className="text-center">
                        <th>Hadir</th>
                        <th>Tidak Hadir</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td>{dataCount.Kediri?.Hadir}</td>
                        <td>{dataCount.Kediri?.TidakHadir}</td>
                        <td>{dataCount.Kediri?.Total}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <h6 className="mb-4 fw-bold">
                Total all ({dataCount.Total_All})
              </h6>
            </Col>
            <Col md={12} className="mb-4">
              <h4 className="mb-3 fw-bold">
                Confirm List (
                {status === 'Place'
                  ? place.toUpperCase()
                  : status === 'Confirm'
                  ? confirm
                  : status}
                )
              </h4>
              <div className="mb-3">
                <Button
                  variant="secondary"
                  className="btn-sm"
                  style={{marginRight: 6}}
                  onClick={() => setStatus('All')}>
                  All
                </Button>
                <Button
                  variant="primary"
                  className="btn-sm"
                  style={{marginRight: 6}}
                  onClick={() => {
                    setStatus('Place');
                    setPlace('tlg');
                  }}>
                  TLG
                </Button>
                <Button
                  variant="warning"
                  className="btn-sm"
                  style={{marginRight: 6}}
                  onClick={() => {
                    setStatus('Place');
                    setPlace('kdr');
                  }}>
                  KDR
                </Button>
                <Button
                  variant="success"
                  className="btn-sm"
                  style={{marginRight: 6}}
                  onClick={() => {
                    setStatus('Confirm');
                    setConfirm('Hadir');
                  }}>
                  Hadir
                </Button>
                <Button
                  variant="danger"
                  className="btn-sm"
                  style={{marginRight: 6}}
                  onClick={() => {
                    setStatus('Confirm');
                    setConfirm('Tidak Hadir');
                  }}>
                  Tidak Hadir
                </Button>
              </div>
              {loadingTable ? (
                <Digital color={'#414141'} />
              ) : (
                <Table striped bordered hover variant="dark" responsive>
                  <thead>
                    <tr className="text-center">
                      <th>No.</th>
                      <th>Name</th>
                      <th>Place</th>
                      <th>Confirm</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData(status)?.map((item: any, i: number) => (
                      <tr className="text-center" key={i}>
                        <td>{i + 1}</td>
                        <td>{item.Name}</td>
                        <td>{item.Place.toUpperCase()}</td>
                        <td>{item.Confirmation}</td>
                        <td>{moment(item.createdAt).format(formatDate)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
            <Col md={12}>
              <h4 className="mb-4 fw-bold">Search by Name</h4>
              <Row>
                <Col md={6}>
                  <Form.Control
                    name="name"
                    value={name}
                    className="mb-2"
                    placeholder="Search by Name"
                    onChange={(text) => setName(text.target.value)}
                  />
                  <Button
                    variant="primary mb-4"
                    onClick={() => {
                      onSearch(name);
                    }}>
                    Search
                  </Button>
                  {loadingDtByName ? (
                    <Digital color={'#414141'} />
                  ) : (
                    <>
                      {dtByName?.Name !== undefined && (
                        <Table striped bordered hover variant="dark" responsive>
                          <thead>
                            <tr className="text-center">
                              <th>Name</th>
                              <th>Place</th>
                              <th>Confirm</th>
                              <th>Created At</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="text-center">
                              <td>{dtByName?.Name}</td>
                              <td>{dtByName?.Place?.toUpperCase()}</td>
                              <td>{dtByName?.Confirmation}</td>
                              <td>
                                {moment(dtByName?.createdAt).format(formatDate)}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      )}
                    </>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default OverviewSection;
