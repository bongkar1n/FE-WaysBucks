import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./Login";

function Register(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleOnSubmit = () => {
  //   localStorage.setItem("user", JSON.stringify(form));
  // };

  // Register
  const [modalRegisterShow, setModalRegisterShow] = useState(props.isOpen);
  const handleClose = () => setModalRegisterShow(false);

  // Login
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const handleClickLogin = () => {
    setModalRegisterShow(!modalRegisterShow);
    setModalLoginShow(!modalLoginShow);
    // handleOnSubmit();
  };

  return (
    <div>
      {modalLoginShow ? <Login isOpen={true} /> : null}
      <Modal
        show={modalRegisterShow}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-show"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p id="text-register">Register</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4 " controlId="formBasicEmail">
              <Form.Control
                id="form-register-modal"
                style={{ height: "50px" }}
                name="email"
                //   value={email}
                type="email"
                placeholder="Email"
                bordered
                // required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                id="form-register-modal"
                style={{ height: "50px" }}
                name="password"
                //   value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="text">
              <Form.Control
                id="form-register-modal"
                style={{ height: "50px" }}
                //   value={fullName}
                name="fullName"
                type="text"
                placeholder="Full Name"
                bordered
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          {/* <Link to="/home"> */}
          <Button onClick={handleClickLogin} className="register-button-modal">
            Register
          </Button>
          {/* </Link> */}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <h5 className="text-dark ">
            Dont have an account? Klik
            <strong className="here-to-register" onClick={handleClickLogin}>
              {" "}
              Here
            </strong>
          </h5>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;
