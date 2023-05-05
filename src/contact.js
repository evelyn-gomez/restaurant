const address = '1234 anywhere st., City,State 12345';  
const hoursofoperation = Object.freeze([['Monday', '4PM - 10PM'], 
  ['Tuesday', '4PM - 10PM'], 
  ['Wednesday', '3:30PM - 10PM'], 
  ['Thursday', '2PM - 10PM'], 
  ['Friday', '2PM - 11PM'], 
  ['Saturday', '2PM - 12AM'], 
  ['Sunday', 'Closed'],
]); 
const phone = '123-456-7890';

export function contactContent(){
  let div = contactInfo()
  return div;
};

export function contactInfo(){
  let mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'contactbody'); 
  
  let addressDiv = document.createElement('div');
  addressDiv.setAttribute('id', 'address'); 
  addressDiv.textContent = address;

  let phoneDiv = document.createElement('div');
  phoneDiv.setAttribute('id', 'phone');
  phoneDiv.textContent = phone;
  
  let hoursDiv = document.createElement('div'); 
  hoursDiv.setAttribute('id', 'hours');
  let tableOfHours = document.createElement('table');
  for (let day of hoursofoperation){
    let row = document.createElement('tr'); 
    for(let content of day){
      let cell = document.createElement('td'); 
      cell.textContent = content;
      row.appendChild(cell);
    }
    tableOfHours.appendChild(row);
  }
  hoursDiv.append(tableOfHours); 
  mainDiv.append(addressDiv,hoursDiv, phoneDiv); 
  return mainDiv; 
}



