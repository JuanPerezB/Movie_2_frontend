// src/components/Genero.js
import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import '../App.css'; // Importar estilos generales

const Genero = () => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')  // Cambia esta URL según tu API
      .then(response => response.json())
      .then(data => {
        const uniqueGenres = [...new Set(data.map(pelicula => pelicula.genre))];
        setGeneros(uniqueGenres);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container className="mt-4">
      <div className="container-info">
        <h2 className="text-dark">Géneros</h2>
        <ListGroup>
          {generos.map((genero, index) => (
            <ListGroup.Item key={index} className="text-dark">{genero}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Genero;