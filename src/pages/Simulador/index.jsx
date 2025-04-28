import Conteiner from '../../components/Conteiner';
import { useState } from 'react';
import { createdContactCardAPI, callSimulation } from '../../api/APIChamadas'
import BuscaCidades from '../../components/Components_simulador/inputCidades';
import { formatadorInput } from '../../methods/metodos'

export default function Simulador() {
    const [cidadeSelect, setCidadeSelect] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
  
    const [valorSolicitado, setValorSolicitado] = useState('');
    const [valorGarantia, setValorGarantia] = useState('');
    const [txJuros, setTxJuros] = useState('');
    const [qtdParcelas, setQtdParcelas] = useState('');
    const [amortizacao, setAmortizacao] = useState('');
    const [carencia, setCarencia] = useState('');
    const [primeiraParcela, setPrimeiraParcela] = useState(''); 
  
    const [createDeal, setCreateDeal] = useState(false);
    const [simulation, setSimulation] = useState(true);
    const [bannerSimulation, setBannerSimulation] = useState(false);
    const [simulationExists, setSimulationExists] = useState(false);

    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
          const simulation = new callSimulation(valorGarantia, valorSolicitado, txJuros, qtdParcelas, carencia, amortizacao);
          const firtValue = await simulation.getSimulationPrimeiraParcela()
          setPrimeiraParcela(firtValue)
          setCreateDeal(true)
        }catch(e){
          alert('Ocorreu um erro na chamada da API', e)
        }
    }
  
    async function handleSubmitDeal(e) {
      e.preventDefault();
  
      try{
        const ploomes = new createdContactCardAPI(email, nome, telefone, valorGarantia, valorSolicitado, txJuros, qtdParcelas, carencia,  primeiraParcela, amortizacao, cidadeSelect);
        const createDeal = await ploomes.main()
        setCreateDeal(false); // Banner para criar o card no ploomes some;
        setSimulation(false); // Banner de simulação irá sumir;
        setBannerSimulation(true); // Banner de simulação realizada irá aparecer;
        setSimulationExists(createDeal); // Irá definir a mensagem de criação ou não do card;
      }catch(error){
        console.log('Erro na chamada de API', error)
      }
    }
    
    return (
      <Conteiner>
        <div className={`max-w-[1600px] w-full mx-auto p-8 rounded-2xl xsee:px-4 
          ${bannerSimulation ? 'block' : 'block xsee:flex'}
        `}>
          {simulation && 
          <form onSubmit={handleSubmit} className="space-y-5 max-w-[1600px] bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              Simulação de <span className="text-green-600">Crédito com Garantia de Imóvel</span>
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Com poucos cliques, simule seu empréstimo com garantia de imóvel e descubra condições acessíveis.
            </p>

            <BuscaCidades onSelecionarCidade={(cidade) => setCidadeSelect(cidade)} />
            
            <label htmlFor="valorSolicitado" className="block text-sm font-medium text-gray-700">
              Valor do empréstimo
              <input
                onChange={(e) => setValorSolicitado(formatadorInput.formatarValorMonetario(e.target.value))}
                type="text"
                id="vlr_solicitado"
                placeholder="R$ 75.000"
                value={valorSolicitado}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </label>
  
            <label htmlFor="valorGarantia" className="block text-sm font-medium text-gray-700">
              Valor do imóvel
              <input
                onChange={(e) => setValorGarantia(formatadorInput.formatarValorMonetario(e.target.value))}
                type="text"
                placeholder="R$ 150.000"
                value={valorGarantia}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </label>
  
            <label htmlFor="txJuros" className="block text-sm font-medium text-gray-700">
              Taxa de Juros
              <input
                onChange={(e) => setTxJuros(formatadorInput.formatarJuros(e.target.value))}
                type="text"
                id="juros"
                placeholder="1,19%"
                value={txJuros}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </label>
  
            <label htmlFor="qtdParcelas" className="block text-sm font-medium text-gray-700">
              Número de parcelas
              <input
                onChange={(e) => setQtdParcelas(e.target.value)}
                type="text"
                id="nmr_parcelas"
                placeholder="180"
                value={qtdParcelas}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </label>
  
            <label htmlFor="carencia" className="block text-sm font-medium text-gray-700">
              Carência (meses)
              <input
                onChange={(e) => setCarencia(e.target.value)}
                type="number"
                placeholder="3"
                value={carencia}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </label>
  
            <label htmlFor="amortizacao" className="block text-sm font-medium text-gray-700">
              Amortização
              <input
                onChange={(e) => setAmortizacao(e.target.value)}
                type="text"
                placeholder="SAC"
                value={amortizacao}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </label>
  
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
            >
              Simular
            </button>
          </form>
          }
          { createDeal && 
          <form onSubmit={handleSubmitDeal} className="max-w-[600px] mx-auto bg-primary text-white p-6 rounded-2xl shadow-lg space-y-4">
              <div className="bg-white text-blue-900 text-center text-2xl font-bold py-3 px-4 rounded-lg">
                <span className="text-sm block font-medium text-gray-700">Valor da parcela</span>
                R$ {primeiraParcela}
              </div>
  
              <p className="text-sm text-center text-green-400 font-semibold">
                Gostou da simulação?
              </p>
              <p className="text-xs text-center text-white">
                Preencha seus dados abaixo e solicite agora uma análise de crédito. Nossa equipe entrará em contato rapidamente para continuar o processo da sua solicitação.
              </p>
  
              <input
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-2 rounded-full bg-amber-50 text-gray-800 border focus:ring-2 focus:ring-blue-500"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 rounded-full bg-amber-50 text-gray-800 border focus:ring-2 focus:ring-blue-500"
              />
              <input
                onChange={(e) => setTelefone(formatadorInput.formatandoTelefone(e.target.value))}
                value={telefone}
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-2 rounded-full bg-amber-50 text-gray-800 border focus:ring-2 focus:ring-blue-500"
              />
  
              <div className="mt-2 text-center text-sm text-white font-medium">
                O imóvel em garantia é:
                <div className="flex justify-center gap-4 mt-1">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="garantia" value="proprio" className="accent-green-400" />
                    próprio
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="garantia" value="terceiro" className="accent-green-400" />
                    de terceiros
                  </label>
                </div>
              </div>
  
              <label className="flex items-center text-xs mt-2">
                <input type="checkbox" className="accent-blue-600 mr-2" />
                Concordo com os termos de uso e a política de privacidade.
              </label>
  
              <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-full font-bold hover:bg-red-600 transition-all">
                Iniciar atendimento
              </button>
          </form>}
  
          { bannerSimulation && <div className="min-h-screen bg-gradient-to-b flex items-center justify-center">
          <div className="text-center px-6 py-12 bg-white shadow-lg rounded-2xl max-w-2xl w-full relative">
            
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-blue-600">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
  
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800">
              {simulationExists ? 'Recebemos sua solicitação com sucesso!' : 'Você já fez uma simulação em nosso site dentro de 7 dias, e os nossos consultores estão tentando contato'}
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base max-w-md mx-auto">
              Em breve um de nossos consultores entrará em contato no telefone cadastrado.
              Acesse nosso Blog e saiba mais sobre Empréstimo com Imóvel em Garantia.
            </p>
  
            <div className="mt-6">
              <a
                href="https://wa.me/11951098449"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.75 11.75 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.11 1.59 5.91L0 24l6.29-1.65A11.73 11.73 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.18-3.48-8.52zM12 22a9.94 9.94 0 01-5.36-1.55l-.38-.23-3.73.98 1-3.63-.25-.38A9.96 9.96 0 1122 12c0 5.52-4.48 10-10 10zm5.46-7.38c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.23-.64.08-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.61-.91-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.07-.8.34s-1.05 1.02-1.05 2.48c0 1.45 1.06 2.85 1.2 3.05.15.2 2.1 3.2 5.1 4.48.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.71.25-1.33.17-1.42-.08-.08-.27-.13-.57-.27z" />
                </svg>
                INICIE SEU ATENDIMENTO AGORA!
              </a>
            </div>
  
            <p className="text-xs text-gray-500 mt-4">
              Obs: A Libra Crédito não solicita nenhum tipo de pagamento antecipado para a aprovação de crédito.
            </p>
          </div>
  
        </div>
    }
  
        </div> 
      </Conteiner>
    );
}
