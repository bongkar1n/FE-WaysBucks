import React, { useState } from "react";
import { Container, Image, Button, Col, Row, Navbar } from "react-bootstrap";
import Login from "../atoms/Login";
import Register from "../atoms/Register";
import logo from "../images/Logo WaysBucks.svg";
import { login } from "../utils";
import { useHistory } from "react-router-dom";

function Header({
  handleLogin,
  modalLoginShow,
  setModalLoginShow,
  modalRegisterShow,
  setModalRegisterShow,
}) {
  let history = useHistory();
  // const [modalLoginShow, setModalLoginShow] = useState(false);
  // const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const handleClickLogin = () => {
    setModalLoginShow(!modalLoginShow);
  };

  // const handleLogin = () => {
  //   login();
  //   history.push("/home");
  // };

  const handleClickRegister = () => setModalRegisterShow(!modalRegisterShow);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button className="login-button mx-2" onClick={handleClickLogin}>
            Login
          </Button>
          {modalLoginShow ? (
            <Login isOpen={modalLoginShow} handleLogin={handleLogin} />
          ) : null}
          <Button
            className="register-button mx-2"
            onClick={handleClickRegister}
          >
            Register
          </Button>
          {modalRegisterShow ? <Register isOpen={modalRegisterShow} /> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
