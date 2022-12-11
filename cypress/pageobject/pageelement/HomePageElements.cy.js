///<reference types = "cypress"/>

import locator from '../PageLocator/HomePageLocator.json'


export default class HomePageElements{
    eleReadMoreBtn(){
        return cy.get(locator.readMoreBtnloc);
    }

    eleNavBar(){
        return cy.get(locator.navBarloc)
    }
    eleNavBaroptionsList(){
        return cy.get(locator.navBarOptionslist)
    } 
}