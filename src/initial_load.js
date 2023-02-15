import {header} from "./header";
import { contact, contact_content } from "./contact";
import { menu, menu_Content } from "./menu";

let content_div = document.querySelector('#content');
let currentBodyDiv = homepage_content();  

function createTabHeader(tab_name, content_info){
  let tab = document.createElement('div');
  let content = content_info; 
  tab.appendChild(content); 
  tab.textContent = tab_name;
  return tab; 
}

function globalEListener(body_content){
  content_div.removeChild(currentBodyDiv);
  currentBodyDiv = body_content;  
  content_div.appendChild(currentBodyDiv);
  return 
}

function createContact(){
  let tab = createTabHeader("contact", contact()); 
  tab.setAttribute('id','contact-content-div'); 
  tab.addEventListener('click', ()=>{
    globalEListener(contact_content())
  });
  return tab; 
}

function createMenu(){
  let tab = createTabHeader("menu", menu());
  tab.addEventListener('click', ()=>{
    globalEListener(menu_Content());
  }) 
  return tab;
}

export function createHome(){
  let home_tab = document.createElement('div');
  home_tab.textContent = "home tab"
  home_tab.addEventListener('click', ()=>{
   globalEListener(homepage_content());
  })
  return home_tab; 
}

export function homepage_content(){
  let body_div = document.createElement('div'); 
  body_div.setAttribute('id','home-body-content'); 
  body_div.textContent = "some paragraph here ";
  console.log('this is body div');
  console.log(body_div.className);
  return body_div;
}

function createNavBar(){
  let tab_container = document.createElement('div');
  tab_container.classList.add('tab-list');
  tab_container.appendChild(createHome()); 
  tab_container.appendChild(createMenu());
  tab_container.appendChild(createContact());
  return tab_container; 
}

export function initialLoad(){
  content_div.appendChild(header()); 
  content_div.appendChild(createNavBar()); 
  content_div.append(currentBodyDiv); 
}

