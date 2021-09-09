import React from "react";
import { Container, Card } from "react-bootstrap";
// import tempData from "../fakeDatas/tempData";
import { Link } from "react-router-dom";
import data from "../fakeDatas/Drinks";
import "../App.css";
import CardDrink from "../atoms/CardDrink";

function HomeContent({ isLogin, modalLoginShow, setModalLoginShow }) {
  const option = { style: "currency", currency: "idr" };
  //   const price = tempData.price;
  //   const rupiah = price.toLocaleString("id", option);

  return (
    <Container className="container-home-content">
      <div className="home-content">
        <p className="lets-order">Let's Order</p>
        <div className="card-menu-container">
          {data.map((item, key) => (
            <CardDrink
              item={item}
              key={key}
              option={option}
              isLogin={isLogin}
              setModalLoginShow={setModalLoginShow}
              modalLoginShow={modalLoginShow}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default HomeContent;
