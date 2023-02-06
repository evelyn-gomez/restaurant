import { menu } from "./menu";
import { contact } from "./contact";

export function homepage(){
  let body_div = document.createElement('div'); 
  body_div.textContent = 'body';

  body_div.appendChild(menu());
  body_div.appendChild(contact());  
  return body_div; 
}