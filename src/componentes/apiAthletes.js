import axios from 'axios';
import CardAtleta from './CardAtleta';
import PainelFavoritos from './PainelFavoritos';

const apiUrl = 'https://api-football-v1.p.rapidapi.com/v3/players';

const searchAthletes = async (athleteName) => {
  try {
    const response = await axios.get(`${apiUrl}?name=${athleteName}`);
    return response.data; 
  } catch (error) {
    console.error('Erro na pesquisa de atletas:', error);
    throw error; 
  }
};

const getPlayerInfo = async (playerId, season) => {
  const options = {
    method: 'GET',
    url: apiUrl,
    params: {
      id: playerId,
      season: season
    },
    headers: {
      'X-RapidAPI-Key': 'b32c1c535amsh2d4bdb7b4d49356p1d02b7jsn22494af1b6a3',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter informações do jogador:', error);
    throw error;
  }
};
searchAthletes('Nome do Atleta')
  .then(data => {
    console.log('Resultado da pesquisa:', data);
  })
  .catch(error => {
    console.error('Erro na pesquisa de atletas:', error);
  });

getPlayerInfo('ID do Jogador', 'Temporada')
  .then(data => {
    console.log('Informações do jogador:', data);
  })
  .catch(error => {
    console.error('Erro ao obter informações do jogador:', error);
  });

export { searchAthletes, getPlayerInfo };
