
export function contactContent(){
  let mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'contactbody'); 

  let addressDiv = document.createElement('div');
  let hoursDiv = document.createElement('div'); 
  let phoneDiv = document.createElement('div');

  addressDiv.setAttribute('id', 'address'); 
  phoneDiv.setAttribute('id', 'phone');
  hoursDiv.setAttribute('id', 'hours');

  let address = '1234 anywhere st., City,State 12345';  
  let hoursofoperation = [['Monday', '4PM - 10PM'], 
    ['Tuesday', '4PM - 10PM'], 
    ['Wednesday', '3:30PM - 10PM'], 
    ['Thursday', '2PM - 10PM'], 
    ['Friday', '2PM - 11PM'], 
    ['Saturday', '2PM - 12AM'], 
    ['Sunday', 'Closed'],
  ]; 
  let phone = '123-456-7890';

  let mainDivElement = [addressDiv, hoursDiv, phoneDiv]; 
  let elemContent = [address, hoursofoperation, phone];

  let i=0; 
  mainDivElement.forEach(element => {
    console.log(elemContent[i])
    if(element.id == hoursDiv.id){
      let tableOfHours = document.createElement('table');
      for(let j =0; j < hoursofoperation.length; j ++){
        let row = document.createElement('tr'); 
        for(let k =0; k < 2; k++){
          let cell = document.createElement('td'); 
          let cellText = document.createTextNode(`${hoursofoperation[j][k]}`)
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        tableOfHours.appendChild(row);
      }
      hoursDiv.append(tableOfHours); 
    } else{
      element.textContent = elemContent[i];
    }
    i++;
  });
  mainDiv.append(addressDiv,hoursDiv,phoneDiv);
  return mainDiv;
}


