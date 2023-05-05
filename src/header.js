export function header(){
  let header_div = document.createElement('div');
  let header = document.createElement('h1'); 
  header_div.setAttribute('id', 'header-container'); 

  header.textContent = 'Pizzeria Taqueria'; 

  header_div.appendChild(header); 
  return header_div; 
}

export function footer(){
  let footer = document.createElement('footer');
  let div = document.createElement('div'); 

  div.textContent = 'add here github info'; 
  footer.append(div)
  return footer; 
}
 
