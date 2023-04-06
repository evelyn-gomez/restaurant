export function menu(){
  let content = document.createElement('div');
  let p = document.createElement('p');

  content.appendChild(p); 
  p.textContent = "Paragraph -- for menu content"; 
  return content; 
}   

export function menuContent(){
  let main_div = document.createElement('div'); 
  main_div.setAttribute('id', 'menu-body');
  let menu_items = [];
  
  for (let i =0; i < 5; i++){
    let item = document.createElement('div'); 
    item.setAttribute('class', 'menu-item'); 
    item.setAttribute('id',`${i}`); 

    menu_items.push(item); 
  }

  return main_div;
}