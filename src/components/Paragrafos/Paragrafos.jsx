import { FaPlus, FaTimes } from 'react-icons/fa';

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
    ? 'font-latoThin bg-red-400 text-white'
    : 'font-latoBold bg-red-400 text-white';
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
