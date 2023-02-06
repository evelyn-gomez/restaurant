import {header_div,header } from "./header";
import { homepage } from "./homepage";
export function initialLoad(){
  let content_div = document.querySelector('#content');
  header_div.textContent = 'Header container'; 
  content_div.appendChild(homepage()); 
  homepage().appendChild(header_div); 
  header_div.appendChild(header); 
  header.textContent = 'header';
  
  return;
}
