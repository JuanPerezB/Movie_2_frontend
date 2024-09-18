// src/components/Director.js
import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import '../App.css'; // Importar estilos generales

const Director = () => {
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')  // Cambia esta URL según tu API
      .then(response => response.json())
      .then(data => {
        const uniqueDirectors = [...new Set(data.map(pelicula => pelicula.director))];
        setDirectores(uniqueDirectors);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container className="mt-4">
      <div className="container-info">
        <h2 className="text-dark">Directores</h2>
        <ListGroup>
          {directores.map((director, index) => (
            <ListGroup.Item key={index} className="text-dark">{director}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Director;