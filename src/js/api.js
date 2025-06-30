const url = "https://raw.githubusercontent.com/brunotxrs/Portfolio-Education-DIO/refs/heads/main/src/json/profile.json";


export async function fetchProfileData() {
    try {
        const response = await fetch(url)
        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
        throw error;
    }
    
}

