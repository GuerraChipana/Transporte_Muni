/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../style/InterfasUser.css'; // Importar el archivo CSS

const InterfasUser = () => {
  const [placa, setPlaca] = useState('');

  const handleInputChange = (e) => {
    setPlaca(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la búsqueda de la placa
    console.log('Placa ingresada:', placa);
  };

  return (
    <div className="container">
      <h1 className="title">Interfaz de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="placa" className="label">
          Ingrese la placa del vehículo:
        </label>
        <input
          type="text"
          id="placa"
          value={placa}
          onChange={handleInputChange}
          placeholder="ABC-123"
          className="input"
          required
        />
        <button type="submit" className="button">Buscar Vehículo</button>
      </form>
      
      {/* Cambiamos el tag <a> por <Link> */}
      <Link to="/login" className="Link">¿Eres administrador? Inicia sesión aquí</Link>
    </div>
  );
};

export default InterfasUser;
