import {  fetchProfileData  } from './api.js';


class Profile {
    name;
    photo;

    occupation;
    location;
    phone;
    email;
    skills;
    languages;
    portfolio;

    constructor(data){
        if (!data || typeof data !== 'object') {
            throw new Error("Dados inválidos fornecidos ao construtor de Profile.");
        }
        this.name = data.name;
        this.photo = data.photo;

        this.occupation = data.occupation;
        this.location = data.location;
        this.phone = data.phone;
        this.email = data.email;
        this.skills = data.skills; //objeto de habilidades
        this.languages = data.languages; //array de linguagens
        this.portfolio = data.portfolio; //array de portfólio
    }
}

export const userProfilePromise = (async () => {
    try {
        const profileJsonData = await fetchProfileData(); 
        return new Profile(profileJsonData); 
    } catch (error) {
        console.error("Erro ao criar a instância userProfile:", error);
        return null;
    }
})();