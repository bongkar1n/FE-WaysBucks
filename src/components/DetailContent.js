import React, { useState } from "react";
import { Container, Col, Row, Image, Button, Alert } from "react-bootstrap";
// import softDrink from "../images/Rectangle 4.svg";
import tempData from "../fakeDatas/tempData";
// import toping from "../images/toping-saja.jpg";
import toping from "../fakeDatas/TopingData";
import CardToping from "../atoms/CardToping";

function DetailContent({ addBucketList }) {
  const [show, setShow] = useState(true);
  const option = { style: "currency", currency: "idr" };

  return (
    <Container>
      <Row className="mt-4">
        <Col xs={5} className="ms-5 text-light text-center ">
          <Image
            className="my-3"
            src={tempData.image}
            alt="foto boba"
            style={{ width: "436px", borderRadius: "15px" }}
          />
        </Col>
        <Col className="me-5 text-light text-center right-detail-section ">
          <p className="text-detail">{tempData.name}</p>
          <p className="price-detail">
            {tempData.price.toLocaleString("id", option)}
          </p>
          <div className="toping-section">
            <p className="toping-title">Toping</p>
            <div className="inside-toping-section">
              {toping.map((item, key) => (
                <CardToping item={item} key={key} />
              ))}
            </div>
          </div>
          <div className="price-display">
            <p>Total</p>
            <p>{tempData.price.toLocaleString("id", option)}</p>
          </div>
          {/* <Alert show={show} variant="success">
            <Alert.Heading>Are you Sure?!</Alert.Heading>
            <p>Anda memesan coffee ini dengan topping bla bla bla.</p>
            <hr />
            <div className="d-flex justify-content-center">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Ya, Sure
              </Button>
            </div>
          </Alert> */}
          <Button className="chart-button" onClick={addBucketList}>
            Chart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailContent;
