import {header} from "./header";
import { contact } from "./contact";
import { menu } from "./menu";

function createTabHeader(tab_name, content_info){
  let tab = document.createElement('div');
  let content = content_info; 
  tab.appendChild(content); 
  tab.textContent = tab_name;
  return tab; 
}

function createContact(){
  let tab = createTabHeader("contact", contact()); 
  tab.addEventListener('click', (e)=>{
    console.log(e);
    console.log('contact event'); 
  })
  return tab; 
}

function createMenu(){
  let tab = createTabHeader("menu", menu());
  tab.addEventListener('click', (e)=>{
    console.log(e);
    console.log('menu event');
  });
  return tab;
}

function createHome(){
  let home_tab = document.createElement('div');
  let content = document.createElement('p');
  home_tab.textContent = "home tab"
  content.textContent = "content of Home page which should be home"; 
  // home_tab.appendChild(content); 

  home_tab.addEventListener('click', (e)=>{
    console.log(e);
    console.log('home event'); 
  })
  
  return home_tab; 
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
  let content_div = document.querySelector('#content');
  let body_div = document.createElement('div'); 

  content_div.appendChild(header()); 
  content_div.appendChild(createNavBar()); 
  content_div.append(body_div); 
  body_div.textContent = "some paragraph here ";
}

