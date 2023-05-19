import { createHoursofOperation } from "./contact";
import newPage from "./initial_load";

export function homepageContent(){
  let bodyDiv = document.createElement('div');
  importHomeContent(bodyDiv); 
  bodyDiv.setAttribute('id','home-content'); 
  return bodyDiv;
}

function importHomeContent(mainDiv){

for(let i = 0; i < 2; i++){
  let div = document.createElement('div'); 
  div.setAttribute('id', `${"num"+i}`);
  if(div.id == "num0") {
    let hero = document.createElement('div'); 
    let btnDiv = document.createElement('div');
    let button = document.createElement('button');

    btnDiv.setAttribute('id', 'orderbtn-div'); 
    hero.setAttribute('id', 'hero'); 

    hero.textContent = "It's a pizza, it's a taco.... It's a pizza taco!"; 
    button.textContent = "order here"; 

    btnDiv.append(button); 
    div.append(hero,btnDiv);
  
    button.addEventListener('click',()=>{
      newPage.setCurrentTab(newPage.menuTab); 
      return;
    })
  }else{ 
    div.append(createHoursofOperation());
  }
  mainDiv.appendChild(div); 
}
return; 
} 
