import {  state  } from './state.js';

export function button(){
    state.buttons.btnDown.addEventListener('click', () => {
        state.boxSkills.classList.toggle('hidden');
        state.buttons.btnDown.classList.toggle('hidden');
        state.buttons.btnUp.classList.toggle('hidden');
        document.getElementById("select-skills").style.outlineStyle = 'none';
        state.containerSkill.forEach((item) => {
            item.classList.toggle("bg-hover")
        })
    })


    state.buttons.btnUp.addEventListener('click', () => {
        state.boxSkills.classList.toggle('hidden');
        state.buttons.btnDown.classList.toggle('hidden');
        state.buttons.btnUp.classList.toggle('hidden');
        document.getElementById("select-skills").style.outlineStyle = '';
        state.containerSkill.forEach((item) => {
            item.classList.toggle("bg-hover")
        })
    })
    
}
