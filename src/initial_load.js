import {header} from "./header";
import {footer} from "./footer";
import { contactContent, contactInfo } from "./contact";
import { menuContent} from "./menu";
import { homepageContent } from "./home";

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
  /** @type {HTMLElement} */
  navBar;
  /** @type {HTMLElement} */
  footer;

  constructor() {
    this.contentDiv = document.querySelector('#content');
    this.contentDiv.appendChild(header()); 
    this.navBar = this.createNavBar();
    this.contentDiv.appendChild(this.navBar); 
    this.setCurrentTab(this.homeTab); 
    this.footer = footer();
    this.contentDiv.appendChild(this.footer); 
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
    this.navBar.after(this.currentBodyDiv);
  }

  /**
   * @returns {Tab}
   */
  createContactTab() {
    let header = this.createTabHeader("CONTACT"); 
    header.setAttribute('id','contact-header'); 
    header.onclick = () => this.setCurrentTab(this.contactTab);
    let content = contactInfo();
    return { header, content };
  }

  /**
   * @returns {Tab}
   */
  createMenuTab() {
    let header = this.createTabHeader("MENU");
    header.setAttribute('id', 'menu-header'); 
    header.onclick = () => this.setCurrentTab(this.menuTab);
    let content = menuContent();
    return { header, content };
  }

  /**
   * @returns {Tab}
   */
  createHomeTab() {
    let header = this.createTabHeader("HOME");
    header.setAttribute('id', 'home-header'); 
    header.onclick = () => this.setCurrentTab(this.homeTab);
    let content = homepageContent();
    return { header, content };
  }

/**
 * @returns {HTMLElement}
 *  */
  createNavBar() {
    let tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-list');

    this.homeTab = this.createHomeTab();
    this.menuTab = this.createMenuTab();
    this.contactTab = this.createContactTab();
    
    tabContainer.appendChild(this.homeTab.header); 
    tabContainer.appendChild(this.menuTab.header);
    tabContainer.appendChild(this.contactTab.header);
    return tabContainer; 
  }
}

let newPage = new Page(); 
export function initial_load() {
  newPage
}

export default newPage; 





