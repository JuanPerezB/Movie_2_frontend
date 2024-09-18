// src/components/Media.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Importar estilos generales

const Media = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')  // Asegúrate de que esta es la URL correcta
      .then(response => response.json())
      .then(data => setPeliculas(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container className="mt-4">
      <div className="container-info">
        <h2 className="text-dark">Películas</h2>
        <Row>
          {peliculas.map((pelicula) => (
            <Col md={4} key={pelicula._id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`http://localhost:8080${pelicula.coverImage}`} alt={pelicula.title} />
                <Card.Body>
                  <Card.Title className="text-dark">{pelicula.title}</Card.Title>
                  <Card.Text className="text-dark">{pelicula.director}</Card.Text>
                  <Card.Text className="text-dark">{pelicula.genre}</Card.Text>
                  <Card.Text className="text-dark">{pelicula.releaseDate}</Card.Text>
                  <Card.Text className="text-dark">Rating: {pelicula.rating}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Media;