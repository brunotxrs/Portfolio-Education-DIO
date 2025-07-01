import {  state  } from './state.js';

export function languages(data){

    data.languages.forEach(item => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerHTML = `${item}`       

        state.languages.appendChild(li);
        li.appendChild(span)
        
    });
    
}