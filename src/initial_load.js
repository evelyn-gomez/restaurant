import {header} from "./header";
import { contactContent } from "./contact";
import { menuContent} from "./menu";
import { importHomeContent } from "./home";

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

  /**@return {HTMLElement} */
  homepageContent() {
    let bodyDiv = document.createElement('div');
    bodyDiv.appendChild(importHomeContent()); 
    bodyDiv.setAttribute('id','home-body-content'); 
    return bodyDiv;
  }
/**
 * @returns {HTMLElement}
 *  */
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

  // listeners(){
    
  // }
}

let newPage = new Page(); 
export function initialLoad() {
  newPage; 
}

export default newPage; 






