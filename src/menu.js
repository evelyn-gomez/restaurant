export function menuContent(){
  let content = document.createElement('div');
  content.setAttribute('id', 'menu-content')

  let menu = document.createElement('div'); 
  menu.setAttribute('id', 'inner-menu'); 
  // let p = document.createElement('p');
  // p.textContent = "Paragraph -- for menu content"; 

  let itemInfo = ['Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ultricies lectus et ornare. Quisque consectetur neque diam, a lacinia dolor commodo sed. Donec sodales sodales tellus quis sodales. Etiam.', '$2.50']

  function createItemPic(){
    let div = document.createElement('div');
    let pic = document.createElement('img'); 
    pic.src = '../images/pizza-gfd7a56836_640.jpg'; 
    div.appendChild(pic); 
    return div; 
  }

  function createItem(n, desc, p){
    let container = document.createElement('div');
    container.setAttribute('id', `item-${n.replaceAll(' ','')}`); 

    let itemInfo = document.createElement('div'); 
    itemInfo.setAttribute('id', 'item-div');

    let image = createItemPic();
    image.setAttribute('id', 'item-image-div');
    
    let name = document.createElement('div');
    name.textContent = n; 
  
    let description = document.createElement('div'); 
    description.textContent = desc; 
    
    let price = document.createElement('div');
    price.textContent = p; 
  
    let order = document.createElement('div');
    order.setAttribute('id', 
    'menu-order-div');
    let orderBtn = document.createElement('button');
    orderBtn.setAttribute('id','menu-order-btn');  
    orderBtn.textContent = 'order'; 
  
    order.appendChild(price);
    order.appendChild(orderBtn); 
 
    itemInfo.appendChild(name);
    itemInfo.appendChild(description);
    itemInfo.appendChild(order);

    container.appendChild(image); 
    container.appendChild(itemInfo); 
    return container; 
  }
  
  function makeItems(numOfItems){
    let itemArray = []; 
    for(let i=0; i < numOfItems; i++){
       itemArray.push(createItem(itemInfo[0],itemInfo[1], itemInfo[2]));
       menu.appendChild(itemArray[i]); 
    };
    return itemArray; 
  }
  makeItems(7);
  
  // menu.appendChild(chickenItem); 
  // content.appendChild(p); 
  content.appendChild(menu); 
  return content; 
}   
