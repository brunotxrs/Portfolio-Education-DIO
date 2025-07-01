export const state = {
    name: document.getElementById("name"),
    occupation: document.getElementById("occupation"),
    photo: document.getElementById("image-profile"),
    location: document.getElementById("location"),
    contact: document.getElementById("phone"),
    email: document.getElementById("email"),
    skills: {
        hardSkills: document.getElementById("hardSkills"), 
        softSkills: document.getElementById("softSkills"),    
    },
    languages: document.getElementById("languages"),
    portfolio: document.getElementById("portfolio"),
    buttons: {
        btnDown: document.querySelectorAll('[id^="arrow-down-"]'),
        btnUp:  document.querySelectorAll('[id^="arrow-up-"]'),
    },
    classSelect: document.querySelectorAll(".select"),
    box: document.querySelectorAll(".box"),
}