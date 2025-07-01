import { userProfilePromise } from './profile_class.js';
import {  descriptionDetails  } from './description_details.js';
import {  hardSkills  } from './skills.js'
import {  msgLoadDetails  } from './msg_load_details.js';


//função assíncrona para usar o userProfilePromise
export async function initializeApp() {
    try {
        const userProfile = await userProfilePromise; // <--  INSTÂNCIA REAL

        if (userProfile) { // Verifica se a Promise foi resolvida com sucesso
            // chamada da função que estrutura os dados da api ao HTML
            descriptionDetails(userProfile)
            
            hardSkills(userProfile)
            
            
        } else {
            // chamada da função da estrutura HTML ainda nao carregado com dados da API
            msgLoadDetails()
        }
    } catch (error) {
        console.error("Erro na inicialização da aplicação:", error);
    }
}