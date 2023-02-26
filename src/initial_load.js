import {header} from "./header";
import { contact, contact_content } from "./contact";
import { menu, menu_Content } from "./menu";

let content_div = document.querySelector('#content');
let currentBodyDiv = homepage_content(); 
let currentTab = undefined;
let menu_tab; 

function setCurrentTab(tab){
  if (currentTab == undefined){
    currentTab = tab; 
    currentTab.setAttribute('class', 'green'); 
    return; 
  }
  currentTab.classList.remove('green'); 
  currentTab = tab; 
  currentTab.setAttribute('class', 'green'); 
}

function createTabHeader(tab_name){
  let tab = document.createElement('div');
  // let content = content_info; 
  // tab.appendChild(content); 
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
  let tab = createTabHeader("CONTACT"); 
  tab.setAttribute('id','contact-content-div'); 
  tab.addEventListener('click', ()=>{
    setCurrentTab(tab); 
    if(currentBodyDiv.id == 'contact-body'){
      return;
    }
    globalEListener(contact_content())
  });
  return tab; 
}

function createMenu(){
  menu_tab = createTabHeader("MENU");
  menu_tab.setAttribute('id', 'menu-content-div'); 
  menu_tab.addEventListener('click', ()=>{
    setCurrentTab(menu_tab); 
    if(currentBodyDiv.id == 'menu-body'){
      return; 
    }
    globalEListener(menu_Content());
  }) 
  return menu_tab;
}

export function createHome(){
  let home_tab = document.createElement('div');
  home_tab.textContent = "HOME";
  setCurrentTab(home_tab); 
  home_tab.addEventListener('click', ()=>{
    setCurrentTab(home_tab);  
    globalEListener(homepage_content());
  })
  return home_tab; 
}




export function homepage_content(){
  let body_div = document.createElement('div');
  for(let i = 0; i < 2; i++){
    let div = document.createElement('div'); 
    div.setAttribute('id', `${"num"+i}`);
    if(div.id == "num0"){
      let hero = document.createElement('div');
      let btnDiv = document.createElement('div');
      let button = document.createElement('button');

      div.append(hero, btnDiv); 
      btnDiv.append(button); 

      hero.setAttribute('id', 'hero'); 
      btnDiv.setAttribute('id', 'orderbtn-div'); 

      hero.textContent = "It's a pizza, it's a taco.... It's a pizza taco"; 
      button.textContent = "order here"; 
    
      button.addEventListener('click',()=>{
        setCurrentTab(menu_tab);
        globalEListener(menu_Content()); 
      })

    } else{
      let address_div = document.createElement('div'); 
      address_div.setAttribute('class', 'address-info-div'); 
      address_div.textContent = 'Contact US';
      div.appendChild(address_div); 
    }
    body_div.appendChild(div); 
    body_div.setAttribute('id','home-body-content'); 
  }
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

