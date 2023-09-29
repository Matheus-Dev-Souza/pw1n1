// CardAtleta.js
import React from 'react';

function CardAtleta({ atleta, onAddToFavorites }) {
  return (
    <div className="card">
      <img src={atleta.imagem} alt={atleta.nome} />
      <h2>{atleta.nome}</h2>
      <button onClick={() => onAddToFavorites(atleta)}>Adicionar aos favoritos</button>
    </div>
  );
}

export default CardAtleta;
