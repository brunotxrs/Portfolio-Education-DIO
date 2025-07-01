import {  state  } from './state.js';
import {  button  } from './buttons.js'
 
export function hardSkills(data){
    
     data.skills.hardSkills.forEach(skills => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = `${skills.logo}`;
        img.alt = `${skills.name}`;
    
        state.skills.hardSkills.appendChild(li);
        li.appendChild(img)
        
    });


    button()

}