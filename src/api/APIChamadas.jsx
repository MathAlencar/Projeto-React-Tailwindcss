
import apiSimulation from "../services/axios";
import apiPloomes from "../services/axiosPloomes";
import { formatadorInput } from '../methods/metodos'

// o que falta?
/*
- Fazer as validações dos campos de valores atráves do front end;
*/

export class createdContactCardAPI extends formatadorInput{
    constructor(email, Name, PhoneNumber, vlr_imovel, vlr_solicitado, juros, nmr_parcelas, carencia, primeiraParcela, amortizacao, cidadeSelect){
        super()
        this.email = email;
        this.Name = Name;
        this.PhoneNumber = PhoneNumber;
        this.vlr_imovel = vlr_imovel;
        this.vlr_solicitado = vlr_solicitado;
        this.juros = juros;
        this.nmr_parcelas = nmr_parcelas;
        this.carencia = carencia;
        this.amortizacao = amortizacao;
        this.primeiraParcela = primeiraParcela;
        this.cidadeSelect = cidadeSelect;
        this.contactID = false;
    }

    // Metódo principal que será responsável por criar a classe;
    async main(){

        // Dados que serão enviados para o ploomes caso o Contato não exista;
        const dados = {
            TypeId: 2, 
            StatusId: 0,
            Email: this.email,
            Name: this.Name,
            TasksOrdination: 2,
            Editable: true,
            Neighborhood: null,
            ZipCode: 0, // precisa ser string, não número
            Register: null, // sem pontuação, se for CNPJ
            OriginId: null, // Evite usar 0. Use um ID válido ou remova se não for obrigatório
            CompanyId: null, // pode ser removido se não estiver criando com vínculo de empresa
            StreetAddressNumber: null, // string costuma ser mais segura aqui
            Phones: [
                {
                    PhoneNumber: this.PhoneNumber,
                    SearchPhoneNumber: this.PhoneNumber,
                    TypeId: 2, // Verifique se esse tipo existe (ex: 0 = celular)
                    CountryId: 55 // Código do Brasil (não deixe 0)
                }
            ]
        };

        this.contactID = await this.validateContact(); // Verificando se existe algum contato vinculado a este e-mail;
        
        // Condições para realizar a criação do Deal/contato no banco de dados;

        // Aqui iremos respeitar uma regra de 7 dias para realizar a criação deste contato;
        if(this.contactID){
            const DealExits = await this.validateDeal()
            if(DealExits){
                return false
            }else {
                await this.createDeal();
                return true
            }
        }else { 
            this.contactID = await this.createContact(dados)
            await this.createDeal();
            return true
        }
    }

    // Irá realizar uma busca no ploomes para verificar se o perfil do usuário já existe;
    async validateContact(){
        try{
            const response = await apiPloomes.get(`/Contacts?$filter=Email+eq+'${this.email}'&$select=Id,Name,Email`, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': import.meta.env.VITE_TOKEN_PLOOMES
                }
            })

            const verifyValue = response.data.value
            if(verifyValue.length > 0){
                const results = response.data.value;
                return results[0].Id
            }

