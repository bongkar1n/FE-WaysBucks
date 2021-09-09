import React from "react";
import addPhoto from "../images/Rectangle 4.svg";
import { Row, Col, Button, Container, Image, Form } from "react-bootstrap";
import { BsPaperclip } from "react-icons/bs";

function FormAddProduct() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <p className="title-left-product">Product</p>
          <div className="container-form-add-product">
            <Form.Control
              type="text"
              placeholder="Name Product"
              className="form-medium"
            />
            <Form.Control
              type="number"
              placeholder="Price"
              className="form-medium"
            />
            <Form.Control
              type="text"
              placeholder="Name"
              className="form-medium"
            />
            <label className="label-input-add-product">
              <p
                style={{
                  lineHeight: "49px",
                  alignItems: "center",
                  paddingLeft: "13px",
                }}
              >
                Photo Product
              </p>
              <BsPaperclip color="#bd0707" fontSize="2.8em" />
              <input type="file" />
            </label>
          </div>
          <div className="container-button-add-product">
            <Button className="button-add-product">Add Product</Button>
          </div>
        </Col>
        <Col>
          <div className="container-right-add-product">
            <Image src={addPhoto} style={{ width: "436px" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FormAddProduct;
