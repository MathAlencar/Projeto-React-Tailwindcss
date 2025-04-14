import { FaPlus, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export function Title({ children, className = '', isStyle, isBold }) {
  const baseStyle = isStyle ? 'mb-4 text-4xl md:text-8xl xl:text-9xl' : '';
  const BoldOrNot = isBold
    ? 'font-latoBold text-4xl md:text-8xl xl:text-9xl'
    : 'font-latoThin font-semibold';
  return (
    <h1 className={`${baseStyle} ${className} ${BoldOrNot}`}>{children}</h1>
  );
}

export function Button({ children, BackGroundType, isHover }) {
  const baseStyle =
    'flex items-center pt-3 pb-3 pr-4 pl-4 box-border justify-center rounded-full text-2xl leading-5 duration-300 ease-in';
  const hover = isHover ? 'hover:scale-105' : '';
  const variant = BackGroundType
    ? 'font-latoThin bg-primary-red text-white'
    : 'font-latoBold bg-primary-green text-white';
  return (
    <button className={`${baseStyle} ${hover} ${variant}`} type="button">
      {children}
    </button>
  );
}

export function Div({ children, className = '', isStyleRight }) {
  const baseStyle = isStyleRight
    ? 'p-4 flex flex-col items-end'
    : 'p-2 flex flex-col items-center';
  return <div className={`${baseStyle} ${className}`}>{children}</div>;
}

export function TitleSub({ children, className = '', isStyle, isBold }) {
  const baseStyle = isStyle ? 'text-4xl md:text-8xl xl:text-9xl' : '';
  const BoldOrNot = isBold
    ? 'font-latoBold text-4xl md:text-8xl xl:text-9xl'
    : 'font-latoThin font-semibold';
  return (
    <h2 className={`${baseStyle} ${BoldOrNot} ${className}`}>{children}</h2>
  );
}

export function BlockMidia({ children, img, className = '' }) {
  const baseStyle = 'flex items-center gap-4 w-full max-w-md p-4';
  return (
    <div className={`${baseStyle} ${className}`}>
      <img
        src={img}
        alt="Imagem"
        className="w-24 h-24 object-cover border-gray-300"
        width={100}
        height={480}
        loading="eager"
      />
      <div className="flex-1 text-gray-800 text-base leading-snug">
        {children}
      </div>
    </div>
  );
}

export function Paragrafo({ children, className = '', isStyle, isBold }) {
  const baseStyle = isStyle ? 'mb-2 text-xl md:text-1xl xl:text-1xl' : '';
  const BoldOrNot = isBold
    ? 'font-latoBold text-xl md:text-1xl xl:text-1xl'
    : 'font-latoThin font-semibold';
  return (
    <p className={`${baseStyle} ${BoldOrNot} ${className} `}>{children}</p>
  );
}

export function Mensagem({ children }) {
  const [mensagenOpen, setMensagemOpen] = useState(false);

  return (
    <div className="flex items-center grid gap-[5px]">
      {/* Cabeçalho: ícone e botão */}
      <div className="flex items-center">
        <div className="bg-secondary-blue rounded-[2.25rem] w-auto p-[7px] mr-[1px]">
          {children}
        </div>
        <button
          onClick={() => setMensagemOpen(!mensagenOpen)}
          type="button"
          className="p-2 w-[35px] bg-primary flex justify-center rounded-[100%]"
        >
          {mensagenOpen ? (
            <FaTimes color="white" size={16} />
          ) : (
            <FaPlus color="white" size={16} />
          )}
        </button>
      </div>

      {/* Container com animação */}
      <div
        className="bg-primary text-white rounded-[2.25rem] w-full overflow-hidden transition-all duration-300 ease-in text-center"
        style={{
          maxHeight: mensagenOpen ? '190px' : '0px',
          padding: mensagenOpen ? '10px' : '0px',
        }}
      >
        <div
          className={`rounded-[2.25rem] w-full transition-opacity duration-300 ease-in ${
            mensagenOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          A seguir, segue um exemplo que anima uma linha descendente – ela
          cresce de cima para baixo – e, depois, revela o conteúdo com um leve
          delay. Você pode ajustar o tamanho, duração e delay conforme
          necessário:
        </div>
      </div>
    </div>
  );
}

export function StepSimulacao({ children, img, number }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-md  mt-[20px] mb-[20px] mr-[20px]">
      <div className="flex border-solid  border-t-2 border-b-2 border-r-2 rounded-r-3xl  border-secondary-blue">
        {/* Número */}
        <div className="flex items-center p-[10px] pr-8 pl-8 justify-center text-primary rounded-full font-semibold text-7xl">
          {number}
        </div>

        {/* Imagem do Homem */}
        <div className="w-24 h-24">
          <img
            src={img}
            alt="Homem olhando o celular"
            className="object-cover w-full h-full rounded-3xl"
            width={100}
            height={480}
            loading="eager"
          />
        </div>
      </div>
      {/* Texto */}
      <span className="font-latoThin font-semibold text-primary text-2xl">
        {children}
      </span>
    </div>
  );
}