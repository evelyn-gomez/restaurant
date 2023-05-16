const address = '1234 anywhere st., City,State 12345';  
const addressHeader = 'Address:'; 

const hoursofoperation = Object.freeze([['Monday', '4PM - 10PM'], 
  ['Tuesday', '4PM - 10PM'], 
  ['Wednesday', '3:30PM - 10PM'], 
  ['Thursday', '2PM - 10PM'], 
  ['Friday', '2PM - 11PM'], 
  ['Saturday', '2PM - 12AM'], 
  ['Sunday', 'Closed'],
]); 
const hoursHeader = 'Hours:'; 

const phone = '123-456-7890';
const phoneHeader = 'Phone:'

export function contactContent(){
  let div = contactInfo();
  div.setAttribute('id', 'contact-content')
  return div;
};

export function contactInfo(){
  let mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'contact-info'); 

  let addressDiv = createContactUnit(address, addressHeader); 
  addressDiv.setAttribute('id', 'address'); 

  let phoneDiv = createContactUnit(phone, phoneHeader);
  phoneDiv.setAttribute('id', 'phone'); 

  let hoursDiv = createContactUnit('hours', hoursHeader); 
  hoursDiv.setAttribute('id', 'hours'); 

  mainDiv.append(addressDiv,hoursDiv, phoneDiv); 
  return mainDiv; 
}


function createHoursTable(){
  let table = document.createElement('table')
  for (let day of hoursofoperation){
    let row = document.createElement('tr'); 
    for(let content of day){
      let cell = document.createElement('td'); 
      cell.textContent = content;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table; 
}; 


function createContactUnit(content, header){
let contentDiv = document.createElement('div'); 
let head = document.createElement('div');
head.textContent = header; 
let cont = document.createElement('div')
if(header == 'Hours:'){
  let div = createHoursTable(); 
  cont.appendChild(div); 
}else{
  cont.textContent = content;
}

contentDiv.appendChild(head);
contentDiv.appendChild(cont); 
return contentDiv; 
}


