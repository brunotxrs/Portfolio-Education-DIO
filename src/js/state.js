export const state = {
    name: document.getElementById("name"),
    occupation: document.getElementById("occupation"),
    photo: document.getElementById("image-profile"),
    location: document.getElementById("location"),
    contact: document.getElementById("phone"),
    email: document.getElementById("email"),
    skills: {
        hardSkills: document.getElementById("hardSkills"),     
    },
    languages:"",
    portfolio:"",
    buttons: {
        btnDown: document.getElementById("arrow-down"),
        btnUp: document.getElementById("arrow-up"),
    },
    containerSkill: document.querySelectorAll(".selection"),
    boxSkills: document.getElementById("box-skills"),
}