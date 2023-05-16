export function footer(){
  let footer = document.createElement('footer');
  let div = document.createElement('div');

  let linkDiv = document.createElement('a'); 
  linkDiv.setAttribute('href', 'https://github.com/evelyn-gomez')

  let madeBy = document.createElement('div');
  madeBy.textContent = 'Made by';

  let heart = document.createElement('span'); 
  heart.setAttribute('class', 'heart'); 

  let name = document.createElement('div');
  name.textContent = 'Evelyn Gomez'; 

  let githubIcon = document.createElement('i'); 
  githubIcon.setAttribute('class', 'fa fa-github'); 
  githubIcon.setAttribute('aria-hidden', 'true'); 

  linkDiv.appendChild(name); 
  linkDiv.appendChild(githubIcon); 
  div.appendChild(madeBy)
  div.appendChild(heart); 
  footer.appendChild(div); 
  footer.appendChild(linkDiv);
  return footer; 
}
