import {contactContent } from "./contact";
import newPage from "./initial_load";

export function importHomeContent(){
  let exportedhomepagediv = document.createElement('div');
  exportedhomepagediv.setAttribute('id', 'exportedhomepagediv'); 
  for(let i = 0; i < 2; i++){
    let div = document.createElement('div'); 
    div.setAttribute('id', `${"num"+i}`);
    if(div.id == "num0") {
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
        newPage.setCurrentTab(newPage.menuTab); 
        return;
      })
    } else{ 
      div.append(contactContent());
    }
    exportedhomepagediv.appendChild(div); 
  }
  return exportedhomepagediv; 
} 
