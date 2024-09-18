// src/components/Tipo.js
import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import '../App.css'; // Importar estilos generales

const Tipo = () => {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')  // Cambia esta URL según tu API
      .then(response => response.json())
      .then(data => {
        const uniqueTipos = [...new Set(data.map(pelicula => pelicula.type))];
        setTipos(uniqueTipos);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container className="mt-4">
      <div className="container-info">
        <h2 className="text-dark">Tipos</h2>
        <ListGroup>
          {tipos.map((tipo, index) => (
            <ListGroup.Item key={index} className="text-dark">{tipo}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Tipo;