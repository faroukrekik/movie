import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState(0);
  const [desc, setDesc] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const newMovies = {
      id: Math.random(),
      imgUrl: image,
      name: name,
      rating: rate,
      date: date,
      Description: desc,
    };
    if (name && image && date && rate && desc) {
      handleAdd(newMovies);
      handleClose();
    } else {
      alert("please fill all the form");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handlesubmit}
          >
            <label htmlFor="">Movie name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Cover url</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="">Relase date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="">Rating</label>
            <input
              type="text"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
