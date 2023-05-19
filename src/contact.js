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
  let div = document.createElement('div');
  div.setAttribute('id', 'contact-content');

  let formContainer = document.createElement('div'); 
  formContainer.setAttribute('id', 'form-container');
  const form = createContactUsForm()
  formContainer.appendChild(form);

  form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    alert('Hi, Thanks for checking out my project!');
  })
  
  const contactAndMap = document.createElement('div'); 
  contactAndMap.id = 'contact-and-map-div'; 

  contactAndMap.appendChild(addGoogleMap());
  contactAndMap.appendChild(contactInfo());
  
  div.appendChild(formContainer); 
  div.appendChild(contactAndMap); 
  return div;
};

export function contactInfo(){
  let mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'contact-info'); 
  
  let addressDiv = createContactUnit(address, addressHeader); 
  addressDiv.setAttribute('id', 'address'); 

  let phoneDiv = createContactUnit(phone, phoneHeader);
  phoneDiv.setAttribute('id', 'phone'); 

  mainDiv.append(addressDiv, phoneDiv); 
  return mainDiv; 
}

export function createHoursofOperation(){
  let hoursDiv = createContactUnit('hours', hoursHeader); 
  hoursDiv.setAttribute('id', 'hours'); 
  return hoursDiv; 
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

function addGoogleMap(){
  let div = document.createElement('div'); 
  div.setAttribute('id', 'maps-div')
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24740.719346221595!2d-95.45897666461521!3d29.768871456535464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1234%20anywhere%20st.%2C%20City%2CState%2012345!5e0!3m2!1sen!2sus!4v1684434215763!5m2!1sen!2sus";
  iframe.allowfullscreen = true;
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";

  div.appendChild(iframe); 
  return div;
}

function createContactUnit(content, header){
let contentDiv = document.createElement('div'); 
let head = document.createElement('div');
head.textContent = header; 
let cont = document.createElement('div')
if(header == 'Hours:'){
  head.textContent = 'Hours of Operation'
  let div = createHoursTable(); 
  cont.appendChild(div); 
}else{
  cont.textContent = content;
}

contentDiv.appendChild(head);
contentDiv.appendChild(cont); 
return contentDiv; 
}

function createContactUsForm(){
  const form = document.createElement('form'); 
  const h2 = document.createElement('h2'); 
  form.appendChild(h2);
  h2.textContent = 'Get in Touch'; 

  const formDivsArrayNames = ['Full Name', 'Email', 'Message']; 
  const formPlaceHolderTxt = ['Jane Doe', 'example@email.com']; 

  for(let item in formDivsArrayNames){
    let div = document.createElement('div');
    div.setAttribute('class', 'field'); 

    let label = document.createElement('label');
    label.setAttribute('for', 'name');
    label.textContent = `${formDivsArrayNames[item]}`; 
    if(formDivsArrayNames[item] == 'Message'){
      label.id = 'Your-Message'; 
      let textArea = document.createElement('textarea'); 
      textArea.rows="5"; 
      textArea.name="message"; 
      textArea.id="message";
      textArea.placeholder="Your Message";
      div.appendChild(label); 
      div.appendChild(textArea); 
    }else{
      let input = document.createElement("input");
      input.type = "text";
      input.id = "name";
      input.name = "name";
      input.placeholder = `${formPlaceHolderTxt[item]}`; 
      div.appendChild(label);
      div.appendChild(input);
    } 
    form.appendChild(div); 
  }
  const button = document.createElement('button'); 
  button.type = 'submit'; 
  button.textContent = 'Send Message'; 
  form.appendChild(button); 
  return form; 
}


