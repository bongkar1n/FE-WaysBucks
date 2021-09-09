import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardDrink({ item, key, option, isLogin, setModalLoginShow }) {
  return (
    <Card className="card-outer" key={key}>
      {isLogin === "login" ? (
        <Link to="/detail-product">
          <Card.Img variant="top" src={item.image} />
        </Link>
      ) : (
        <Link to="/">
          <Card.Img variant="top" src={item.image} />
        </Link>
      )}

      <Card.Body style={{ backgroundColor: "#F6DADA" }}>
        <Card.Title className="card-body-drink-title">{item.name}</Card.Title>
        <Card.Text className="card-body-drink-text">
          {item.price.toLocaleString("id", option)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardDrink;
