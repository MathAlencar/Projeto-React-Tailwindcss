
import apiPloomes from "../services/axiosPloomes";
import apiIBGE from '../services/axiosCidades';

// o que falta?
/*
- Instalar o loadash para verificar as chaves json;
- Colocar tanto o token, como o dia de espera em variáveis de ambiente;
*/

export class createdContactCardAPI{
    constructor(email, Name, PhoneNumber){
        this.email = email,
        this.Name = Name,
        this.PhoneNumber = PhoneNumber
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
                    'User-Key': '661569F0F2BFBD31E9AC2AEE5B55C79F245AA394FAB35193A17D32654241CC4298F80D88A4C7C711FC1F2C7DCD6FBE147CB178B54213CB44E85895DAEC17BA18'
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
                    'User-Key': '661569F0F2BFBD31E9AC2AEE5B55C79F245AA394FAB35193A17D32654241CC4298F80D88A4C7C711FC1F2C7DCD6FBE147CB178B54213CB44E85895DAEC17BA18'
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
                    'User-Key': '661569F0F2BFBD31E9AC2AEE5B55C79F245AA394FAB35193A17D32654241CC4298F80D88A4C7C711FC1F2C7DCD6FBE147CB178B54213CB44E85895DAEC17BA18'
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
        try{
            const dados = {
                Title: "Negócio gerado via API", // Receber Front-end;
                ContactId: this.contactID, // Resolvido;
                Amount: 5000, // Receber Front-end;
                StageId: 1, // O funil usado;
                PipelineId: 1 //
            }

            const response = await apiPloomes.post('/Deals', dados, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Key': '661569F0F2BFBD31E9AC2AEE5B55C79F245AA394FAB35193A17D32654241CC4298F80D88A4C7C711FC1F2C7DCD6FBE147CB178B54213CB44E85895DAEC17BA18'
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

            return diffInDays > 7.0 ? false : true;
        }
    }
}

export class SearchCityAPI{
    constructor() {}

    async searchCity(){
        const result = await apiIBGE.get('/municipios')
        return result;
    }
}


