import {  state  } from './state.js';

export function descriptionDetails(data){
    // create tag img for image add image
    const newImg = document.createElement('img');
    state.photo.innerHTML = ''
    newImg.src = `${data.photo}`;
    newImg.alt = `${data.name}`;
    state.photo.appendChild(newImg);
    // add name
    state.name.innerHTML = `${data.name}`;
    // add occupation
    state.occupation.innerHTML = `${data.occupation}`;
    // add location
    state.location.innerHTML = `${data.location}`;
    // create tag a for link contact add contact
    const phoneLink = document.createElement('a');
    phoneLink.textContent = `${data.contact.phone_display}`;
    phoneLink.href = `${data.contact.whatsapp_url}`;
    phoneLink.target = "_target";
    state.contact.appendChild(phoneLink);
    // create tag a for link e-mail add e-mail
    const emailLink = document.createElement('a');
    emailLink.textContent = `${data.email}`;
    emailLink.href = `mailto:${data.email}`;
    emailLink.target = "_target";
    state.email.appendChild(emailLink);
}
