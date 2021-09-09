import React, { useState } from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from "../images/Ellipse 1.svg";
import logo from "../images/Logo WaysBucks.svg";
import DropdownHeaderAdmin from "../atoms/DropdownHeaderAdmin";

function HeaderAdmin() {
  const [show, setShow] = useState(false);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/home">
            <Image src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand
            className="ms-3 profile-dropdown"
            onClick={() => setShow(!show)}
          >
            <Image src={profile} />
            <DropdownHeaderAdmin show={show} setShow={setShow} />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;
