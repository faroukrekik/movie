import React from "react";
import { Button, Card } from "react-bootstrap";
import StarRating from "./StarRating";

const MovieCard = ({ el, del }) => {
  return (
    <div className="carte">
      <Card style={{ width: "300px", margin: "15px" }}>
        <Card.Img
          style={{ width: "300px", height: "350px" }}
          variant="top"
          src={el.imgUrl}
        />
        <Card.Body id="card" style={{ height: "325px", width: "300px" }}>
          <Card.Title style={{ height: "50px" }}>{el.name}</Card.Title>
          <Card.Text style={{ height: "15px" }}>{el.date}</Card.Text>
          <Card.Text
            style={{
              fontSize: "10px",
              width: "250px",
              height: "100px",
              margin: "15px 0px",
            }}
          >
            {el.Description}
          </Card.Text>
          <Card.Text style={{ height: "15px" }}>
            {" "}
            <StarRating rating={el.rating} />{" "}
          </Card.Text>

          <Button style={{ margin: "15px" }} variant="primary">
            More details
          </Button>
          <Button
            onClick={() => del(el.id)}
            style={{ margin: "15px" }}
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
