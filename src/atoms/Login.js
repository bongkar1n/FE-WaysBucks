import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Register from "./Register";
import { admin, login } from "../utils";

function Login(props) {
  let history = useHistory();
  const [modalLoginShow, setModalLoginShow] = useState(props.isOpen);
  const handleClose = () => setModalLoginShow(false);

  // Register

  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const handleClickRegister = () => {
    setModalLoginShow(!modalLoginShow);
    setModalRegisterShow(!modalRegisterShow);
  };

  const handleLoginToAdmin = () => {
    admin();
    history.push("/transaction");
  };

  const handleLoginAsUser = () => {
    login();
    history.push("/home");
  };
  return (
    <div>
      {modalRegisterShow ? <Register isOpen={true} /> : null}
      <Modal
        show={modalLoginShow}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p id="text-register">Login</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4 " controlId="formBasicEmail">
              <Form.Control
                id="form-register-modal"
                style={{ height: "50px" }}
                required
                name="email"
                type="email"
                placeholder="Email"
                bordered
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                id="form-register-modal"
                style={{ height: "50px" }}
                required
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form>
          {/* <Link to="/home"> */}
          <Button
            // onClick={props.handleLogin}
            onClick={handleLoginAsUser}
            // onClick={handleLoginToAdmin}
            className="register-button-modal"
          >
            Login
          </Button>
          {/* </Link> */}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <h5 className="text-dark ">
            Dont have an account? Klik
            <strong className="here-to-register" onClick={handleClickRegister}>
              {" "}
              Here
            </strong>
          </h5>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
