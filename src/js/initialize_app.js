import { userProfilePromise } from './profile_class.js';
import {  state  } from './state.js'

//função assíncrona para usar o userProfilePromise
export async function initializeApp() {
    try {
        const userProfile = await userProfilePromise; // <--  INSTÂNCIA REAL

        if (userProfile) { // Verifica se a Promise foi resolvida com sucesso
            state.photo.innerHTML = ''
            const newImg = document.createElement('img');
            newImg.src = `${userProfile.photo}`;
            newImg.alt = `${userProfile.name}`;
            state.photo.appendChild(newImg);

            state.name.innerHTML = `${userProfile.name}`;
            state.occupation.innerHTML = `${userProfile.occupation}`;
            state.location.innerHTML = `${userProfile.location}`;


            console.log("Instância do Perfil Criada e Pronta:", userProfile);
            console.log("Habilidades:", userProfile.skills.hardSkills);
            
        } else {
            state.photo.innerHTML = ''
            state.photo.innerHTML = ("Loading Photo...").toLocaleUpperCase();
            state.name.innerHTML = ("Loading Name...").toLocaleUpperCase();
            state.occupation.innerHTML = ("Loading Occupation..").toLocaleUpperCase();
            state.location.innerHTML = ("Loading location...").toLocaleUpperCase();
            console.log("Não foi possível carregar o perfil.").toLocaleUpperCase();
        }
    } catch (error) {
        console.error("Erro na inicialização da aplicação:", error);
    }
}