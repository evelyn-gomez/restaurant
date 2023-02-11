export function header(){
  let header_div = document.createElement('div');
  let header = document.createElement('h1'); 

  header_div.textContent = 'header container';
  header.textContent = 'pizzeria taqueria'; 

  header_div.appendChild(header); 
  return header_div; 
}
 
