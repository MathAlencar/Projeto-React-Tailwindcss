import {
  Title,
  Button,
  Div,
  TitleSub, 
  BlockMidia,
  Paragrafo,
  Mensagem,
  StepSimulacao
} from '../../components/Componentes_menu/Menu';
import {
  BlocoAnimadoMotion,
  AnimatedBar,
  CarrosselMensagens
} from '../../components/Motion/Motion';
import Conteiner from '../../components/Conteiner';

export default function Home() {

  const mensagens = [
    {
      id: 'simulacao',
      conteudo: (
        <p className="text-primary text-[16px] font-latoThin font-semibold">
          “Conheci a Libra pelo Instagram e as conversas iniciais foram{' '}
          <span className="font-extrabold font-latoBold text-primary">
            rápidas e eficientes.
          </span>{' '}
          A atenção aos detalhes e o processo transparente me surpreenderam.
          Ajudou muito na redução das{' '}
          <span className="font-extrabold font-latoBold text-primary">
            reduzir dívidas.
          </span>{' '}
          .”
        </p>
      ),
    },
    {
      id: 'teste1',
      conteudo: (
        <p className="text-primary text-[16px] font-latoThin font-semibold">
          “Conheci a Libra pelo Instagram e as conversas iniciais foram{' '}
          <span className="font-extrabold font-latoBold text-primary">
            rápidas e eficientes.
          </span>{' '}
          A atenção aos detalhes e o processo transparente me surpreenderam.
          Ajudou muito na redução das{' '}
          <span className="font-extrabold font-latoBold text-primary">
            reduzir dívidas.
          </span>{' '}
          .”
        </p>
      ),
    },
    {
      id: 'simulacao',
      conteudo: (
        <p className="text-primary text-[16px] font-latoThin font-semibold">
          “Conheci a Libra pelo Instagram e as conversas iniciais foram{' '}
          <span className="font-extrabold font-latoBold text-primary">
            rápidas e eficientes.
          </span>{' '}
          A atenção aos detalhes e o processo transparente me surpreenderam.
          Ajudou muito na redução das{' '}
          <span className="font-extrabold font-latoBold text-primary">
            reduzir dívidas.
          </span>{' '}
          .”
        </p>
      ),
    },
  ];

  return (
    <Conteiner>
       <BlocoAnimadoMotion className='xsee:flex xsee:flex-row-reverse'>
          <Div isStyleRight className="text-right xsee:flex xsee:justify-center xsee:pl-8">
            <Title isBold isStyle className="text-primary">
              Empréstimo com Garantia de imóvel
              <span className="font-latoThin italic font-semibold tracking-wide">
                {' '}
                com flexibilidade
              </span>
            </Title>
            <Button isHover BackGroundType>
              SIMULE AGORA
            </Button>
          </Div>
          <img
                className="w-full h-[400px] bg-center bg-no-repeat bg-cover z-10 xsee:h-[300px] xse:h-[500px] xs:h-[800px]"
                src="/assets/img-pages/img-1-inicial.webp"
                alt="Homem sorrindo com uma casa na mão"  
                width={100}
                height={480}
                loading="eager"
            />
      </BlocoAnimadoMotion> 
        <BlocoAnimadoMotion>
        <Div isStyle className="text-center">
          <Title isStyle className="text-primary">
            O Crédito com as
            <span className="text-primary-red font-latoBold">
              {' '}
              menores taxas{''}
            </span>
            , sem precisar sair de casa
          </Title>
          <Button isHover> SAIBA MAIS </Button>
        </Div>
        <img
            className="w-full h-[460px] object-cover z-10"
            src="/assets/img-pages/img-2-inicial.webp"
            alt="Homem sorrindo com uma casa na mão"
            width={1280}
            height={480}
            loading="eager"
          />
      </BlocoAnimadoMotion> 
      <BlocoAnimadoMotion className="bg-primary-gray pt-4 pb-4">
        <TitleSub isStyle className="text-secondary-blue text-4xl ml-4 pr-16">
          O crédito da Libra
          <span className="font-latoBold font-bold">
            {' '}
            é sempre a melhor escolha:
          </span>
        </TitleSub>
        <div className="p-4 w-[335px] bg-white rounded-r-[2.25rem] mt-8 mb-8">
          <AnimatedBar
            TypeLabel
            label="CGI Libra:"
            labelValue="1,19% ao mês"
            value={10}
            barColorClass="bg-primary"
          />
          <AnimatedBar
            label="Consignado: "
            labelValue="12,24% ao mês"
            value={22.4}
            barColorClass="bg-primary"
          />
          <AnimatedBar
            label="Crédito Pessoal: "
            labelValue="6,72% ao mês"
            value={50.2}
            barColorClass="bg-primary"
          />
          <AnimatedBar
            label="Cheque Especial: "
            labelValue="6,74% ao mês"
            value={67.4}
            barColorClass="bg-primary"
          />
          <AnimatedBar
            label="Cartão de Crédito: "
            labelValue="14,84% ao mês"
            value={100}
            barColorClass="bg-primary"
          />
        </div>
      </BlocoAnimadoMotion>
      <BlocoAnimadoMotion>
        <Div isStyle className="text-left">
          <Title isStyle className="text-primary text-6xl ml-4">
            Libra na
            <span className="text-primary-red font-latoBold"> mídia{''}</span>:
          </Title>
        </Div>
        <Div>
          <BlockMidia img={'./assets/logo/Estadao.webp'}>
            <Paragrafo isStyle className="text-primary">
              Libra simplifica processo para{' '}
              <span className="font-latoBold text-primary">
                empréstimo com garantia de imóvel
              </span>
            </Paragrafo>
          </BlockMidia>
          <BlockMidia img={'./assets/logo/g1.webp'}>
            <Paragrafo isStyle className="text-primary">
              A Libra simplifica tem soluções financeiras{' '}
              <span className="font-latoBold text-primary">
                com as menores taxas no pós-pandemia
              </span>
            </Paragrafo>
          </BlockMidia>
          <BlockMidia img={'./assets/logo/acidade.webp'}>
            <Paragrafo isStyle className="text-primary">
              A Libra Crédito oferece{' '}
              <span className="font-latoBold text-primary">
                empréstimo de baixo custo e personalizado
              </span>
            </Paragrafo>
          </BlockMidia>
          <BlockMidia img={'./assets/logo/R.webp'}>
            <Paragrafo isStyle className="text-primary">
              Libra simplifica processo para{' '}
              <span className="font-latoBold text-primary">
                empréstimo com garantia de imóvel
              </span>
            </Paragrafo>
          </BlockMidia>
        </Div>
      </BlocoAnimadoMotion>
      <BlocoAnimadoMotion>
        <Div className="bg-primary p-8">
          <Title isBold isStyle className="text-white">
            Crédito Seguro e{' '}
            <span className="text-secondary-blue">simulação simplificada</span>
          </Title>
          <Paragrafo className="font-latoThin text-secondary-blue text-2xl">
            A Libra Crédito não solicita nenhum tipo de valor
          </Paragrafo>
          <Paragrafo className="font-latoThin text-secondary-blue text-2xl">
            antecipado para aprovação de crédito
          </Paragrafo>
        </Div>
        <div
          className="w-full h-[380px] bg-center p-4 bg-no-repeat bg-cover z-10"
          style={{
            backgroundImage: "url('./assets/img-pages/img-3-inicial.webp')",
          }}
        >
          <TitleSub
            isBold
            isStyle
            className="text-primary relative z-20 pl-[8px] pt-2 text-4xl"
          >
            Quem
          </TitleSub>
          <TitleSub
            isBold
            isStyle
            className="text-secondary-blue relative z-20 pl-[8px] text-4xl"
          >
            Conhece,
          </TitleSub>
          <TitleSub
            isBold
            isStyle
            className="text-primary relative z-20 pl-[8px] text-4xl"
          >
            Confia
          </TitleSub>
          <Div className="flex justify-center mt-[30px]">
            <CarrosselMensagens mensagens={mensagens} />
          </Div>
        </div>
      </BlocoAnimadoMotion>
      <BlocoAnimadoMotion className="flex flex-col items-start">
        <div className="w-full p-4">
          <p className="text-4xl font-latoBold font-extrabold text-primary">
            Perguntas
          </p>
          <p className="text-4xl font-latoBold font-extrabold text-secondary-blue">
            Frequentes<span className="text-primary">:</span>
          </p>
        </div>
        <div className="w-full p-4 grid gap-2">
          <Mensagem>
            <p className="font-latoBold font-extrabold text-white text-[20px]">
              Como funciona?
            </p>
          </Mensagem>
          <Mensagem>
            <p className="font-latoBold font-extrabold text-white text-[20px]">
              Posso morar no imóvel?
            </p>
          </Mensagem>
          <Mensagem>
            <p className="font-latoBold font-extrabold text-white text-[20px]">
              Como iniciar o atendimento?
            </p>
          </Mensagem>
          <Mensagem>
            <p className="font-latoBold font-extrabold text-white text-[20px]">
              Posso morar no imóvel?
            </p>
          </Mensagem>
          <Mensagem>
            <p className="font-latoBold font-extrabold text-white text-[20px]">
              Como funciona?
            </p>
          </Mensagem>
        </div>
      </BlocoAnimadoMotion>
      <BlocoAnimadoMotion>
        <Div isStyle className="text-left">
          <TitleSub isStyle className="text-primary text-6xl ml-4">
            Crédito com garantia de imóvel
          </TitleSub>
          <TitleSub isStyle className="text-primary text-[30px]">
            Para{' '}
            <span className="text-secondary-blue">
              {' '}
              usar do jeito que quiser!
            </span>
          </TitleSub>
        </Div>
        <Div>
          <BlockMidia
            className="bg-primary-gray rounded-xl m-2"
            img={'./assets/logo/foguete.webp'}
          >
            <Paragrafo isStyle className="text-primary">
              Investiram em seus negócios, com nosso{' '}
              <span className="font-latoBold text-primary">
                capital de giro{' '}
                <span className="font-latoBold text-primary">
                  {' '}
                  inteligente!
                </span>
              </span>
            </Paragrafo>
          </BlockMidia>
          <BlockMidia
            img={'./assets/logo/casa.webp'}
            className="bg-primary-gray rounded-xl m-2"
          >
            <Paragrafo isStyle className="text-primary">
              Viabiliza o capital necessário para iniciar aquela{' '}
              <span className="font-latoBold text-primary">
                reforma dos sonhos!
              </span>
            </Paragrafo>
          </BlockMidia>
          <BlockMidia
            img={'./assets/logo/bomba.webp'}
            className="bg-primary-gray rounded-xl m-2"
          >
            <Paragrafo isStyle className="text-primary">
              <span className="font-latoBold text-primary">
                Quitaram suas dívidas{' '}
              </span>
              e consquitaram o equilíbrio financeiro
            </Paragrafo>
          </BlockMidia>
        </Div>
      </BlocoAnimadoMotion>
      <BlocoAnimadoMotion className="flex flex-col items-start">
        <TitleSub isStyle className="text-primary text-4xl m-8">
          Passo a passo para conseguir
          <span className="text-secondary-blue"> crédito barato</span>
        </TitleSub>
        <StepSimulacao img={'/assets/img-pages/img-3-inicial.webp'} number="1">
          Simulação de valores
        </StepSimulacao>
        <StepSimulacao img={'/assets/img-pages/img-3-inicial.webp'} number="2">
          Análise de crédito
        </StepSimulacao>
        <StepSimulacao img={'/assets/img-pages/img-3-inicial.webp'} number="3">
          Avaliação de imóvel
        </StepSimulacao>
        <StepSimulacao img={'/assets/img-pages/img-3-inicial.webp'} number="4">
          Proposta final e assinatura
        </StepSimulacao>
      </BlocoAnimadoMotion>  
    </Conteiner>
  );
}
