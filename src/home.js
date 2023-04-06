import { contactContent } from "./contact";
import {menuContent } from "./menu";
import newPage from "./initial_load";

export function importHomeContent(){
  let pdiv = document.createElement('div'); 
  for(let i = 0; i < 2; i++){
    let div = document.createElement('div'); 
    div.setAttribute('id', `${"num"+i}`);
    debugger
    if (div.id == "num0") {
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
        console.log(menuContent); 
        newPage.setCurrentTab(newPage.menuTab); 
        return;
      })
    } else{  
      console.log(div);
      let contactInfoDiv = document.createElement('div'); 
      contactInfoDiv.setAttribute('class', 'address-info-div'); 
      contactInfoDiv.append(contactContent()); 
      div.appendChild(contactInfoDiv); 
    }
    return div; 
  }
} 
