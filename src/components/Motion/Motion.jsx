import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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
    ? 'block mb-1 text-blue font-latoBold font-bold text-xl'
    : 'block mb-1 text-blue-red font-latoBold font-bold text-xl';

  return (
    <div className="mb-4">
      {/* Rótulo */}
      <span className={`${StyleLabel}`}>
        {label}
        <span className="text-blue font-latoThin font-semibold">
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


