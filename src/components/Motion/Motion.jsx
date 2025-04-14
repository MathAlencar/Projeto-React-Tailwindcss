import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';


export function BlocoAnimadoMotion({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedBar({
  label,
  value,
  barColorClass,
  TypeLabel,
  labelValue,
}) {
  const StyleLabel = TypeLabel
    ? 'block mb-1 text-primary font-latoBold font-bold text-xl'
    : 'block mb-1 text-primary-red font-latoBold font-bold text-xl';

  return (
    <div className="mb-4">
      {/* Rótulo */}
      <span className={`${StyleLabel}`}>
        {label}
        <span className="text-primary font-latoThin font-semibold">
          {labelValue}
        </span>
      </span>

      {/* Container da barra */}
      <div className="w-full h-[30px] bg-gray-300 rounded-r-full overflow-hidden">
        {/* Barra animada que cresce somente ao entrar na viewport */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${barColorClass} h-full rounded-r-full`}
        />
      </div>
    </div>
  );
}

export function CarrosselMensagens({ mensagens }) {
  const [index, setIndex] = useState(0);

  const proxima = () => {
    setIndex((prev) => (prev + 1) % mensagens.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      proxima();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl">
      {/* Botão fora do box com overflow-hidden */}
      <div className="rounded-full p-[2px] h-auto bg-secondary-blue absolute -right-[15px] top-1/2 -translate-y-1/2 z-20 cursor-pointer transition-transform hover:scale-110">
        <FaArrowRight onClick={proxima} className="text-primary text-2xl" />
      </div>

      {/* Carrossel que faz a transição */}
      <div className="relative overflow-hidden w-full h-[10rem] bg-gray-100 rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={mensagens[index].id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full text-left p-[10px]"
          >
            {mensagens[index].conteudo}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

