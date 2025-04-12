import {
  Title,
  Button,
  Div,
  TitleSub
} from '../../components/Paragrafos/Paragrafos';
import {
  BlocoAnimadoMotion,
  AnimatedBar
} from '../../components/Motion/Motion';

export default function Teste() {

  return (
    <div>
      <BlocoAnimadoMotion>
          <Div isStyleRight className="text-right">
            <Title isBold isStyle className="text-primary">
              Empréstimo com Garantia de imóvel
              <span className="font-latoThin italic font-semibold">
                {' '}
                com flexibilidade
              </span>
            </Title>
            <Button isHover BackGroundType>
              SIMULE AGORA
            </Button>
          </Div>
            <img
                className="w-full h-[460px] bg-center bg-no-repeat bg-cover z-10"
                src="/assets/img-pages/img-1-inicial.png"
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
      <BlocoAnimadoMotion className="pt-4 pb-4">
        <TitleSub isStyle className="text-secondary-blue text-4xl ml-4 pr-16">
          O crédito da Libra
          <span className="font-latoBold font-bold">
            {' '}
            é sempre a melhor escolha:
          </span>
        </TitleSub>
        <div className="p-4 w-[335px] bg-gray-200 rounded-r-[2.25rem] mt-8 mb-8">
          <AnimatedBar
            TypeLabel
            label="CGI Libra:"
            labelValue="1,19% ao mês"
            value={10}
            barColorClass="bg-blue-700"
          />
          <AnimatedBar
            label="Consignado: "
            labelValue="12,24% ao mês"
            value={22.4}
            barColorClass="bg-blue-700"
          />
          <AnimatedBar
            label="Crédito Pessoal: "
            labelValue="6,72% ao mês"
            value={50.2}
            barColorClass="bg-blue-700"
          />
          <AnimatedBar
            label="Cheque Especial: "
            labelValue="6,74% ao mês"
            value={67.4}
            barColorClass="bg-blue-700"
          />
          <AnimatedBar
            label="Cartão de Crédito: "
            labelValue="14,84% ao mês"
            value={100}
            barColorClass="bg-blue-700"
          />
        </div>
      </BlocoAnimadoMotion>
    </div>
  );
}
