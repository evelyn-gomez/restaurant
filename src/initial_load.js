import {header} from "./header";
import { contact, contact_content as contactContent } from "./contact";
import { menu, menu_Content as menuContent } from "./menu";

/** @typedef {{ header: HTMLElement; content: HTMLElement }} Tab */

class Page {
  /** @type {HTMLElement} */
  contentDiv;
  /** @type {Tab} */
  currentTab;
  /** @type {HTMLElement} */
  currentBodyDiv;

  /** @type {Tab} */
  homeTab;
  /** @type {Tab} */
  menuTab;
  /** @type {Tab} */
  contactTab;

  constructor() {
    this.contentDiv = document.querySelector('#content');
    this.contentDiv.appendChild(header()); 
    this.contentDiv.appendChild(this.createNavBar()); 
    this.setCurrentTab(this.homeTab);
  }

  /**
   * @param {Tab} tabObject 
   */
  setCurrentTab(tabObject) {
    if(this.currentTab){
      this.currentTab.header.classList.remove('green');
    }
    this.currentTab = tabObject; 
    this.currentTab.header.setAttribute('class', 'green'); 
    this.replaceBodyContent(tabObject.content);
  }

  createTabHeader(tabName) {
    let tab = document.createElement('div');
    tab.textContent = tabName;
    return tab;
  }

  replaceBodyContent(bodyContent) {
    if (this.currentBodyDiv) {
      this.contentDiv.removeChild(this.currentBodyDiv);
    }
    this.currentBodyDiv = bodyContent;  
    this.contentDiv.appendChild(this.currentBodyDiv);
  }

  /**
   * @returns {Tab}
   */
  createContact() {
    let header = this.createTabHeader("CONTACT"); 
    header.setAttribute('id','contact-content-div'); 
    header.onclick = () => this.setCurrentTab(this.contactTab);
    let content = contactContent();
    return { header, content };
  }

  /**
   * @returns {Tab}
   */
  createMenuTab() {
    let header = this.createTabHeader("MENU");
    header.setAttribute('id', 'menu-content-div'); 
    header.onclick = () => this.setCurrentTab(this.menuTab);
    let content = menuContent();
    return { header, content };
  }

  /**
   * @returns {Tab}
   */
  createHomeTab() {
    let header = this.createTabHeader("HOME");
    header.setAttribute('id', 'home-content-div'); 
    header.onclick = () => this.setCurrentTab(this.homeTab);
    let content = this.homepageContent();
    return { header, content };
  }

  homepageContent() {
    let bodyDiv = document.createElement('div');
    for(let i = 0; i < 2; i++){
      let div = document.createElement('div'); 
      div.setAttribute('id', `${"num"+i}`);
      if (div.id == "num0") {
        let hero = document.createElement('div');
        let btnDiv = document.createElement('div');
        let button = document.createElement('button');
  
        div.append(hero, btnDiv); 
        btnDiv.append(button); 
  
        hero.setAttribute('id', 'hero'); 
        btnDiv.setAttribute('id', 'orderbtn-div'); 
  
        hero.textContent = "It's a pizza, it's a taco.... It's a pizza taco"; 
        button.textContent = "order here"; 
      
        button.addEventListener('click',()=>{
          this.setCurrentTab(this.menuTab);
          this.replaceBodyContent(menuContent()); 
        })
      } else {
        let contactInfoDiv = document.createElement('div'); 
        contactInfoDiv.setAttribute('class', 'address-info-div'); 
        contactInfoDiv.append(contactContent()); 
        div.appendChild(contactInfoDiv); 
      }
  
      bodyDiv.appendChild(div); 
      bodyDiv.setAttribute('id','home-body-content'); 
    }
    return bodyDiv;
  }

  createNavBar() {
    let tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-list');

    this.homeTab = this.createHomeTab();
    this.menuTab = this.createMenuTab();
    this.contactTab = this.createContact();
    
    tabContainer.appendChild(this.homeTab.header); 
    tabContainer.appendChild(this.menuTab.header);
    tabContainer.appendChild(this.contactTab.header);
    return tabContainer; 
  }
}

export function initialLoad() {
  new Page();
}
