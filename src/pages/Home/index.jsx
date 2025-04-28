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
        <p className="text-primary text-[16px] font-latoThin 
        md:text-[32px]">
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
        <p className="text-primary text-[16px] font-latoThin 
        md:text-[32px]">
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
        <p className="text-primary text-[16px] font-latoThin
        md:text-[32px]">
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
        <BlocoAnimadoMotion className='xsee:flex xsee:flex-row-reverse xse:h-[]'>
          <Div isStyleRight className="text-right xsee:flex xsee:justify-center xsee:pl-8">
            <Title isBold isStyle className="text-primary text-4xl xse:text-6xl md:text-7xl">
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
                className="w-full h-[400px] z-10 xsee:h-[400px] xse:h-[550px] md:h-[700px] xs:h-[800px]"
                src="/assets/img-pages/img-1-inicial.png"
                alt="Homem sorrindo com uma casa na mão"  
                width={100}
                height={480}
                loading="eager"
              />
          
      </BlocoAnimadoMotion>   
          <BlocoAnimadoMotion className="
          xsee:flex 
          xse:h-[600px]
          xs:h-[820px]">
        <Div isStyle className="text-center xsee:flex xsee:justify-center xsee:items-start xsee:text-left">
          <Title isStyle className="text-primary text-4xl
           xsee:text-5xl xsee:mb-8 
           xse:text-6xl 
           md:text-[85px] xs:text-[90px]">
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
            className="w-full h-[460px] object-cover z-10 xsee:h-[400px] xse:h-[700px] xd:h-[550px] xs:h-[800px]"
            src="/assets/img-pages/img-2-inicial.webp"
            alt="Homem sorrindo com uma casa na mão"
            width={1280}
            height={480}
            loading="eager"
          />
      </BlocoAnimadoMotion>   
          <BlocoAnimadoMotion className="bg-primary-gray pt-4 pb-4 xsee:flex xsee:flex-row-reverse xse:h-[700px]">
        <TitleSub isStyle className="text-secondary-blue text-4xl ml-4 pr-16 
         xsee:text-5xl xsee:text-right xsee:pr-4
         xse:text-5xl
         md:text-6xl"
         >
          O crédito da Libra
          <span className="font-latoBold font-bold">
            {' '}
            é sempre a melhor escolha:
          </span>
        </TitleSub>
        <div className="p-4 w-[335px] bg-white rounded-r-[2.25rem] mt-8 mb-8
        xsee:w-[1200px] xsee:bg-primary-gray
        ">
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
        <BlocoAnimadoMotion className='xse:h-[700px] flex justify-center items-center'>
        <div>
        <Div isStyle className="
        xsee:items-start xsee:text-8xl
        ">
          <Title isStyle className="text-primary text-6xl ml-4
          md:text-8xl">
            Libra na
            <span className="text-primary-red font-latoBold"> mídia{''}</span>:
          </Title>
        </Div>
        <Div className="
        xsee:grid xsee:grid-cols-2 xsee:grid-rows-2
        ">
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
        </div>
      </BlocoAnimadoMotion>  
       <BlocoAnimadoMotion className='xsee:flex xsee:flex-row-reverse 
       xsee:h-[600px]
       md:h-[780px]'>
       <Div className="bg-primary p-8 text-5xl
        xsee:pt-36
        md:text-6xl md:p-4 md:pt-52">
          <Title isBold isStyle className="text-white">
            Prezamos a{' '}
            <span className="text-secondary-blue">transparência</span>
          </Title>
          <Paragrafo className="font-latoThin text-white text-2xl
          md:text-4xl md:mt-4">
            A Libra Crédito não solicita nenhum tipo de valor
          </Paragrafo>
          <Paragrafo className="font-latoThin text-white text-2xl
          md:text-4xl">
            antecipado para aprovação de crédito
          </Paragrafo>
        </Div>
        <div
          className="w-full h-[380px] bg-no-repeat bg-cover z-10 
          xsee:text-right xsee:h-[600px] xsee:bg-position-[center_right_-33rem]
          md:bg-position-[center_right_-30rem] md:h-[780px]"
          style={{
            backgroundImage: "url('./assets/img-pages/teste2.png')",
          }}
        >
        <Div className="flex w-full
          xsee:items-end
          md:mt-[0px]
          ">
            <CarrosselMensagens mensagens={mensagens} />
          </Div> 
          <div className=""></div>
        </div> 
      </BlocoAnimadoMotion>
      {/* <BlocoAnimadoMotion className="flex flex-col items-start">
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
      </BlocoAnimadoMotion> */}
      {/* <BlocoAnimadoMotion>
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
      </BlocoAnimadoMotion> */}
      {/* <BlocoAnimadoMotion className="flex flex-col items-start">
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
      </BlocoAnimadoMotion> */}
    </Conteiner>
  );
}
