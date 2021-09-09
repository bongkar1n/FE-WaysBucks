import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import thumbnail from "../images/Rectangle 5.png";
import trashImage from "../images/bin 1.png";
import transactionLogo from "../images/invoices 1.png";
import ModalThanks from "../atoms/ModalThanks";

function CartContent() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={7} className=" pe-4 left-side-cart">
          <p className="title-cart">My Cart</p>
          <div className="desc-cart">
            <p className="desc-title-cart">Review Your Order</p>
            <div className="card-order">
              <Image src={thumbnail} />
              <div className="card-mid-order">
                <p className="my-0 title-order ">Ice Coffe Palm Sugar</p>
                <p className="my-0 toping-order">
                  <span>Toping: </span>Bill Berry Boba, Bubble Tea Gelatin,
                </p>
              </div>
              <div className="card-right-order">
                <p>Rp.33.000</p>
                <Image src={trashImage} style={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className="card-order">
              <Image src={thumbnail} />
              <div className="card-mid-order">
                <p className="my-0 title-order ">Ice Coffe Palm Sugar</p>
                <p className="my-0 toping-order">
                  <span>Toping: </span>Bill Berry Boba, Bubble Tea Gelatin,
                </p>
              </div>
              <div className="card-right-order">
                <p>Rp.33.000</p>
                <Image src={trashImage} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
          <div className="container-bottom-cart">
            <div>
              <div className="container-subtotal">
                <div className="container-inside-bottom-cart">
                  <p>Ini Total Harga</p>
                  <p>66.000</p>
                </div>
                <div className="container-inside-bottom-cart">
                  <p>Qty</p>
                  <p>2</p>
                </div>
              </div>
              <div className="container-inside-bottom-cart">
                <p>Total</p>
                <p>66.000</p>
              </div>
            </div>

            <div className="container-input-payment">
              <label className="label-input-payment">
                <Image src={transactionLogo} className="transaction-logo" />
                <p>Attache of Transaction</p>
                <input type="file" />
              </label>
            </div>
          </div>
        </Col>
        <Col className="right-side-cart">
          <div className="container-form">
            <Form.Control
              type="text"
              placeholder="Name"
              className="form-medium"
            />
            <Form.Control
              type="email"
              placeholder="Email"
              className="form-medium"
            />
            <Form.Control
              type="number"
              placeholder="Phone"
              className="form-medium"
            />
            <Form.Control
              type="number"
              placeholder="Pos Code"
              className="form-medium"
            />
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Address"
              className="label-address"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button className="pay-button" onClick={() => setModalShow(true)}>
              Pay
            </Button>
            <ModalThanks show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CartContent;
