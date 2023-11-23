import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ films }) => {
  const params = useParams();
  const deatil = films.find((el) => el.id === Number(params.id));
  return (
    <div>
      <div className="donnee">
        <img
          style={{ height: "800px", width: "500px" }}
          src={deatil.imgUrl}
          alt="logo"
        />
        <div style={{ margin: "25px" }}>
          <h1 style={{ display: "flex", justifyContent: "center" }} id="title">
            {deatil.name}
          </h1>
          <p style={{ color: "white", margin: "80px" }}>{deatil.Description}</p>
          <iframe
            style={{
              width: "800px",
              height: "600px",
              marginLeft: "40px",
            }}
            src={deatil.trailer}
            title="trailer video"
            frameborder="2"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
