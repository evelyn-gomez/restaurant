let main_div = document.createElement('div');
let address_div = document.createElement('div'); 
let hours_div = document.createElement('div'); 
let call_div = document.createElement('div');

main_div.setAttribute('id','contact-body');


export function contact() {
  let div = document.createElement('div');
  return div; 

  //NOT USING 
}


export function contactContent(){
  address_div.textContent ='address';
  call_div.textContent= 'phone';
  hours_div.textContent = 'hours of op';
  main_div.append(address_div,call_div,hours_div);
  return main_div;
  // main_div.append(address_div, call_div, hours_div);  

}


