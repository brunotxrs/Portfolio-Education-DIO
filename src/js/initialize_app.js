import { userProfilePromise } from './profile_class.js';
import {  descriptionDetails  } from './description_details.js';
import {  hardSkills, softSkills  } from './skills.js';
import {  msgLoadDetails  } from './msg_load_details.js';
import {  languages  } from './languages.js';
import { contentToggle } from './content_toggle.js';
import { portfolio } from './portfolio.js';

//função assíncrona para usar o userProfilePromise
export async function initializeApp() {
    try {
        const userProfile = await userProfilePromise; // <--  INSTÂNCIA REAL

        if (userProfile) { // Verifica se a Promise foi resolvida com sucesso

            document.querySelector(".spinner").classList.toggle("spinner-loading");

            setTimeout(function() {
                document.querySelector(".spinner").classList.toggle("spinner-loading");
                // chamada das funções que estrutura os dados da api ao HTML
                descriptionDetails(userProfile);
                hardSkills(userProfile);
                softSkills(userProfile);
                languages(userProfile);
                portfolio(userProfile);
                
                contentToggle()
                
            }, 3000)

            
        } else {
            // chamada da função da estrutura HTML ainda nao carregado com dados da API
            msgLoadDetails()
        }
    } catch (error) {
        console.error("Erro na inicialização da aplicação:", error);
    }
}