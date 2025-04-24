import axios from 'axios';
// Definindo uma URL padrão para que não precise repetir sempre.
const apiSimulation = axios.create({
  baseURL: 'http://192.168.1.224:4223',
});

export default apiSimulation;

// const dados = {
//     vlr_imovel : vlr_imovel,
//     valor_solicitado : vlr_solicitado,
//     juros : juros,
//     numero_parcelas : nmr_parcelas,
//     carencia: nmr_carencia,
//     amortizacao: opt_amortizacao
// }