import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import CardAtleta from './componentes/CardAtleta';
import PainelFavoritos from './componentes/PainelFavoritos';
import { searchAthletes } from './componentes/apiAthletes';

function App() {
  const [pesquisa, setPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const fetchAthletes = async () => {
    try {
      const response = await searchAthletes(pesquisa);
      console.log('Atletas encontrados:', response.data);
      setResultados(response.data);
    } catch (error) {
      console.error('Erro ao buscar atletas:', error);
    }
  };

  useEffect(() => {
    fetchAthletes(); // Inicialize a pesquisa assim que o componente for montado
  }, [pesquisa]);

  const handleAddToFavorites = (atleta) => {
    if (!favoritos.find((fav) => fav.id === atleta.id)) {
      setFavoritos([...favoritos, atleta]);
    }
  };

  const handleSearchClick = () => {
    fetchAthletes(); // Chame a função fetchAthletes aqui
  };

  return (
    <div className="App">
      <h1>Pesquisa de Atletas</h1>
      <input
        type="text"
        placeholder="Pesquisar atletas por nome"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      <button onClick={handleSearchClick}>Buscar</button>
      <div className="resultados">
        {resultados.map((atleta, index) => (
          <CardAtleta key={index} atleta={atleta} onAddToFavorites={handleAddToFavorites} />
        ))}
      </div>
      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
}

export default App;
