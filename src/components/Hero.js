import React from "react";
import { Container, Image, Card } from "react-bootstrap";
import SecJumb from "../images/Rectangle 3.svg";
import Jumbotron from "../images/Bg-Jumbotron.svg";
import "../App.css";

function Hero() {
  return (
    <Container className="px-5 LP-hero-container">
      <div className="jumbotron">
        <Image src={Jumbotron} alt="logo" />;
        <div className="text-jumbotron">
          <p className="top-text-jumb">WAYSBUCKS</p>
          <p className="mid-text-jumb">
            Things are changing, but we’re still here for you
          </p>
          <p className="bot-text-jumb">
            We have temporarily closed our in-store cafes, but select grocery
            and drive-thru locations remaining open. Waysbucks Drivers is also
            available
          </p>
          <p className="bot-text-jumb"> Let’s Order...</p>
        </div>
      </div>
      <div className="right-hero-image">
        <Image src={SecJumb} />
      </div>
    </Container>
  );
}

export default Hero;
