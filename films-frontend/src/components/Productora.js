// src/components/Productora.js
import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import '../App.css'; // Importar estilos generales

const Productora = () => {
  const [productoras, setProductoras] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')  // Cambia esta URL según tu API
      .then(response => response.json())
      .then(data => {
        const uniqueProductoras = [...new Set(data.map(pelicula => pelicula.productionCompany))];
        setProductoras(uniqueProductoras);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container className="mt-4">
      <div className="container-info">
        <h2 className="text-dark">Productoras</h2>
        <ListGroup>
          {productoras.map((productora, index) => (
            <ListGroup.Item key={index} className="text-dark">{productora}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Productora;