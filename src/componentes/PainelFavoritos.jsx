import React from 'react';
import PainelFavoritos from './PainelFavoritos'; // Importe o componente PainelFavoritos

function App() {
  // Suponhamos que você tenha uma lista de atletas favoritos
  const favoritos = [
    { nome: 'Atleta 1' },
    { nome: 'Atleta 2' },
    { nome: 'Atleta 3' },
  ];

  return (
    <div className="App">
      <PainelFavoritos favoritos={favoritos} /> {/* Renderize o componente PainelFavoritos e passe a lista de favoritos como prop */}
    </div>
  );
}

export default App;
