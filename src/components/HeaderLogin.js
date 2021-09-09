import React, { useState } from "react";
import {
  Container,
  Image,
  Col,
  Row,
  Navbar,
  Dropdown,
  DropdownButton,
  NavbarToggle,
} from "react-bootstrap";
// import { Popover, Button } from "antd";
import logo from "../images/Logo WaysBucks.svg";
import profile from "../images/Ellipse 1.svg";
import bucket from "../images/shopping-basket.svg";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import DropdownHeader from "../atoms/DropdownHeader";

function HeaderLogin({ bucketList }) {
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
          <Navbar.Brand className="me-3 bucketlist">
            <Link to="/cart">
              <Image src={bucket} />
            </Link>
            {bucketList > 0 && (
              <div className="counter-bucketlist">{bucketList}</div>
            )}
          </Navbar.Brand>

          <Navbar.Brand
            className="ms-3 profile-dropdown"
            onClick={() => setShow(!show)}
          >
            <Image src={profile} />
            <DropdownHeader show={show} setShow={setShow} />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderLogin;