            return;
            
        }catch(error){
            if(error.response){
                console.error('Erro API: ', error.response.data)
            } else {
                console.error('Erro geral: ', error.message)
            }
        }
    }

    // Função responsável por realizar a criação do contato caso ele for inexistente na base dados no ploomes;
    async createContact(data){
        try {
            data = JSON.stringify(data);
            const contact = await apiPloomes.post('/Contacts', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': import.meta.env.VITE_TOKEN_PLOOMES
                }
            })
            
            var takeID = contact.data.value // Capturando os dados recém criados no ploomes.

            // Após realizar a criação do usuário ele irá devolver o ID do novo usuário criado.
            return takeID[0].Id
        }catch(error){
            if(error.response){
                console.error('Erro API: ', error.response.data)
            } else {
                console.error('Erro geral: ', error.message)
            }
        }

        return;
    }

    // Irá realizar a consulta na base de dados do ploomes para verificar se há algum contato criado dentro desse período;
    async validateDeal(){
        try{
            const response = await apiPloomes.get(`/Deals?$select=Id,Title,PipelineId,StageId,Amount,StatusId,StartDate&$filter=ContactId eq ${this.contactID}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': import.meta.env.VITE_TOKEN_PLOOMES
                }
            })

            const dados = response.data.value;

            const insideSevenDayExists = this.takeDate(dados);

            return insideSevenDayExists ? true : false;

        }catch(error){
            if(error.response){
                console.error('Erro API: ', error.response.data)
            } else {
                console.error('Erro geral: ', error.message)
            }
        }
    }

    // Irá criar um novo negócio atrelado ao Contato já existen/criado;
    async createDeal(){ 
        const teste = true;

        if(this.amortizacao == 'SAC'){
            this.amortizacao = 33896228
        }

        if(this.amortizacao == 'PRICE'){
            this.amortizacao = 33896233
        }

        try{
            const dados = {
                Title: this.Name, // Receber Front-end;
                ContactId: this.contactID, // Resolvido;
                Amount: parseFloat(formatadorInput.tratandoValoresInput(this.vlr_solicitado)), // Receber Front-end;
                StageId: 228324, // O funil usado;
                PipelineId: 49228,
                OtherProperties: [
                    {
                        FieldKey: import.meta.env.VITE_DEAL_ID_VALOR_IMOVEL,
                        DecimalValue: parseFloat(formatadorInput.tratandoValoresInput(this.vlr_imovel))
                    },
                    {
                        FieldKey: import.meta.env.VITE_DEAL_ID_PRIMEIRA_PARCELA,
                        DecimalValue: this.primeiraParcela
                    },
                    {
                        FieldKey: import.meta.env.VITE_DEAL_ID_VALOR_NMR_PARCELA,
                        IntegerValue: this.nmr_parcelas
                    },
                    {
                        FieldKey: import.meta.env.VITE_DEAL_ID_VALOR_SOLICITADO,
                        DecimalValue: parseFloat(formatadorInput.tratandoValoresInput(this.vlr_solicitado))
                    },
                    {
                        FieldKey: import.meta.env.VITE_DEAL_ID_CIDADE,
                        StringValue: this.cidadeSelect
                    },
                    {
                        FieldKey: import.meta.env.VITE_DEAL_ID_PROPRIETARIO,
                        IntegerValue: teste ? 17265988 : 17265988
                    },
                    {
                        FieldKey: import.meta.env.VITE_DEAL_ID_AMORTIZACAO,
                        IntegerValue: this.amortizacao
                    },
                ]
            }

            const response = await apiPloomes.post('/Deals', dados, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': import.meta.env.VITE_TOKEN_PLOOMES
                }
            })

            return response;

        }catch(error){
            if(error.response){
                console.error('Erro API: ', error.response.data)
            } else {
                console.error('Erro geral: ', error.message)
            }
        }
    }
    
    // Verificando se há uma diferença maior de 7 dias entre as data do último negócio criado deste contato.
    takeDate(deals){
        if(deals.length > 0){
            let lastIndice = deals.length - 1;
            const StartDate = new Date(deals[lastIndice].StartDate)
            const ActualDate = new Date();
            var diffInMs = ActualDate - StartDate;
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

            return diffInDays > import.meta.env.VITE_DEAL_TEMPO ? false : true;
        }
    }
}

export class callSimulation extends formatadorInput{
    constructor(vlr_imovel, vlr_solicitado, juros, nmr_parcelas, carencia, amortizacao){
        super();
        this.vlr_imovel = vlr_imovel;
        this.vlr_solicitado = vlr_solicitado;
        this.juros = juros;
        this.nmr_parcelas = nmr_parcelas;
        this.carencia = carencia;
        this.amortizacao = amortizacao;
        this.primeiraParcela = 0;
    }

    async getSimulationPrimeiraParcela(){
        try{
            let dados = {
                vlr_imovel : formatadorInput.tratandoValoresInput(this.vlr_imovel),
                valor_solicitado : formatadorInput.tratandoValoresInput(this.vlr_solicitado),
                juros : this.juros,
                numero_parcelas : this.nmr_parcelas,
                carencia: this.carencia,
                amortizacao: this.amortizacao
            }

            dados = this.toJson(dados);
            const result = await apiSimulation.post('/simulacao', dados, {
                headers: {'Content-Type': 'application/json'}
            })

            this.takeValue(result)

            return this.primeiraParcela
    
        }catch(e){
            alert('Erro na chamada da API da simulção', e)
        }
        
    }

    toJson(valor){
        return JSON.stringify(valor)
    }

    takeValue(response){
        const parcelas = response.data.parcelas

        if(this.carencia == 1){
            this.primeiraParcela = parcelas[1].parcela_final[0]
        }
        if(this.carencia == 2){
            this.primeiraParcela = parcelas[2].parcela_final[0]
        }
        if(this.carencia == 3){
            this.primeiraParcela = parcelas[3].parcela_final[0]
        }
       
    }
}


