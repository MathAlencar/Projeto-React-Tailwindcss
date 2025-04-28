import { useState, useEffect, useRef } from "react";

export default function BuscaCidades({ onSelecionarCidade }) {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (termo.length < 3) {
      setResultados([]);
      return;
    }

    debounceRef.current = setTimeout(() => {
      fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios")
        .then((res) => res.json())
        .then((data) => {
          const filtrados = data.filter((cidade) =>
            cidade.nome.toLowerCase().startsWith(termo.toLowerCase())
          );
          setResultados(filtrados);
        })
        .catch((err) => {
          console.error("Erro ao buscar cidades:", err);
          setResultados([]);
        })
    }, 400); // debounce de 400ms
  }, [termo]);

  const handleSelecionarCidade = (cidade) => {
    const nomeCompleto = `${cidade.nome} - ${cidade.microrregiao.mesorregiao.UF.sigla}`;
    setTermo(nomeCompleto);
    onSelecionarCidade(nomeCompleto);
    setResultados([]);
  };

  return (
    <div className="relative">
      <label htmlFor="Cidade" className="block text-sm font-medium text-gray-700 mb-1">
        Cidade da garantia do imóvel
      </label>

      <input
        type="text"
        id="Cidade"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
        placeholder="Digite o nome da cidade..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />

      {resultados.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-1 z-10 max-h-60 overflow-auto transition-all duration-200 ease-in-out">
          {resultados.map((cidade) => (
            <li
              key={cidade.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
              onClick={() => handleSelecionarCidade(cidade)}
            >
              {cidade.nome} - {cidade.microrregiao.mesorregiao.UF.sigla}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

