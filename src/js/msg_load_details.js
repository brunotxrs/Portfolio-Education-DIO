import {  state  } from './state.js';
export function msgLoadDetails(){
    state.photo.innerHTML = ("Loading Photo...").toLocaleUpperCase();
    state.name.innerHTML = ("Loading Name...").toLocaleUpperCase();
    state.occupation.innerHTML = ("Loading Occupation..").toLocaleUpperCase();
    state.location.innerHTML = ("Loading location...").toLocaleUpperCase();
    state.contact.innerHTML = ("Loading contact...").toLocaleUpperCase();
    state.email.innerHTML = ("Loading E-mail...").toLocaleUpperCase();
    
}