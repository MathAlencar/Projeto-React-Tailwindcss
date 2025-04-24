import axios from 'axios';
// Definindo uma URL padrão para que não precise repetir sempre.
const apiIBGE = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
});

export default apiIBGE;