import {  state  } from './state.js';
 
function hardSkills(data){
    
     data.skills.hardSkills.forEach(skills => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = `${skills.logo}`;
        img.alt = `${skills.name}`;
    
        state.skills.hardSkills.appendChild(li);
        li.appendChild(img)
        
    });

}

function softSkills(data){
    data.skills.softSkills.forEach(skills => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerHTML = `${skills}`       
    
        state.skills.softSkills.appendChild(li);
        li.appendChild(span)
        
    });

}

export {  hardSkills , softSkills } 