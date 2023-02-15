export function contact() {
  let div = document.createElement('div');
  //if contact is clicked remove whatever content is in main home page append this content 
  div.textContent = 'here is the contact info container'; 
  return div; 
}
export function contact_content(){
  let main_div = document.createElement('div');
  let sub_div = document.createElement('div'); 
  let other_div = document.createElement('div'); 
  let getInTouchForm = document.createElement('div');
  let findUsMap = document.createElement('div');
  let header = document.createElement('h3');
  main_div.setAttribute('id','contact-body');

  let div_array = [];
  let div_id = ['contact_h1', 'contact_form', 'contact_info', 'contact_socials'];   
 
  for(let i=0; i < 4; i++){
    let div = document.createElement('div');
    // if() 
    div.setAttribute('id', `${div_id[i]}`); 
    div_array.push(div)
  }

  main_div.appendChild(header); 
  main_div.appendChild(sub_div);
  sub_div.append(div_array[0], div_array[1],div_array[2],div_array[3]);
  main_div.appendChild(other_div); 
  other_div.append(getInTouchForm,findUsMap); 
  return main_div; 
}
