import {  state  } from './state.js';

export function contentToggle(){
    const buttonsDown = state.buttons.btnDown;
    const buttonsUp = state.buttons.btnUp;

    for (let i = 0; i < buttonsDown.length; i++) {
        const buttonId = `arrow-down-${i}`;
        const btnDown = document.getElementById(buttonId);

        btnDown.addEventListener("click", () => {
            btnDown.classList.toggle("hidden");
            buttonsUp[i].classList.toggle("hidden");
            state.box[i].classList.toggle('hidden');
            state.classSelect[i].style.outlineStyle = 'none';
            state.classSelect[i].classList.toggle("bg-hover");
            state.box[i].classList.toggle("bg-hover");
        })
    }

    for (let i = 0; i < buttonsUp.length; i++) {
        const buttonId = `arrow-up-${i}`;
        const btnUp = document.getElementById(buttonId);

        btnUp.addEventListener("click", () => {
            btnUp.classList.toggle("hidden");
            buttonsDown[i].classList.toggle("hidden");
            state.box[i].classList.toggle('hidden');
            state.box[i].classList.toggle("bg-hover");
            state.classSelect[i].style.outlineStyle = '';
            state.classSelect[i].classList.toggle("bg-hover");
        })
    }

}
