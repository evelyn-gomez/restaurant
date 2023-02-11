export function menu(){
  let content = document.createElement('div');
  let p = document.createElement('p');

  content.appendChild(p); 
  p.textContent = "Paragraph -- for menu content"; 
  return content; 
}