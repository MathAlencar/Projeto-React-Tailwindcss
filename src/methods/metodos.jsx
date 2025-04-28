
export class formatadorInput{
    constructor(){}

    static formatarJuros(valor){
        const numerico = valor.replace(/[^0-9]/g, '');
        const float = parseFloat(numerico) / 100;
        if(isNaN(float)) return '0,00'
        return `${float.toFixed(2)}`;
    };

    static formatarValorMonetario(valor){
        const apenasNumeros = valor.replace(/\D/g, '');
        const valorFloat = parseFloat(apenasNumeros) / 100;
        
        if (isNaN(valorFloat)) return 'R$ 0,00';
        
            return `R$ ${valorFloat.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}`;
    };

    static tratandoValoresInput(valor){
        valor = valor.replace('R$', '').replaceAll('.', '').replace(',','.').replace('%', '')
        return valor
    }

    static  formatandoTelefone(valor){
        const numeros = valor.replace(/\D/g, '').slice(0, 11); // Limita a 11 dígitos

        if (numeros.length <= 2) {
          return `(${numeros}`;
        } else if (numeros.length <= 6) {
          return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
        } else if (numeros.length <= 10) {
          return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
        } else {
          return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
        }
    }
}


