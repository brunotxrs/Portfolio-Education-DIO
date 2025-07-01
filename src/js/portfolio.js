import {  state  } from './state.js';

export function portfolio(data){
    
    data.portfolio.forEach(projects => {
        const icoGitHub = 'https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff';
        const li = document.createElement('li');
        const span1 = document.createElement('span');
        const img = document.createElement('img');
        const span2 = document.createElement('span');
        const a = document.createElement('a')
    
        img.src = icoGitHub;
        span2.textContent = `${projects.name}`;
        a.href = `${projects.url}`;
        a.textContent = `${projects.url}`;

        a.target = "_blank";
        a.rel = "noopener noreferrer";
        span1.appendChild(img);
        span1.appendChild(span2)
        li.appendChild(span1);
        li.appendChild(a)
        state.portfolio.appendChild(li);

    })


}